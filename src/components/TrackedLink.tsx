"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  /** analytics event name, e.g. "service_click" or "insight_click" */
  event: string;
  /** the item that was clicked, e.g. the service or insight title */
  label: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * A Link that fires a lightweight analytics event before navigating.
 * Works with Google Analytics (gtag) or Google Tag Manager (dataLayer) if
 * present; silently no-ops otherwise. This lets us track which service /
 * insight a visitor clicked for lead-source reporting.
 */
export default function TrackedLink({ href, event, label, className, children, ...rest }: Props) {
  const track = () => {
    if (typeof window === "undefined") return;
    window.dataLayer?.push({ event, item: label });
    window.gtag?.("event", event, { item: label });
  };

  return (
    <Link href={href} className={className} onClick={track} {...rest}>
      {children}
    </Link>
  );
}
