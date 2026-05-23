import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Açaí da Família | CAMARAGIBE",
  description:
    "Açaí cremoso, combos especiais e monte seu açaí em tempo real. Peça online em CAMARAGIBE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}