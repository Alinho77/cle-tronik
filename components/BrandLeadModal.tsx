"use client";

import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BRAND_ICON_BY_NAME } from "@/lib/brands";

type BrandLeadModalProps = {
  open: boolean;
  brand: string | null;
  onClose: () => void;
  onSuccess?: () => void;
};

const initialFormState = {
  brand: "",
  model: "",
  year: "",
  keyType: "",
  service: "",
  name: "",
  phone: "",
  details: "",
};

const BRAND_OPTIONS = [
  { value: "Lame", label: "Lame" },
  { value: "Télécommande", label: "Télécommande" },
  { value: "Smart key", label: "Smart key" },
] as const;

const SERVICE_OPTIONS = [
  { value: "Copie", label: "Copie" },
  { value: "Perte totale", label: "Perte totale" },
  { value: "Reprogrammation", label: "Reprogrammation" },
  { value: "Dépannage", label: "Dépannage" },
] as const;

export function BrandLeadModal({
  open,
  brand,
  onClose,
  onSuccess,
}: BrandLeadModalProps) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setFormData((prev) => ({
        ...prev,
        brand: brand ?? prev.brand ?? "",
      }));
      setFormMessage(null);
    } else {
      document.body.style.overflow = "";
      setIsSubmitting(false);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, brand]);

  useEffect(() => {
    if (!open) {
      setFormData(initialFormState);
      setFormMessage(null);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: formData.brand,
          model: formData.model,
          year: formData.year,
          keyType: formData.keyType,
          service: formData.service,
          name: formData.name,
          phone: formData.phone,
          details: formData.details,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data?.ok !== true) {
        throw new Error(data?.error || "Impossible d'envoyer la demande.");
      }

      setFormMessage({
        type: "success",
        message: "Demande envoyée avec succès !",
      });
      onSuccess?.();
      setTimeout(() => {
        onClose();
      }, 200);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erreur inattendue.";
      setFormMessage({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const BrandIcon = brand ? BRAND_ICON_BY_NAME[brand] : undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Demande d'intervention"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm mx-auto px-4 max-h-[85vh] overflow-y-auto sm:rounded-lg md:max-w-lg md:rounded-xl bg-white py-6 md:p-6 shadow-2xl my-4 md:my-0"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 transition hover:text-gray-800"
          aria-label="Fermer la modale"
        >
          ✕
        </button>
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold">Demande d'intervention</h2>
          {brand && (
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-neutral-600">
              {BrandIcon ? (
                <BrandIcon
                  size={20}
                  className="text-neutral-500"
                  aria-hidden="true"
                />
              ) : null}
              <span>{brand}</span>
            </div>
          )}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {formMessage && (
            <div
              className={`rounded-md border px-3 py-2 text-sm ${
                formMessage.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {formMessage.message}
            </div>
          )}

          <div>
            <Label htmlFor="brand">Marque</Label>
            <Input id="brand" name="brand" value={formData.brand} readOnly />
          </div>
          <div>
            <Label htmlFor="model">Modèle</Label>
            <Input
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="year">Année</Label>
              <Input
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Ex : 2019"
                required
              />
            </div>
            <div>
              <Label htmlFor="keyType">Type de clé</Label>
              <select
                id="keyType"
                name="keyType"
                value={formData.keyType}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              >
                <option value="">Sélectionner</option>
                {BRAND_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="service">Type de service</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            >
              <option value="">Sélectionner</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="details">Détails supplémentaires</Label>
            <Textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Informations complémentaires"
              rows={4}
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
