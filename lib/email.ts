import { Resend } from "resend";

export type EmailData = {
  brand: string;
  model: string;
  year: string;
  keyType: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export async function sendAppointmentEmail(data: EmailData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { success: false, error: "Resend API key not configured" };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO || "nassaralain7@gmail.com";
  const from =
    process.env.CONTACT_FROM || "Clée-Tronik <onboarding@resend.dev>";

  const html = `
      <div style="font-family:Arial, sans-serif; max-width:600px">
        <h2>Nouvelle demande de rendez-vous</h2>
        <table style="border-collapse:collapse; width:100%">
          <tr><td style="padding:4px 0"><b>Marque</b></td><td>${
            data.brand
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Modèle</b></td><td>${
            data.model
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Année</b></td><td>${
            data.year
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Type de clé</b></td><td>${
            data.keyType
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Adresse</b></td><td>${
            data.address
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Nom</b></td><td>${
            data.name
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Téléphone</b></td><td>${
            data.phone
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Email</b></td><td>${
            data.email
          }</td></tr>
          <tr><td style="padding:4px 0"><b>Message</b></td><td>${
            data.message || "-"
          }</td></tr>
        </table>
        <p style="font-size:12px;color:#555;margin-top:16px">
          Envoyé depuis le formulaire de rendez-vous Clé-Tronik le ${new Date().toLocaleString(
            "fr-FR"
          )}
        </p>
      </div>
    `;

  const text = `
Nouvelle demande de rendez-vous

Marque: ${data.brand}
Modèle: ${data.model}
Année: ${data.year}
Type de clé: ${data.keyType}
Adresse: ${data.address}
Nom: ${data.name}
Téléphone: ${data.phone}
Email: ${data.email}
Message: ${data.message || "-"}

Envoyé le ${new Date().toLocaleString("fr-FR")}
  `;

  try {
    const { error } = await resend.emails.send({
      to,
      from,
      subject: `Nouvelle demande de rendez-vous - ${data.brand} ${data.model}`,
      html,
      text,
      replyTo: data.email,
    });

    if (error) {
      return {
        success: false,
        error:
          typeof error === "string" ? error : error.message ?? "Resend error",
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Email sending error:", error);
    return { success: false, error: error?.message || "Unknown error" };
  }
}
