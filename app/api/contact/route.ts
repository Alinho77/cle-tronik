import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

function required(v?: string) {
  return v && v.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { ok: false, error: "Service d'envoi indisponible. Contactez-nous par téléphone." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { brand, model, year, keyType, service, name, phone, details } =
      body || {};

    if (!required(brand) || !required(service) || !required(name) || !required(phone)) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO || "nassaralain7@gmail.com";
    const from =
      process.env.CONTACT_FROM || "Clée-Tronik <onboarding@resend.dev>";
    const subject = `Nouvelle demande ${brand} · ${service}`;

    const html = `
      <div style="font-family:Arial, sans-serif; max-width:600px">
        <h2>Nouvelle demande d'intervention Clé-Tronik</h2>
        <table style="border-collapse:collapse">
          <tr><td><b>Marque</b></td><td>${brand}</td></tr>
          <tr><td><b>Modèle</b></td><td>${model || "-"}</td></tr>
          <tr><td><b>Année</b></td><td>${year || "-"}</td></tr>
          <tr><td><b>Type de clé</b></td><td>${keyType || "-"}</td></tr>
          <tr><td><b>Service</b></td><td>${service}</td></tr>
          <tr><td><b>Nom</b></td><td>${name}</td></tr>
          <tr><td><b>Téléphone</b></td><td>${phone}</td></tr>
          <tr><td><b>Détails</b></td><td>${(details || "-")
            .toString()
            .replace(/\n/g, "<br/>")}</td></tr>
        </table>
        <p style="font-size:12px;color:#555">Envoyé le ${new Date().toLocaleString(
          "fr-FR"
        )}</p>
      </div>
    `;

    const text = `
Marque: ${brand}
Modèle: ${model || "-"}
Année: ${year || "-"}
Type de clé: ${keyType || "-"}
Service: ${service}
Nom: ${name}
Téléphone: ${phone}
Détails: ${details || "-"}
Envoyé le ${new Date().toLocaleString("fr-FR")}
    `;

    const { error } = await resend.emails.send({ to, from, subject, text, html });
    if (error) {
      console.error(error);
      const errorMessage =
        typeof error === "string"
          ? error
          : error?.message || "Erreur d’envoi.";
      return NextResponse.json(
        { ok: false, error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
