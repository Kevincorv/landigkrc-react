type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  { number: "01", title: "Analizamos", description: "Entendemos tu idea, necesidad o problema." },
  { number: "02", title: "Diseñamos", description: "Definimos la estructura y experiencia de usuario." },
  { number: "03", title: "Desarrollamos", description: "Construimos la solución utilizando tecnologías modernas." },
  { number: "04", title: "Lanzamos", description: "Ponemos el proyecto en producción y acompañamos su evolución." },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center"><span className="u-dot" /> Proceso</p>
          <h2 className="title mt-4 text-3xl text-navy sm:text-4xl lg:text-[2.75rem]">
            ¿Cómo trabajamos?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
            Un proceso claro y ordenado para convertir tu idea en un producto digital que funcione.
          </p>
        </div>

        {/* Pasos */}
        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Línea conectora (solo desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-blue/20 lg:block" aria-hidden="true" />

          {steps.map((step) => (
            <li key={step.number} className="reveal group relative flex flex-col items-center text-center">
              <div className="relative z-10 grid size-12 place-items-center rounded-full border border-accent bg-white font-display text-sm font-bold text-accent shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-navy/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
