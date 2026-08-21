export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      {/* Fondo: gradiente y cuadrícula sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light/70 via-navy to-navy-deep" aria-hidden="true" />
      <div className="grid-tech absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-blue-light/25 blur-3xl" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-16 pb-24 pt-32 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-40">
        {/* Texto */}
        <div className="lg:col-span-7">
          <p className="eyebrow justify-start">
            <span className="u-dot" />
            Desarrollo web · Software · Apps
          </p>

          <h1 className="title mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
            Transformamos ideas en{" "}
            <span className="text-accent">soluciones digitales</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Desarrollamos sitios web, sistemas y aplicaciones a medida, combinando
            tecnología, diseño y funcionalidad para impulsar tu negocio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#proyectos" className="btn-accent px-8 py-3.5 text-sm sm:px-9">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="btn-outline-light px-8 py-3.5 text-sm sm:px-9">
              COTIZAR PROYECTO
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            <li>Sitios web</li>
            <li><span className="u-dot" /> Sistemas</li>
            <li><span className="u-dot" /> Aplicaciones</li>
            <li><span className="u-dot" /> E-commerce</li>
          </ul>
        </div>

        {/* Visual (desktop) */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="panel-dark relative overflow-hidden shadow-2xl shadow-navy-deep/60">
            {/* Barra superior del panel */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="ml-3 h-2 w-40 rounded-full bg-white/10" />
              <span className="ml-auto size-3 rounded-full bg-white/15" />
            </div>

            {/* Contenido abstracto del panel */}
            <div className="grid grid-cols-6 gap-4 p-6">
              {/* Columna lateral */}
              <div className="col-span-2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-7 rounded-lg bg-accent/80" />
                  <span className="h-2 w-14 rounded-full bg-white/20" />
                </div>
                <div className="mt-2 flex flex-col gap-2.5">
                  <span className="h-2 w-full rounded-full bg-white/15" />
                  <span className="h-2 w-4/5 rounded-full bg-white/10" />
                  <span className="h-2 w-3/5 rounded-full bg-white/10" />
                  <span className="h-2 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Contenido principal */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3">
                  <span className="size-2 rounded-full bg-accent-light" />
                  <span className="h-2 w-16 rounded-full bg-white/20" />
                  <span className="ml-auto h-2 w-10 rounded-full bg-accent/90" />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3">
                  <span className="size-2 rounded-full bg-white/20" />
                  <span className="h-2 w-20 rounded-full bg-white/20" />
                  <span className="ml-auto h-2 w-14 rounded-full bg-blue-light/90" />
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <span className="h-16 w-8 rounded-md bg-white/10" />
                    <span className="h-24 w-8 rounded-md bg-blue-light/70" />
                    <span className="h-12 w-8 rounded-md bg-white/10" />
                    <span className="h-28 w-8 rounded-md bg-accent" />
                    <span className="h-16 w-8 rounded-md bg-blue-light/70" />
                    <span className="h-20 w-8 rounded-md bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Etiqueta flotante */}
          <div className="absolute -bottom-5 right-6 hidden rounded-2xl border border-white/10 bg-navy-deep/95 px-5 py-4 shadow-xl shadow-navy-deep/50 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">Proyectos entregados</p>
            <p className="mt-1 font-display text-2xl font-bold text-white"><span className="text-accent">+</span>50</p>
          </div>
        </div>
      </div>
    </section>
  );
}
