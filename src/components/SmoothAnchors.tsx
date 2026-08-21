"use client";

import { useSmoothAnchors } from "@/hooks/useSmoothAnchors";

/**
 * Componente invisible que activa la navegación suave sin anclas
 * en la URL a nivel global. Se monta una sola vez en page.tsx.
 */
export default function SmoothAnchors() {
  useSmoothAnchors();
  return null;
}
