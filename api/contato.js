import nodemailer from "nodemailer";

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatWhatsApp(raw = "") {
  return String(raw).replace(/\D/g, "");
}

function getBrazilDateTime() {
  // Ajuste simples (UTC-3). Serve bem pra e-mail.
  const now = new Date();
  const brazil = new Date(now.getTime() - 3 * 60 * 60 * 1000);

  const data_envio = brazil.toLocaleDateString("pt-BR");
  const hora_envio = brazil.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { data_envio, hora_envio };
}

export default async function handler(req, res) {
  // CORS (pra teu Vue conseguir chamar)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Use POST" });
  }

  try {
    const {
      nome,
      email,
      whatsapp,
      telefone,
      area_desejada,
      descricao,
    } = req.body || {};

    // validações mínimas
    if (!nome || !whatsapp || !descricao) {
      return res.status(400).json({
        ok: false,
        message: "Campos obrigatórios: nome, whatsapp, descricao",
      });
    }

    const { data_envio, hora_envio } = getBrazilDateTime();

    const safe = {
      nome: escapeHtml(nome),
      email: escapeHtml(email || "Não informado"),
      whatsapp: formatWhatsApp(whatsapp),
      telefone: escapeHtml(telefone || whatsapp || "Não informado"),
      area_desejada: escapeHtml(area_desejada || "Não informado"),
      descricao: escapeHtml(descricao),
      data_envio,
      hora_envio,
    };

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Orçamento - Hanna Móveis Planejados</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #E3350D 0%, #c12c0b 100%); padding: 30px 40px; text-align: center;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; font-family: 'Playfair Display', serif;">
                                            ✨ NOVA SOLICITAÇÃO DE ORÇAMENTO
                                        </h1>
                                        <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                                            Sua felicidade nos motiva! Um cliente deseja transformar seu lar.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Alert Badge -->
                    <tr>
                        <td style="padding: 20px 40px 0 40px;">
                            <div style="background: linear-gradient(135deg, #ffeaea 0%, #ffd6d6 100%); border-left: 4px solid #E3350D; padding: 12px 20px; border-radius: 8px; display: inline-block; width: calc(100% - 44px);">
                                <p style="margin: 0; color: #c12c0b; font-size: 13px; font-weight: 600;">
                                    ⚡ Atenção necessária • Prioridade: ALTA • Responda em até 24h
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #292929; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; font-family: 'Playfair Display', serif;">
                                👤 Dados do Cliente
                            </h2>

                            <!-- Cliente Info -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 15px; background-color: #f9f9f9; border-radius: 8px; margin-bottom: 10px; border: 1px solid #f0f0f0;">
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #666; font-size: 14px; font-weight: 600; vertical-align: top;">
                                                    👤 Nome:
                                                </td>
                                                <td style="color: #292929; font-size: 14px; font-weight: 500;">
                                                    ${safe.nome}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #666; font-size: 14px; font-weight: 600; vertical-align: top; padding-top: 12px;">
                                                    📱 WhatsApp:
                                                </td>
                                                <td style="color: #292929; font-size: 14px; font-weight: 500; padding-top: 12px;">
                                                    <a href="https://wa.me/55${safe.whatsapp}" style="color: #25D366; text-decoration: none; font-weight: 600;">
                                                        ${safe.whatsapp}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #666; font-size: 14px; font-weight: 600; vertical-align: top; padding-top: 12px;">
                                                    📧 E-mail:
                                                </td>
                                                <td style="color: #292929; font-size: 14px; font-weight: 500; padding-top: 12px;">
                                                    <a href="mailto:${safe.email}" style="color: #E3350D; text-decoration: none; font-weight: 500;">
                                                        ${safe.email}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Projeto Info -->
                            <h2 style="margin: 25px 0 20px 0; color: #292929; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; font-family: 'Playfair Display', serif;">
                                🏡 Detalhes do Projeto
                            </h2>

                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 15px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #f0f0f0;">
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #666; font-size: 14px; font-weight: 600; vertical-align: top;">
                                                    🚪 Área Desejada:
                                                </td>
                                                <td style="color: #292929; font-size: 14px; font-weight: 500;">
                                                    ${safe.area_desejada}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #666; font-size: 14px; font-weight: 600; vertical-align: top; padding-top: 12px;">
                                                    📅 Data/Hora:
                                                </td>
                                                <td style="color: #292929; font-size: 14px; font-weight: 500; padding-top: 12px;">
                                                    ${safe.data_envio} às ${safe.hora_envio}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="padding-top: 15px;">
                                                    <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px;">
                                                        <p style="margin: 0 0 8px 0; color: #666; font-size: 13px; font-weight: 600;">
                                                            ✍️ Descrição do Projeto:
                                                        </p>
                                                        <p style="margin: 0; color: #292929; font-size: 14px; line-height: 1.6;">
                                                            ${safe.descricao}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Info Ecológica -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 25px;">
                                <tr>
                                    <td style="padding: 12px 15px; background: linear-gradient(135deg, #f0f9f0 0%, #e6f6e6 100%); border-left: 4px solid #4CAF50; border-radius: 6px;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="30" style="vertical-align: top;">
                                                    <span style="color: #4CAF50; font-size: 18px;">🌿</span>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; color: #2e7d32; font-size: 12px; font-weight: 600;">
                                                        PRODUÇÃO ECOLÓGICA • DURAN GROUP QUALITY
                                                    </p>
                                                    <p style="margin: 4px 0 0 0; color: #4CAF50; font-size: 11px;">
                                                        Cliente interessado em móveis sustentáveis com qualidade Duran Group
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center" style="padding: 20px; background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%); border-radius: 8px;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" style="padding-bottom: 15px;">
                                                    <a href="https://wa.me/55${safe.whatsapp}" style="display: inline-block; background: linear-gradient(135deg, #E3350D 0%, #c12c0b 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 10px rgba(227, 53, 13, 0.3);">
                                                        💬 Responder no WhatsApp
                                                    </a>
                                                    <p style="margin: 12px 0 0 0; color: #666; font-size: 12px;">
                                                        Clique para iniciar conversa imediatamente
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-top: 15px; border-top: 1px dashed #ddd;">
                                                    <a href="mailto:${safe.email}?subject=Orçamento Hanna Móveis - ${encodeURIComponent(
      safe.nome
    )}&body=Olá ${encodeURIComponent(
      safe.nome
    )}, agradecemos seu interesse nos nossos móveis planejados!" style="display: inline-block; background: linear-gradient(135deg, #333333 0%, #292929 100%); color: #ffffff; text-decoration: none; padding: 10px 25px; border-radius: 6px; font-weight: 500; font-size: 13px; margin: 0 5px;">
                                                        📧 Responder por E-mail
                                                    </a>
                                                    <a href="tel:${safe.telefone}" style="display: inline-block; background: linear-gradient(135deg, #333333 0%, #292929 100%); color: #ffffff; text-decoration: none; padding: 10px 25px; border-radius: 6px; font-weight: 500; font-size: 13px; margin: 0 5px;">
                                                        📞 Ligar Agora
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #121212; padding: 25px 40px; text-align: center;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 15px;">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 600; font-family: 'Playfair Display', serif;">
                                            Hanna Móveis Planejados
                                        </p>
                                        <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 12px;">
                                            Av. Cel. Procópio Gomes, 254 - Bucarein, Joinville - SC, 89202-300
                                        </p>
                                        <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.6); font-size: 12px;">
                                            📞 (47) 99189-9212 • 📧 contato@hannamoveisplanejados.com.br
                                        </p>
                                        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                                            <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 11px;">
                                                © 2026 Hanna Móveis Planejados • Uma marca Duran Group • Excelência em móveis planejados
                                            </p>
                                            <p style="margin: 4px 0 0 0; color: rgba(255, 255, 255, 0.4); font-size: 10px; letter-spacing: 0.5px;">
                                                PRODUÇÃO ECOLÓGICA • QUALIDADE DURAN GROUP
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const transporter = nodemailer.createTransport({
      host: "mail.duranmoveis.com.br",
      port: 465,
      secure: true,
      auth: {
        user: 'contato@duranmoveis.com.br', 
        pass: process.env.SMTP_PASS, 
      },
    });

    // assunto bem claro
    const subject = `🔥 Novo orçamento - ${safe.nome} (${safe.whatsapp})`;

    const info = await transporter.sendMail({
      from: `"LP Hann Moveis" <contato@duranmoveis.com.br>`,
      to: 'contato@hannamoveisplanejados.com.br',
      replyTo: email ? safe.email : undefined,
      subject,
      html,
    });

    return res.status(200).json({
      ok: true,
      message: "Email enviado com sucesso!",
      messageId: info.messageId,
    });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({
      ok: false,
      message: "Erro ao enviar email",
      error: String(err?.message || err),
    });
  }
}
