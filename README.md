# KRC Technologies — Landing Page (React + TypeScript)

Migración del proyecto original PHP a **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, lista para desplegar en Vercel. Los estilos, el diseño y el comportamiento (menú móvil, reveal on scroll, navegación suave sin anclas en la URL) se mantienen idénticos al original.

## Stack

- **Next.js 14** (App Router) — SSR/SSG + API Routes
- **TypeScript** (strict)
- **Tailwind CSS 3.4** (mismas clases custom: `btn-accent`, `panel`, `eyebrow`, `field-input`, `nav-link`, `grid-tech`, `reveal`…)
- **Resend** — envío real de emails desde el formulario (serverless)

## Estructura

```
landigkrc-react/
├── public/
│   └── assets/images/            # Favicons, ilustraciones, imágenes de proyectos
├── src/
│   ├── app/
│   │   ├── layout.tsx            # <head>, metadatos, fuentes, viewport
│   │   ├── page.tsx              # Composición de la landing
│   │   ├── globals.css           # Tailwind + clases custom (port de input.css)
│   │   └── api/contact/route.ts  # Endpoint POST del formulario (valida + envía con Resend)
│   ├── components/
│   │   ├── Header.tsx            # Navegación + menú móvil (cliente)
│   │   ├── Footer.tsx
│   │   ├── SmoothAnchors.tsx     # Scroll suave sin # en la URL
│   │   ├── RevealOnScroll.tsx    # IntersectionObserver sobre .reveal
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── About.tsx
│   │       ├── Process.tsx
│   │       ├── Projects.tsx
│   │       ├── Cta.tsx
│   │       └── Contact.tsx       # Formulario (cliente) → POST /api/contact
│   ├── data/                     # Nav items, redes sociales
│   ├── hooks/                    # useSmoothAnchors, useHeaderScroll
│   └── lib/resend.ts             # Cliente singleton de Resend
├── tailwind.config.ts            # Mismos colores/sombras/fuentes del original
├── .env.example                  # Variables de entorno (Resend)
└── package.json
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # typecheck + build de producción
npm run start      # sirve el build
```

## Formulario de contacto

El formulario envía un `POST` a `/api/contact` (JSON). El endpoint:

1. Valida los campos (mismas reglas que el `contact.php` original).
2. Si hay errores → `422` con los mensajes.
3. Si `RESEND_API_KEY` está configurada → envía el email real con Resend.
4. Si no está configurada → responde `{ ok: true, simulated: true }` (modo demo).

> A diferencia del PHP, aquí **no se loguea a `storage/`** porque Vercel es serverless y no tiene sistema de archivos persistente. El email vía Resend reemplaza esa funcionalidad.

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
3. **Framework Preset:** Next.js (autodetectado).
4. **Root Directory:** `landigkrc-react` (si subiste el workspace completo).
5. **Environment Variables** (Settings → Environment Variables):

   | Variable | Valor |
   |---|---|
   | `RESEND_API_KEY` | Tu API key de [resend.com/api-keys](https://resend.com/api-keys) |
   | `FROM_EMAIL` | `onboarding@resend.dev` (pruebas) o un dominio verificado en Resend, p. ej. `web@krctechnologies.com` |
   | `CONTACT_EMAIL` | `rolonkevin016@gmail.com` (destino) |

6. **Deploy.** Vercel asigna un dominio `*.vercel.app`.

### Configurar tu dominio `.com`

1. Vercel → **Project Settings → Domains → Add** → ingresa `krctechnologiess.com`.
2. Añade también `www.krctechnologiess.com` y márcalo como redirect a la versión sin `www` (o viceversa).
3. Vercel te mostrará los **records DNS** a configurar en tu registrar del dominio:
   - **A record** `@ → 76.76.21.21` (o el que indique Vercel), o
   - **CNAME** `www → cname.vercel-dns.com`.
4. Una vez propagados los DNS, Vercel emite el **certificado SSL** automáticamente y el sitio queda en `https://krctechnologiess.com`.

> Si actualmente el dominio apunta a InfinityFree, cambia los nameservers o los records A/CNAME en el panel de tu registrar (donde compraste el `.com`) para que apunten a Vercel. El despliegue en InfinityFree ya no se usará.

### Verificar el dominio en Resend (para enviar como `@krctechnologiess.com`)

Para enviar correos desde `web@krctechnologiess.com` (en vez del `onboarding@resend.dev` de prueba):

1. Resend → **Domains → Add Domain** → `krctechnologiess.com`.
2. Añade los records DNS (SPF, DKIM, DMARC) que Resend te indique en tu registrar.
3. Una vez verificado, usa `FROM_EMAIL=web@krctechnologiess.com` en Vercel.

## Mapeo PHP → React

| Original (PHP) | Migrado (React) |
|---|---|
| `index.php` + includes | `src/app/page.tsx` + `src/components/sections/*` |
| `includes/header.php` | `src/components/Header.tsx` |
| `includes/footer.php` | `src/components/Footer.tsx` |
| `contact.php` | `src/app/api/contact/route.ts` |
| `assets/js/main.js` (menú móvil, scroll, reveal) | `src/hooks/*` + `SmoothAnchors` + `RevealOnScroll` |
| `assets/css/input.css` | `src/app/globals.css` |
| `tailwind.config.js` | `tailwind.config.ts` |
| `assets/images/*` | `public/assets/images/*` |
| `storage/*.json` (log de consultas) | Eliminado (serverless); reemplazado por email vía Resend |

## Datos a personalizar

- `src/components/sections/Contact.tsx` — email, teléfono, ubicación y enlaces sociales.
- `src/data/socials.tsx` — URLs de LinkedIn, GitHub, Instagram.
- `src/components/sections/Projects.tsx` — proyectos y enlaces.
- `public/assets/images/projects/*` — capturas reales de proyectos.
- Variables de entorno (`CONTACT_EMAIL`, `FROM_EMAIL`).
