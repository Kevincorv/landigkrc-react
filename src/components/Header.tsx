"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { useHeaderScrolled } from "@/hooks/useHeaderScroll";

export default function Header() {
  const scrolled = useHeaderScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-navy/10" : ""
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <a href="#inicio" className="group flex shrink-0 items-center gap-3" aria-label="KRC Technologies — Ir al inicio">
          <span className="grid size-10 place-items-center rounded-xl bg-accent font-display text-lg font-bold text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-105">
            K
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-navy">KRC</span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-navy/60">Technologies</span>
          </span>
        </a>

        {/* Menú desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="btn-accent hidden px-6 py-2.5 text-sm lg:inline-flex">
            COTIZAR
          </a>

          {/* Botón menú móvil */}
          <button
            id="menu-toggle"
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-navy/15 text-navy transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`border-t border-navy/10 bg-white lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="container-site flex flex-col gap-1 py-6" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-navy/80 transition-colors duration-300 hover:bg-navy/5 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-accent mt-3 px-6 py-3 text-sm"
          >
            COTIZAR
          </a>
        </nav>
      </div>
    </header>
  );
}
