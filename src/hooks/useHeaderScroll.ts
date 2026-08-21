"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve `true` cuando la página se ha desplazado más de 10px,
 * para añadir sombra al header fijo. Replica el `onScroll` de main.js.
 */
export function useHeaderScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
