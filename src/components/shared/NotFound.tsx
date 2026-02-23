import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NotFoundProps {
  message?: string;
  className?: string;
  messageClassName?: string;
  children?: ReactNode;
  onRetry?: () => void;
}

export function NotFound({
  message = "Nothing found",
  className,
  messageClassName,
  children,
  onRetry,
}: NotFoundProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12",
        className
      )}
    >
      <p
        className={cn(
          "text-center text-muted-foreground",
          messageClassName
        )}
      >
        {message}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        >
          Try again
        </button>
      )}
      {children}
    </div>
  );
}
