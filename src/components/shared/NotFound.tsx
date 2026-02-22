import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NotFoundProps {
  message?: string;
  className?: string;
  children?: ReactNode;
}

export function NotFound({
  message = "Nothing found",
  className,
  children,
}: NotFoundProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12",
        className
      )}
    >
      <p className="text-center text-muted-foreground">{message}</p>
      {children}
    </div>
  );
}
