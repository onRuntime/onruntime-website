"use client";

import type {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Check, ChevronRight, Link as LinkIcon } from "lucide-react";
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCopyToClipboard } from "usehooks-ts";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export const Accordions = forwardRef<
  HTMLDivElement,
  | Omit<AccordionSingleProps, "value" | "onValueChange">
  | Omit<AccordionMultipleProps, "value" | "onValueChange">
>(({ type = "single", className, defaultValue, children, ...props }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const composedRef = mergeRefs(ref, rootRef);
  const [value, setValue] = useState<string | string[]>(() =>
    type === "single" ? (defaultValue ?? "") : (defaultValue ?? []),
  );

  useEffect(() => {
    const id = window.location.hash.substring(1);
    const element = rootRef.current;
    if (!element || id.length === 0) return;

    const selected = document.getElementById(id);
    if (!selected || !element.contains(selected)) return;
    const itemValue = selected.getAttribute("data-accordion-value");

    if (itemValue)
      setValue((prev) => (typeof prev === "string" ? itemValue : [itemValue, ...prev]));
  }, []);

  return (
    // @ts-expect-error -- Multiple types
    <AccordionPrimitive.Root
      type={type}
      ref={composedRef}
      value={value}
      onValueChange={setValue}
      collapsible={type === "single" ? true : undefined}
      className={cn(
        "divide-y divide-border overflow-hidden rounded-lg border bg-card my-6",
        className,
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});

Accordions.displayName = "Accordions";

export const Accordion = forwardRef<
  HTMLDivElement,
  Omit<
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    "value" | "title"
  > & {
    title: string | ReactNode;
    value?: string;
  }
>(
  (
    { title, className, id, value = String(title), children, ...props },
    ref,
  ) => {
    return (
      <AccordionPrimitive.Item
        ref={ref}
        value={value}
        className={cn("scroll-m-24", className)}
        {...props}
      >
        <AccordionPrimitive.Header
          id={id}
          data-accordion-value={value}
          className="not-prose flex flex-row items-center text-card-foreground font-medium has-focus-visible:bg-accent"
        >
          <AccordionPrimitive.Trigger
            className="group flex flex-1 items-center gap-2 px-3 py-2.5 text-start focus-visible:outline-none"
          >
            <ChevronRight
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90"
            />
            {title}
          </AccordionPrimitive.Trigger>
          {id ? <CopyButton id={id} /> : null}
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        >
          <div
            className="px-4 pb-2 text-muted-foreground [&>:last-child]:mb-0 [&>*]:!text-[15px]"
          >
            {children}
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    );
  },
);

function CopyButton({ id }: { id: string }) {
  const [, copy] = useCopyToClipboard();
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    const url = new URL(window.location.href);
    url.hash = id;
    copy(url.toString());
    setChecked(true);
    setTimeout(() => setChecked(false), 2000);
  };

  return (
    <button
      type="button"
      aria-label="Copy Link"
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
          className: "text-muted-foreground me-2",
        }),
      )}
      onClick={onClick}
    >
      {checked ? (
        <Check className="size-3.5" />
      ) : (
        <LinkIcon className="size-3.5" />
      )}
    </button>
  );
}

Accordion.displayName = "Accordion";
