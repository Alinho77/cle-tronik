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
  // Hauteur fixe selon le variant, adaptée à la taille des containers
  const height = variant === "header" ? 300 : variant === "footer" ? 70 : 90;

  const width = variant === "header" ? 500 : variant === "footer" ? 300 : 380;

  return (
    <div
      className={`flex items-start mt-10 ${className}`}
      style={{
        height: `${height}px`,
      }}
    >
      <Image
        src="/cle-tronik.svg"
        alt="Clé-Tronik"
        width={width}
        height={height}
        style={{
          width: "auto",
          height: `${height}px`,
          objectFit: "contain",
        }}
        priority
        className="h-full w-auto"
        unoptimized
      />
    </div>
  );
}
