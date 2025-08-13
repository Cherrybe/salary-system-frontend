import { VariantProps } from "class-variance-authority";
import React from "react";
import { buttonVariants } from "./Button.cva";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
