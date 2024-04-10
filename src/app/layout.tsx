import type { Metadata } from "next";

import "./globals.css";

import "@fontsource/geist-sans/100.css";
import "@fontsource/geist-sans/200.css";
import "@fontsource/geist-sans/300.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-sans/800.css";
import "@fontsource/geist-sans/900.css";

export const metadata: Metadata = {
  title: "Creación de Páginas Web - GZ",
  description:
    "Eleva tu negocio con nuestros servicios de diseño y desarrollo web. Soluciones eficaces y personalizadas para tu presencia en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-full-fixed">
          <div className="grid-pattern-overlay"></div>
          <div className="radial-effect"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
