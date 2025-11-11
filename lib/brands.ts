import { siteConfig } from "@/config/site";
import type { IconType } from "react-icons";
import {
  SiAudi,
  SiBmw,
  SiCitroen,
  SiFord,
  SiHyundai,
  SiKia,
  SiMercedes,
  SiMini,
  SiNissan,
  SiPeugeot,
  SiRenault,
  SiSkoda,
  SiToyota,
  SiVolkswagen,
} from "react-icons/si";

const ICON_COMPONENTS: Record<string, IconType> = {
  Renault: SiRenault,
  Peugeot: SiPeugeot,
  Citroën: SiCitroen,
  Toyota: SiToyota,
  VW: SiVolkswagen,
  Audi: SiAudi,
  Skoda: SiSkoda,
  BMW: SiBmw,
  Mini: SiMini,
  Mercedes: SiMercedes,
  Ford: SiFord,
  Nissan: SiNissan,
  Hyundai: SiHyundai,
  Kia: SiKia,
};

const slugOverrides: Record<string, string> = {
  VW: "vw",
};

const slugify = (name: string) => {
  const normalized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return slugOverrides[name] ?? normalized;
};

export type BrandInfo = {
  slug: string;
  name: string;
  Icon?: IconType;
  fallback?: string;
};

export const BRANDS: BrandInfo[] = siteConfig.brands.map((brand) => {
  const Icon = ICON_COMPONENTS[brand.name];

  return {
    slug: slugify(brand.name),
    name: brand.name,
    Icon,
    fallback: Icon ? undefined : brand.logo,
  };
});

export const BRAND_ICON_BY_NAME: Record<string, IconType | undefined> =
  BRANDS.reduce((acc, brand) => {
    acc[brand.name] = brand.Icon;
    return acc;
  }, {} as Record<string, IconType | undefined>);

export const BRAND_BY_SLUG: Record<string, BrandInfo> = BRANDS.reduce(
  (acc, brand) => {
    acc[brand.slug] = brand;
    return acc;
  },
  {} as Record<string, BrandInfo>
);

export const BRAND_SLUG_BY_NAME: Record<string, string> = BRANDS.reduce(
  (acc, brand) => {
    acc[brand.name] = brand.slug;
    return acc;
  },
  {} as Record<string, string>
);
