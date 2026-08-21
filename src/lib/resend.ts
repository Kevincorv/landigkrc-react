import { Resend } from "resend";

let cachedClient: Resend | null = null;

/**
 * Cliente singleton de Resend. Se crea solo si existe RESEND_API_KEY,
 * de lo contrario devuelve null y el endpoint responde en modo simulado.
 */
export function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  if (!cachedClient) {
    cachedClient = new Resend(apiKey);
  }
  return cachedClient;
}
