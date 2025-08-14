import React from "react";
import { InputProps } from "./Input.types";
import { cn } from "@/lib/utils";
import { inputVariants } from "./Input.cva";

export const Input: React.FC<InputProps> = ({
  type = "text",
  className,
  variant,
  inputSize,
  ...props
}) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, inputSize }), className)}
      value={props.value ?? ""}
      {...props}
    />
  );
};
