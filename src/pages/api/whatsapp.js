let envConfigured = false;

// Se não estiver em produção, carrega as variáveis com dotenv
if (process.env.NODE_ENV !== 'production') {
  // Importa as dependências dinamicamente, pois o Cloudflare pode não suportá-las
  const { default: dotenv } = await import('dotenv');
  const { join } = await import('path');
  dotenv.config({ path: join(process.cwd(), '.env.development') });
  envConfigured = true;
}

export const prerender = false;

export async function GET(context) {
  // Usa o runtime se disponível; caso contrário, process.env (já configurado ou proveniente do Cloudflare)
  const env = (context.locals?.runtime?.env) || process.env;

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
