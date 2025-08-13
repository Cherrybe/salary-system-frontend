import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg active:scale-[0.98]",
        outline:
          "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98]",
        secondary:
          "bg-gray-500 text-white hover:bg-gray-600 active:scale-[0.98]",
        ghost:
          "bg-transparent text-gray-800 hover:bg-gray-100 active:scale-[0.98]",
        link: "bg-transparent text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
