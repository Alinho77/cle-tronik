import nodemailer from 'nodemailer'

export type EmailData = {
  brand: string
  model: string
  year: string
  keyType: string
  address: string
  name: string
  email: string
  phone: string
  message?: string
}

export async function sendAppointmentEmail(data: EmailData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_TO || 'contact@cle-tronik.fr',
    replyTo: data.email,
    subject: `Nouvelle demande de rendez-vous - ${data.brand} ${data.model}`,
    html: `
      <h2>Nouvelle demande de rendez-vous</h2>
      <p><strong>Marque:</strong> ${data.brand}</p>
      <p><strong>Modèle:</strong> ${data.model}</p>
      <p><strong>Année:</strong> ${data.year}</p>
      <p><strong>Type de clé:</strong> ${data.keyType}</p>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Téléphone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Adresse d'intervention:</strong> ${data.address}</p>
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      <hr>
      <p><em>Message envoyé depuis le formulaire de contact de Clé-Tronik</em></p>
    `,
    text: `
Nouvelle demande de rendez-vous

Marque: ${data.brand}
Modèle: ${data.model}
Année: ${data.year}
Type de clé: ${data.keyType}

Nom: ${data.name}
Téléphone: ${data.phone}
Email: ${data.email}
Adresse d'intervention: ${data.address}
${data.message ? `Message: ${data.message}` : ''}

--
Message envoyé depuis le formulaire de contact de Clé-Tronik
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error }
  }
}

