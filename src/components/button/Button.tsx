import React from 'react'
import { ButtonProps } from './Button.types'
import { buttonVariants } from './Button.cva'
import { cn } from '../../lib/utils'

export const Button = ({ className, variant, size, ...props }: ButtonProps): React.JSX.Element => {
  return (
    <button
      className={cn(buttonVariants({variant, size}), className)}
      {...props}
    />
  );
};
