import Link from "next/link"
import Image from "next/image"
import { SITE, SOCIAL_LINKS } from "@/lib/constants"

function StackedCircularFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-gold pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="block">
            <Image
              src="/Sterling%20Experiences%20Logo%20purple.png"
              alt="Sterling Experiences"
              width={240}
              height={80}
              priority
              className="object-contain"
              style={{ width: "auto", height: "70px" }}
            />
          </Link>
        </div>

        {/* Tagline */}
        <p className="text-center text-neutral-900/80 text-[17px] font-body mb-10 max-w-xl mx-auto leading-relaxed">
          Precision-built event experiences for brands, institutions, startups, and individuals.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-12">
          <Link href="/work" className="text-[15px] font-body text-brand-purple hover:text-neutral-900 transition-colors">
            Work
          </Link>
          <Link href="/services" className="text-[15px] font-body text-brand-purple hover:text-neutral-900 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-[15px] font-body text-brand-purple hover:text-neutral-900 transition-colors">
            About
          </Link>
          <Link href="/insights" className="text-[15px] font-body text-brand-purple hover:text-neutral-900 transition-colors">
            Insights
          </Link>
          <Link href="/contact" className="text-[15px] font-body text-brand-purple hover:text-neutral-900 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12">
          <Link
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900/10 text-neutral-900/70 hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900/10 text-neutral-900/70 hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900/10 text-neutral-900/70 hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900/20 pt-6">
          <p className="text-center text-[14px] font-body font-bold text-neutral-900/50">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
