"use client";

import { useState } from "react";

type BrowserMockupProps = {
  url?: string;
  label: string;
  alt: string;
  fallbackImage: string;
};

function buildScreenshotUrl(url: string): string {
  return `https://image.thum.io/get/width/1280/crop/960/noanimate/${url}`;
}

function prettyUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === "/" ? "" : parsed.pathname;
    return parsed.hostname + path;
  } catch {
    return url;
  }
}

export default function BrowserMockup({
  url,
  label,
  alt,
  fallbackImage,
}: BrowserMockupProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const hasUrl = Boolean(url);
  const showFallback = !hasUrl || errored;
  const screenshotSrc = hasUrl ? buildScreenshotUrl(url!) : fallbackImage;

  return (
    <div className="overflow-hidden rounded-t-[25px] bg-[#EDF0F7]">
      {/* Barra superior del navegador */}
      <div className="flex items-center gap-3 border-b border-blue/10 bg-[#EDF0F7] px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex max-w-[80%] items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-[11px] font-medium text-navy/50 shadow-sm">
            <svg
              className="size-3 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">
              {hasUrl ? prettyUrl(url!) : "krc.dev/proyecto"}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <span className="size-2.5 rounded-sm bg-navy/10" />
          <span className="hidden size-2.5 rounded-sm bg-navy/10 sm:block" />
        </div>
      </div>

      {/* Area de captura */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
        {/* Etiqueta de categoria */}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-navy/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {label}
        </span>

        {showFallback ? (
          <img
            src={fallbackImage}
            alt={alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-mist via-mist to-blue/5" />
            )}
            <img
              src={screenshotSrc}
              alt={alt}
              className="relative z-10 h-full w-full object-cover object-top transition-opacity duration-500"
              style={{ opacity: loaded ? 1 : 0 }}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}
