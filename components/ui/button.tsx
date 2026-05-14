"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-tight outline-none ring-offset-ivory transition duration-300 focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        default:
          "bg-sunrise text-white shadow-soft hover:bg-sunrise-soft hover:text-hope-deep",
        secondary:
          "border border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white",
        outline:
          "border border-hope-muted/35 bg-transparent text-hope-deep hover:border-hope/40 hover:bg-white",
        ivory:
          "bg-ivory text-hope-deep shadow-card hover:bg-white hover:shadow-soft",
        ghost: "text-hope-deep hover:bg-hope/5",
        link: "text-hope underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 rounded-full px-5 text-xs",
        lg: "h-14 rounded-full px-10 text-[15px]",
        xl: "h-16 px-11 text-[16px]",
        icon: "h-11 w-11 rounded-full border border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
