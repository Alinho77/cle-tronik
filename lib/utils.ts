import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Enlever tous les caractères non numériques sauf le +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Si le numéro commence par +33, formater comme +33 X XX XX XX XX
  if (cleaned.startsWith('+33')) {
    const digits = cleaned.slice(3) // Enlever +33
    if (digits.length === 9) {
      return `+33 ${digits[0]} ${digits.slice(1, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`
    }
  }

  // Format par défaut : groupes de 2 chiffres
  return cleaned.replace(/(\d{2})(?=\d)/g, '$1 ')
}

export function formatWhatsApp(phone: string): string {
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}`
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}
