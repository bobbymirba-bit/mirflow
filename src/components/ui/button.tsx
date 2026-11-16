"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(34,211,238,.35),0_10px_30px_-12px_rgba(34,211,238,.7)] hover:bg-[#67e8f9]",
        gradient:
          "bg-[linear-gradient(92deg,#22d3ee_0%,#6366f1_55%,#a855f7_100%)] text-white shadow-[0_10px_34px_-12px_rgba(99,102,241,.85)] hover:shadow-[0_14px_44px_-12px_rgba(34,211,238,.75)] hover:brightness-110 active:brightness-95",
        secondary:
          "border border-white/10 bg-white/[0.04] text-foreground hover:border-white/20 hover:bg-white/[0.08]",
        outline:
          "border border-white/15 bg-transparent text-foreground hover:border-white/35 hover:bg-white/[0.05]",
        ghost: "text-foreground hover:bg-white/[0.06]",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
