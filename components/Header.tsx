"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Logo from "@/components/Logo";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/zones", label: "Zones" },
  { href: "/marques", label: "Marques" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            asChild
            className="hidden md:inline-flex bg-white text-blue-600 hover:bg-blue-50"
          >
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Appeler maintenant
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mx-4 mt-2 bg-white text-blue-600 hover:bg-blue-50"
              >
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler maintenant
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
