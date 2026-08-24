import type { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6M13.5 4l-3 16" />
      </svg>
    ),
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y adaptados a cualquier dispositivo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
    title: "Sistemas a Medida",
    description: "Sistemas empresariales diseñados según los procesos específicos de cada negocio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18.5h2" />
      </svg>
    ),
    title: "Aplicaciones",
    description: "Desarrollo de aplicaciones modernas y funcionales.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h8.9a1.5 1.5 0 0 0 1.5-1.2L21 8H6" />
      </svg>
    ),
    title: "Agendamiento Online",
    description: "Sistema de agendamiento online para gestionar reservas y turnos de manera rápida y sencilla.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <path d="M14.5 4a3.5 3.5 0 0 0-3.5 3.5V9a1.5 1.5 0 0 0 3 0 .5.5 0 0 1 1 0v2.6a3.5 3.5 0 0 1-3 3.45V18a1 1 0 0 0 2 0v-1.6c1.9-.6 3-2.2 3-4.1A4.5 4.5 0 0 0 14.5 4Z" />
        <path d="M14.5 15.5V17a2.5 2.5 0 0 1-5 0v-6.5a1 1 0 0 0-2 0V11" />
      </svg>
    ),
    title: "Automatización",
    description: "Automatizamos procesos para reducir tareas manuales y mejorar la productividad.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
      </svg>
    ),
    title: "Integraciones",
    description: "Conectamos sistemas, APIs, plataformas y servicios para centralizar operaciones.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="grid-tech-dark absolute inset-0" aria-hidden="true" />

      <div className="container-site relative">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="u-dot" /> Servicios</p>
          <h2 className="title mt-4 text-3xl text-navy sm:text-4xl lg:text-[2.75rem]">
            Soluciones digitales para tu negocio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Desarrollamos tecnología pensada para resolver problemas reales y hacer crecer tu negocio.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="panel reveal group relative p-8 hover:-translate-y-2 hover:border-accent/40 hover:shadow-card-hover"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-navy text-white shadow-lg shadow-navy/20 transition-colors duration-300 group-hover:bg-accent group-hover:shadow-accent/30" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
