import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface LabelProps extends ComponentProps<"label"> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge("text-sm text-white font-semibold", className)}
      {...props}
    />
  );
}
