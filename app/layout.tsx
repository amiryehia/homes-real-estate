import "./globals.css";

export const metadata = {
  title: "HOMES Real Estate & Commercial",
  description: "Premium commercial office spaces across Egypt",
  other: {
    "google-site-verification": "fFKvZDztv_eNNE4OHyaT-Wd0t4jX6Ki64FMMSL6-tSM",
  },
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