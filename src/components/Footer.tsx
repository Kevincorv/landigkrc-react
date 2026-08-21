import { footerNav, footerServices } from "@/data/site";
import socials from "@/data/socials";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 text-white sm:pt-20">
      <div className="container-site">
        <div className="grid gap-12 pb-14 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center gap-3" aria-label="KRC Technologies — Ir al inicio">
              <span className="grid size-10 place-items-center rounded-xl bg-accent font-display text-lg font-bold text-white">K</span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">KRC</span>
                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-white/60">Technologies</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Transformamos ideas en soluciones digitales.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className="grid size-10 place-items-center rounded-xl border border-white/10 text-white/60 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Enlaces</h3>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/70 transition-colors duration-300 hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Servicios</h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service} className="text-sm text-white/70">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} KRC Technologies. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            Diseñado y desarrollado por <span className="font-semibold text-white/70">KRC Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
