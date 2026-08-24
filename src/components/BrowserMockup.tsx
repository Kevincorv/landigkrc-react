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
    <div
      ref={frameRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-mist"
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
  );
}
