import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface ControlProps extends ComponentProps<"input"> {}

export function Control({ className, ...props }: ControlProps) {
  return (
    <div className={twMerge("rounded-lg overflow-hidden", className)}>
      <input type="text" className="outline-none pl-2 w-full py-1" {...props} />
    </div>
  );
}
