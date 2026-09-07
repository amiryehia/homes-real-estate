import "./globals.css";

export const metadata = {
  title: "HOMES Real Estate | Commercial Offices in Egypt",
  description:
    "HOMES Real Estate offers premium commercial office spaces across Cairo and Egypt. Find offices for rent in Maadi, New Cairo, Nasr City, Heliopolis and more.",
  other: {
    "google-site-verification":
      "fFKvZDztv_eNNE4OHyaT-Wd0t4jX6Ki64FMMSL6-tSM",
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