"use client";

import { useEffect } from "react";

/**
 * Navegación suave sin anclas en la URL.
 *
 * Intercepta los clics en enlaces internos (a[href^="#"]) para hacer
 * scroll suave a la sección correspondiente sin dejar el fragmento
 * (#contacto, #servicios...) en la barra de direcciones. También limpia
 * un posible ancla inicial al entrar al sitio.
 *
 * Replica exactamente el comportamiento de assets/js/main.js del
 * proyecto PHP original.
 */
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    };

    document.addEventListener("click", onClick);

    if (
      window.location.hash &&
      document.getElementById(window.location.hash.slice(1))
    ) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    return () => document.removeEventListener("click", onClick);
  }, []);
}
