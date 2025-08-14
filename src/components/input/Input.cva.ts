import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full border rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400",
  {
    variants: {
      variant: {
        default:
          "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500",
        filled:
          "bg-gray-100 border-gray-300 text-gray-900 focus:border-gray-500 focus:ring-gray-500",
        unstyled:
          "bg-transparent border-none text-gray-900 focus:border-gray-300 focus:ring-gray-300",
        error:
          "bg-white border-red-500 text-red-700 placeholder-red-400 focus:border-red-500 focus:ring-red-500",
      },
      inputSize: {
        default: "h-10 px-3",
        sm: "h-8 px-2 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);
