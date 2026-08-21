const values: string[] = [
  "Soluciones personalizadas",
  "Diseño moderno",
  "Tecnología actual",
  "Desarrollo escalable",
  "Enfoque en resultados",
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light/60 via-navy to-navy-deep" aria-hidden="true" />
      <div className="grid-tech absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-1/3 size-[26rem] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-navy-deep/50">
            <img
              src="/assets/images/sobre-nosotros.svg"
              alt="Representación abstracta del desarrollo de software de KRC Technologies"
              className="w-full"
              loading="lazy"
              width={640}
              height={560}
            />
          </div>

          <div className="absolute -top-8 right-6 hidden sm:block">
            <div className="rounded-2xl border border-white/10 bg-navy-deep/95 px-6 py-4 shadow-xl shadow-navy-deep/50">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">+ Años de experiencia</p>
              <p className="mt-1 font-display text-2xl font-bold text-white"><span className="text-accent">+</span>5</p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow"><span className="u-dot" /> Nosotros</p>
          <h2 className="title mt-4 text-3xl text-white sm:text-4xl">
            Construimos tecnología con propósito
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            En KRC Technologies desarrollamos soluciones digitales enfocadas en las necesidades
            reales de cada empresa. Combinamos desarrollo, diseño y tecnología para crear
            herramientas que aporten valor y ayuden a nuestros clientes a crecer.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value} className="flex items-center gap-3 text-sm font-medium text-white/85">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent/15" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#B32B22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                </span>
                {value}
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn-outline-light mt-10 px-7 py-3 text-sm">
            Trabaja con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
