"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CalButton from "@/components/cal-button";
import { cn } from "@/lib/utils";

type DropdownItem = {
  title: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      { title: "Our Achievements", href: "/work#our-achievements" },
      { title: "What We Offer", href: "/work#what-we-offer" },
      { title: "Our Portfolio", href: "/work#our-portfolio" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { title: "Event Production", href: "/services#event-production" },
      { title: "Decor & Styling", href: "/services#decor-and-styling" },
      { title: "Staffing", href: "/services#staffing" },
      { title: "Operations", href: "/services#operations" },
      { title: "Logistics", href: "/services#logistics" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Get in Touch", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dynamic island wrapper — transforms into floating pill on scroll */}
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "mx-2 md:mx-auto md:max-w-[1200px] mt-2 md:mt-3 bg-brand-champagne/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-[10px]"
            : "",
        )}
      >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-5 md:px-8 lg:px-10">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/Sterling%20Experiences%20Logo%20purple.png"
                  alt="Sterling Experiences"
                  width={180}
                  height={48}
                  priority
                  className="object-contain"
                  style={{ width: "auto", height: "38px" }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) =>
                  item.children ? (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 text-[16px] font-body tracking-wide transition-colors duration-200",
                          isActive(item.href)
                            ? "text-brand-purple"
                            : "text-neutral-700 hover:text-brand-purple",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            openDropdown === item.label && "rotate-180",
                          )}
                        />
                      </Link>

                      {openDropdown === item.label && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                          <div className="bg-brand-champagne rounded-lg shadow-xl border border-neutral-200/80 py-2 min-w-[240px]">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-2.5 text-[15px] font-body text-neutral-700 hover:text-brand-purple hover:bg-brand-purple/5 transition-all"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-[16px] font-body tracking-wide transition-colors duration-200",
                        isActive(item.href)
                          ? "text-brand-purple"
                          : "text-neutral-700 hover:text-brand-purple",
                      )}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center">
                <CalButton
                  title="Book a Consultation"
                  variant="primary"
                />
              </div>

              {/* Mobile Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-brand-purple">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showClose={false}
                  className="bg-brand-champagne w-full sm:max-w-sm p-0 border-l border-neutral-200"
                >
                  <VisuallyHidden.Root>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden.Root>
                  <VisuallyHidden.Root>
                    <SheetDescription>Mobile navigation menu with links to all pages</SheetDescription>
                  </VisuallyHidden.Root>

                  <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200">
                    <Image
                      src="/Sterling%20Experiences%20Logo%20purple.png"
                      alt="Sterling Experiences"
                      width={160}
                      height={40}
                      className="object-contain"
                      style={{ width: "auto", height: "32px" }}
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-neutral-700">
                        <X className="size-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <div className="px-4 py-6 space-y-1">
                    {navItems.map((item) =>
                      item.children ? (
                        <div key={item.href} className="space-y-0.5">
                          <div className="flex items-center justify-between px-3 py-2.5 rounded-md">
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex-1 text-[16px] font-body font-semibold transition-all",
                                  isActive(item.href)
                                    ? "text-brand-purple"
                                    : "text-neutral-700 hover:text-brand-purple",
                                )}
                              >
                                {item.label}
                              </Link>
                            </SheetClose>
                            <button
                              onClick={() =>
                                setMobileExpanded(
                                  mobileExpanded === item.label ? null : item.label,
                                )
                              }
                              className="p-1 text-neutral-500 hover:text-brand-purple transition-colors"
                              aria-label={`Toggle ${item.label} submenu`}
                            >
                              <ChevronDown
                                className={cn(
                                  "size-4 transition-transform duration-200",
                                  mobileExpanded === item.label && "rotate-180",
                                )}
                              />
                            </button>
                          </div>
                          {mobileExpanded === item.label && (
                            <>
                              <style>{`
                                .v1-wrap > * {
                                  animation: v1-slideDown 300ms cubic-bezier(0.25, 1, 0.5, 1) both;
                                  animation-delay: calc(40 * 1ms * var(--i, 0));
                                }
                                @keyframes v1-slideDown {
                                  from { opacity: 0; transform: translateY(-8px); }
                                  to { opacity: 1; transform: translateY(0); }
                                }
                                @media (prefers-reduced-motion: reduce) {
                                  .v1-wrap > * {
                                    animation: none !important;
                                    opacity: 1 !important;
                                  }
                                }
                              `}</style>
                              <div className="v1-wrap ml-3 border-l-2 border-brand-gold/60 pl-4 space-y-0.5">
                                {item.children.map((child, i) => (
                                  <SheetClose asChild key={child.href}>
                                    <Link
                                      href={child.href}
                                      style={{ "--i": i } as React.CSSProperties}
                                      className="block px-3 py-2.5 text-[15px] font-body text-neutral-700 hover:text-brand-purple rounded-md transition-all"
                                    >
                                      {child.title}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block px-3 py-3 text-[16px] font-body font-semibold rounded-md transition-all",
                              isActive(item.href)
                                ? "text-brand-purple"
                                : "text-neutral-700 hover:text-brand-purple",
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ),
                    )}
                  </div>

                  <div className="px-4 pb-8 pt-2 border-t border-neutral-200">
                    <SheetClose asChild>
                      <CalButton
                        title="Book a Consultation"
                        variant="primary"
                        className="w-full"
                      />
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
      </div>
    </header>
  );
}
