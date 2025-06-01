import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env.development' });

export const prerender = false;

export async function GET(context) {
  // Usa o runtime se disponível, caso contrário process.env
  const env = (context.locals && context.locals.runtime && context.locals.runtime.env) || process.env;
  
  console.log("[whatsapp] WP_NUMBER (process.env):", process.env.WP_NUMBER);
  console.log("[whatsapp] Bindings disponíveis:", Object.keys(env));

  const wpNumber = env.WP_NUMBER;
  if (!wpNumber) {
    console.error("[whatsapp] WP_NUMBER não encontrado, keys:", Object.keys(env));
    return new Response("Erro: Número do WhatsApp não configurado.", { status: 500 });
  }

  const url = new URL(context.request.url);
  const message = url.searchParams.get("message") ?? "Olá, tudo bem?";
  const whatsappUrl = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
  return Response.redirect(whatsappUrl, 302);
}
