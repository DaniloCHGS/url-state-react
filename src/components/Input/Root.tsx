import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface RootProps extends ComponentProps<"div"> {}

export function Root({ className, ...props }: RootProps) {
  return <div className={twMerge("w-full space-y-2", className)} {...props} />;
}
