export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export const footerNav: NavItem[] = navItems;

export const footerServices: string[] = [
  "Desarrollo Web",
  "Sistemas a Medida",
  "Aplicaciones",
  "Agendamiento Online",
  "Automatización e Integraciones",
];
