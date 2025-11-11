import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "default";
}

export default function Logo({
  className = "",
  variant = "default",
}: LogoProps) {
  // Hauteur fixe selon le variant, largeur automatique
  const height = variant === "header" ? 500 : variant === "footer" ? 400 : 450;
  const width = variant === "header" ? 1800 : 1600;

  return (
    <div
      className={`flex items-center ${className}`}
      style={{
        height: `${height}px`,
      }}
    >
      <Image
        src="/cle-tronik.svg"
        alt="Clé-Tronik"
        width={width} // Largeur approximative pour le ratio
        height={height}
        style={{
          width: "auto",
          height: `${height}px`,
          objectFit: "contain",
          marginLeft: "-3rem",
        }}
        priority
        className="h-full w-auto"
      />
    </div>
  );
}
