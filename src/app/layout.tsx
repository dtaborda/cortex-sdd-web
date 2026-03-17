import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "dTaborda \u2014 Romp\u00e9 el chat. Constru\u00ed el sistema.",
  description: "Experiencia educativa interactiva sobre arquitectura moderna de desarrollo con IA y agentes. Beyond the prompt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-base text-text-primary antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
