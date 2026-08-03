import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Office",
  description: "Commercial Real Estate in Egypt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}