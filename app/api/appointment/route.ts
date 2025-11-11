import { NextResponse } from 'next/server'
import { sendAppointmentEmail } from '@/lib/email'
import { z } from 'zod'

const appointmentSchema = z.object({
  brand: z.string().min(1, 'La marque est requise'),
  model: z.string().min(1, 'Le modèle est requis'),
  year: z.string().min(4, 'L\'année est requise'),
  keyType: z.string().min(1, 'Le type de clé est requis'),
  address: z.string().min(5, 'L\'adresse est requise'),
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Le téléphone est requis'),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with Zod
    const validatedData = appointmentSchema.parse(body)

    // Send email
    const result = await sendAppointmentEmail(validatedData)

    if (!result.success) {
      console.error('Email error:', result.error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Appointment error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

