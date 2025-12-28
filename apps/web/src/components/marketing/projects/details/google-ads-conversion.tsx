"use client";

import React from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params: Record<string, unknown>
    ) => void;
  }
}

interface GoogleAdsConversionLinkProps {
  href: string;
  sendTo: string;
  children: React.ReactNode;
}

/**
 * Component that triggers Google Ads conversion when clicked
 * @param href - The destination URL
 * @param sendTo - The Google Ads conversion ID (format: AW-XXXXXXXXX/XXXXXXXXXX)
 */
export const GoogleAdsConversionLink: React.FC<GoogleAdsConversionLinkProps> = ({
  href,
  sendTo,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only trigger in production
    if (process.env.NODE_ENV === "production" && typeof window.gtag === "function") {
      e.preventDefault();

      window.gtag("event", "conversion", {
        send_to: sendTo,
        event_callback: () => {
          window.location.href = href;
        },
      });

      // Fallback timeout in case callback doesn't fire
      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};
