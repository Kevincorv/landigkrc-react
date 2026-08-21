"use client";

import { useRef, useState } from "react";
import socials from "@/data/socials";
import type { ReactNode } from "react";

type ContactItem = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    label: "Email",
    value: "hola@krctechnologies.com",
    href: "mailto:hola@krctechnologies.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
      </svg>
    ),
    label: "Teléfono",
    value: "+595 975 750 664",
    href: "https://wa.link/9kbecf",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Ubicación",
    value: "San Ignacio Misiones, Paraguay — trabajo con clientes de todo el mundo",
  },
];

const services = [
  "Desarrollo Web",
  "Sistemas a Medida",
  "Aplicaciones",
  "E-Commerce",
  "Automatización",
  "Integraciones",
  "Otro",
];

type Status = {
  message: string;
  isError: boolean;
} | null;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (res.ok && result.ok) {
        setStatus({
          message: "¡Gracias! Tu consulta fue enviada. Te contactaremos a la brevedad.",
          isError: false,
        });
        form.reset();
      } else {
        setStatus({
          message: result.message ?? "Hubo un problema al enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.",
          isError: true,
        });
      }
    } catch {
      setStatus({
        message: "No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.",
        isError: true,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="relative bg-white py-20 sm:py-28">
      <div className="container-site">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="u-dot" /> Contacto</p>
          <h2 className="title mt-4 text-3xl text-navy sm:text-4xl lg:text-[2.75rem]">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
            Déjanos tus datos y te responderemos a la brevedad con una propuesta a tu medida.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Información de contacto */}
          <div className="lg:col-span-4">
            <ul className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1.5 block text-sm font-medium text-navy transition-colors duration-300 hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm font-medium text-navy">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}

              {/* Redes sociales */}
              <li className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8s-1 2-4 2-4-2-4-2" />
                    <path d="M9 14h.01M15 14h.01" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Redes sociales</p>
                  <div className="mt-2 flex items-center gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                        aria-label={social.name}
                        className="grid size-10 place-items-center rounded-lg border border-blue/15 text-navy transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="panel relative p-7 shadow-card sm:p-10"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-navy">Nombre*</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" className="field-input" />
                </div>
                <div>
                  <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-navy">Empresa</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" className="field-input" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">Email*</label>
                  <input type="email" id="email" name="email" required placeholder="tu@email.com" className="field-input" />
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-navy">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="+595 975 750 664" className="field-input" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="servicio" className="mb-2 block text-sm font-medium text-navy">Servicio*</label>
                  <select id="servicio" name="servicio" required defaultValue="" className="field-input">
                    <option value="" disabled>Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-navy">Mensaje*</label>
                  <textarea id="mensaje" name="mensaje" rows={5} required placeholder="Cuéntanos sobre tu proyecto..." className="field-input resize-none" />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="w-full text-xs leading-relaxed text-navy/55 sm:max-w-xs">
                  * Campos obligatorios. Al enviar aceptas que te contactemos por tu consulta.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-accent w-full px-9 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? "ENVIANDO..." : "ENVIAR CONSULTA"}
                </button>
              </div>

              {/* Estado de envío */}
              {status && (
                <p
                  ref={(el) => {
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`mt-5 rounded-xl px-4 py-3 text-sm font-medium ${
                    status.isError ? "bg-accent/10 text-accent" : "bg-navy/5 text-navy"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
