import type { Metadata, Viewport } from "next";
import "./globals.css";

const pageTitle = "KRC Technologies — Transformamos ideas en soluciones digitales";
const pageDescription =
  "Desarrollamos sitios web, sistemas y aplicaciones a medida. Soluciones digitales profesionales para impulsar tu negocio.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
  },
  icons: {
    icon: { url: "/assets/images/favicon.png", type: "image/png" },
    apple: "/assets/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#020244",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white font-sans text-navy antialiased">
        {children}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </body>
    </html>
  );
}
