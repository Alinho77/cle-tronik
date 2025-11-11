"use client";

import { useState } from "react";
import BrandGrid from "@/components/BrandGrid";
import { BrandLeadModal } from "@/components/BrandLeadModal";
import { BRAND_BY_SLUG } from "@/lib/brands";

export function BrandGridSection() {
  const [open, setOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handleBrandSelect = (slug: string) => {
    const info = BRAND_BY_SLUG[slug];
    if (!info) return;
    setSelectedSlug(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSlug(null);
  };

  const selectedBrandName = selectedSlug
    ? BRAND_BY_SLUG[selectedSlug]?.name ?? null
    : null;

  return (
    <>
      <BrandGrid onBrandSelect={handleBrandSelect} />
      <BrandLeadModal
        open={open}
        brand={selectedBrandName}
        onClose={handleClose}
      />
    </>
  );
}
