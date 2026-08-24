import BrowserMockup from "@/components/BrowserMockup";

type Project = {
  image: string;
  title: string;
  category: string;
  description: string;
  url?: string;
};

const projects: Project[] = [
  {
    image: "/assets/images/projects/sistema-gestion.svg",
    title: "Sistema de Gestión de Stock",
    category: "Sistema web",
    description:
      "Sistema web empresarial para controlar inventario, productos, entradas, salidas y operaciones del negocio.",
    url: "https://enlodeapubodega.vercel.app/login",
  },
  {
    image: "/assets/images/projects/ecommerce.svg",
    title: "Agendamiento Online",
    category: "Sistema de agendamiento online para gestionar reservas y turnos de manera rápida y sencilla.",
    description: "Sistema de agendamiento online para gestionar reservas y turnos de manera rápida y sencilla.",
    url: "https://agendamientoonline.vercel.app/",
  },
  {
    image: "/assets/images/projects/landing-corporativa.svg",
    title: "AutoShopping — Tienda Automotriz",
    category: "Sitio web",
    description:
      "Sitio web moderno para la gestión y comercialización de productos automotrices.",
    url: "https://autoshopping.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-mist py-20 sm:py-28"
    >
      <div className="container-site relative">
        {/* Encabezado */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="u-dot" /> Proyectos
            </p>
            <h2 className="title mt-4 text-3xl text-navy sm:text-4xl lg:text-[2.75rem]">
              Proyectos que hablan por nosotros
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy/65 lg:pb-2">
            Cada proyecto es una solución real, pensada para sumar valor y
            resultados a quien la usa.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const href = project.url ?? "#contacto";
            return (
              <article
                key={project.title}
                className="reveal group flex flex-col rounded-[25px] border border-blue/10 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <a
                  href={href}
                  {...(project.url
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block"
                  aria-label={`${project.title} — ver proyecto`}
                >
                  <BrowserMockup
                    url={project.url}
                    label={project.category}
                    alt={`Captura de ${project.title}`}
                    fallbackImage={project.image}
                  />

                  <div className="p-5 pt-6">
                    <h3 className="font-display text-xl font-semibold text-navy transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Ver proyecto
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
