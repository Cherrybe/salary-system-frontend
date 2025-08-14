import { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { inputVariants } from "./Input.cva";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  className?: string;
  type?: string;
}
