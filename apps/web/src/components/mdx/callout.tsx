import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type CalloutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "title" | "type" | "icon"
> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: "info" | "warn" | "error" | "success" | "warning";
  /**
   * Force an icon
   */
  icon?: ReactNode;
};

const iconClass = "size-5 -me-0.5 text-card";

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, title, type = "info", icon, ...props }, ref) => {
    const normalizedType: "info" | "warning" | "error" | "success" =
      type === "warn" ? "warning" : type === "warning" ? "warning" : type;

    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-2 my-4 rounded-xl border bg-card p-3 ps-1 text-sm text-card-foreground shadow-md",
          className,
        )}
        {...props}
        style={
          {
            "--callout-color":
              normalizedType === "info"
                ? "#3b82f6"
                : normalizedType === "warning"
                  ? "#f59e0b"
                  : normalizedType === "error"
                    ? "#ef4444"
                    : normalizedType === "success"
                      ? "#10b981"
                      : "#6b7280",
            ...props.style,
          } as object
        }
      >
        <div
          role="none"
          className="w-0.5 rounded-sm"
          style={{
            backgroundColor: "rgb(from var(--callout-color) r g b / 0.5)",
          }}
        />
        {icon ??
          {
            info: (
              <Info
                className={iconClass}
                style={{ fill: "var(--callout-color)" }}
              />
            ),
            warning: (
              <TriangleAlert
                className={iconClass}
                style={{ fill: "var(--callout-color)" }}
              />
            ),
            error: (
              <CircleX
                className={iconClass}
                style={{ fill: "var(--callout-color)" }}
              />
            ),
            success: (
              <CircleCheck
                className={iconClass}
                style={{ fill: "var(--callout-color)" }}
              />
            ),
          }[normalizedType]}
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          {title && <p className="font-medium !my-0 text-foreground">{title}</p>}
          <div
            className="text-muted-foreground empty:hidden [&>:first-child]:mt-0 [&>:last-child]:mb-0 [&>*]:!text-sm"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Callout.displayName = "Callout";
