"use client";

import { useEffect, useRef, useState } from "react";

type BrowserMockupProps = {
  url?: string;
  label: string;
  alt: string;
  fallbackImage: string;
};

const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 960;

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
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  const hasUrl = Boolean(url);

  useEffect(() => {
    if (!hasUrl || !frameRef.current) return;
    const el = frameRef.current;

    const updateScale = () => {
      setScale(el.clientWidth / PREVIEW_WIDTH);
    };
    updateScale();

    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, [hasUrl]);

  useEffect(() => {
    if (!hasUrl) return;
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasUrl]);

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

      {/* Área de vista previa */}
      <div
        ref={frameRef}
        className="relative aspect-[4/3] w-full overflow-hidden bg-mist"
      >
        {/* Etiqueta de categoría */}
        <span className="absolute left-4 top-4 z-30 rounded-full bg-navy/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {label}
        </span>

        {!hasUrl ? (
          <img
            src={fallbackImage}
            alt={alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-mist">
                <div className="flex flex-col items-center gap-3">
                  <div className="size-8 animate-spin rounded-full border-2 border-navy/15 border-t-accent" />
                  <span className="text-[11px] font-medium text-navy/40">
                    Cargando vista previa…
                  </span>
                </div>
              </div>
            )}
            {inView && (
              <div
                className="absolute left-0 top-0 z-0"
                style={{
                  width: `${PREVIEW_WIDTH}px`,
                  height: `${PREVIEW_HEIGHT}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <iframe
                  src={url}
                  title={alt}
                  loading="lazy"
                  tabIndex={-1}
                  scrolling="no"
                  onLoad={() => setLoaded(true)}
                  className="block size-full border-0 bg-white"
                  style={{ pointerEvents: "none" }}
                  aria-hidden="true"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
