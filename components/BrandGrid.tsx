"use client";

import { BRANDS } from "@/lib/brands";

type AnalyticsWindow = Window & {
  gtag?: (...args: any[]) => void;
  plausible?: (event: string, options?: any) => void;
};

type BrandGridProps = {
  onBrandSelect?: (slug: string) => void;
};

function trackBrandClick(slug: string, index: number) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", "brand_click", {
      brand: slug,
      position: index,
    });
  } else if (typeof analyticsWindow.plausible === "function") {
    analyticsWindow.plausible("brand_click", {
      props: { brand: slug, position: index },
    });
  }
}

export default function BrandGrid({ onBrandSelect }: BrandGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-center">
          Marques prises en charge
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-500">
          Télécommandes, cartes mains libres, diagnostics. Compatibilité selon
          millésime.
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {BRANDS.map((brand, index) => (
            <li key={brand.slug}>
              <button
                type="button"
                aria-label={`Clés et programmation ${brand.name}`}
                className="group block w-full h-full rounded-xl border border-neutral-200 bg-white p-4 text-neutral-700 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                onClick={() => {
                  trackBrandClick(brand.slug, index);
                  if (onBrandSelect) {
                    onBrandSelect(brand.slug);
                  } else {
                    window.location.href = `/marques?brand=${brand.slug}`;
                  }
                }}
              >
                <div className="flex h-8 items-center justify-center transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105">
                  {brand.Icon ? (
                    <brand.Icon
                      size={32}
                      className="text-neutral-600 transition-colors duration-200 group-hover:text-neutral-900 group-focus-visible:text-neutral-900"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="text-2xl transition-colors duration-200 group-hover:text-neutral-900 group-focus-visible:text-neutral-900"
                      aria-hidden="true"
                    >
                      {brand.fallback ?? ""}
                    </span>
                  )}
                </div>
                <div className="mt-2 text-center text-sm font-medium transition group-hover:text-neutral-900 group-focus-visible:text-neutral-900">
                  {brand.name}
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
          <a href="/marques" className="underline">
            Voir toutes les marques
          </a>
          <a href="/contact" className="underline">
            Modèle non listé ?
          </a>
        </div>

        <p className="mt-2 text-center text-xs text-neutral-400">
          Logos utilisés à titre indicatif. Marques déposées appartenant à leurs
          propriétaires.
        </p>
      </div>
    </section>
  );
}
