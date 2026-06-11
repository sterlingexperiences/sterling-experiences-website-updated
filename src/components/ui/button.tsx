import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-[8px] text-[16px] font-openSans font-normal leading-[22px] tracking-[-0.02em] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[12px] cursor-pointer active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-purple text-primary-foreground hover:bg-[#660066] shadow-[0_4px_20px_rgba(128,0,128,0.18)]",
        secondary:
          "border-2 border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple hover:text-primary-foreground",
        accent:
          "bg-brand-gold text-brand-purple hover:bg-[#e6c200] shadow-[0_4px_16px_rgba(255,215,0,0.25)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
