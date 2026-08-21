import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
};

const clean = (value: unknown): string => {
  if (typeof value !== "string") return "";
  return value.trim();
};

const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const nombre = clean(body.nombre);
  const empresa = clean(body.empresa);
  const email = clean(body.email);
  const telefono = clean(body.telefono);
  const servicio = clean(body.servicio);
  const mensaje = clean(body.mensaje);

  const errores: string[] = [];

  if (nombre === "" || nombre.length > 100) {
    errores.push("El nombre es obligatorio (máx. 100 caracteres).");
  }
  if (!isValidEmail(email)) {
    errores.push("El email no es válido.");
  }
  if (servicio === "") {
    errores.push("Debes seleccionar un servicio.");
  }
  if (mensaje === "" || mensaje.length > 2000) {
    errores.push("El mensaje es obligatorio (máx. 2000 caracteres).");
  }

  if (errores.length > 0) {
    return NextResponse.json(
      { ok: false, message: errores.join(" / ") },
      { status: 422 }
    );
  }

  // Envío por correo con Resend (si está configurado).
  const resend = getResend();
  const contactEmail = process.env.CONTACT_EMAIL ?? "rolonkevin016@gmail.com";
  const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

  if (resend) {
    try {
      const subject = `Nueva consulta desde la web — ${servicio}`;
      const textBody =
        `Nombre: ${nombre}\n` +
        `Empresa: ${empresa}\n` +
        `Email: ${email}\n` +
        `Teléfono: ${telefono}\n` +
        `Servicio: ${servicio}\n` +
        `Mensaje:\n${mensaje}\n`;

      const { error } = await resend.emails.send({
        from: `KRC Technologies <${fromEmail}>`,
        to: [contactEmail],
        replyTo: email,
        subject,
        text: textBody,
      });

      if (error) {
        return NextResponse.json(
          {
            ok: false,
            message: "Hubo un problema al enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "Hubo un problema al enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.",
        },
        { status: 502 }
      );
    }
  }

  // Sin RESEND_API_KEY: las validaciones pasaron pero no hay correo configurado.
  // Devolvemos éxito simulado para que la demo funcione.
  return NextResponse.json({ ok: true, simulated: true });
}
