import type { Metadata } from "next";
import "../globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fortitudegroup.it"),
  title: "Ciccio Group",
  keywords:
    "Technology, Evolution, Enterprise, Innovation, Business, IT, Services, Digital, Tech, Investments",
  description:
    "We aim to face the market with valuable business enabling solutions, providing cutting-edge technological services that lead to immediate and tangible results.",
  referrer: "no-referrer-when-downgrade",
  openGraph: {
    title: "Ciccio Group",
    description:
      "We aim to face the market with valuable business enabling solutions, providing cutting-edge technological services that lead to immediate and tangible results.",
    url: "https://www.pippo.it",
    type: "website",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortitude Group",
      },
    ],
    siteName: "Fortitude Group",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Fortitudegroupteam",
    title: "ciccio Group",
    description:
      "We aim to face the market with valuable business enabling solutions, providing cutting-edge technological services that lead to immediate and tangible results.",
    images: "/images/meta-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <h1>TEST</h1>
      </header>
      <body>{children}</body>
    </html>
  );
}
