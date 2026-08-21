export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-light/60 to-navy-deep" aria-hidden="true" />
      <div className="grid-tech absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <div className="container-site relative flex flex-col items-center text-center">
        <p className="eyebrow justify-center"><span className="u-dot" /> Hagamos algo grande</p>

        <h2 className="title mt-6 max-w-3xl text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          ¿Tienes una idea? <span className="text-accent">Hagámosla realidad.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Cuéntanos qué necesitas y encontremos juntos la mejor solución digital para tu negocio.
        </p>

        <a href="#contacto" className="btn-accent mt-10 px-10 py-4 text-sm sm:text-base">
          COTIZAR PROYECTO
        </a>
      </div>
    </section>
  );
}
