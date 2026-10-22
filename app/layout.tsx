
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL("https://firstbank-sme-growth.netlify.app"),
  title: {
    default: "SME Growth Loan | FirstBank",
    template: "%s | FirstBank",
  },
  description:
    "Explore financing options to help your small or medium-sized business grow. Learn about SME loan enquiries, eligibility and the next steps.",
  applicationName: "FirstBank SME Growth Loan",
  keywords: [
    "FirstBank SME loan",
    "SME Growth Loan Nigeria",
    "small business financing Nigeria",
    "business growth financing",
    "SME finance",
  ],
  alternates: {
    canonical: "/sme-growth-loan",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "FirstBank",
    title: "SME Growth Loan | FirstBank",
    description:
      "Take the next step towards growing your business with SME financing.",
    url: "/sme-growth-loan",
    images: [
      {
        url: "/firstbank-sme-hero.webp",
        width: 1200,
        height: 630,
        alt: "Small business owner working in a retail business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SME Growth Loan | FirstBank",
    description:
      "Explore business financing options for your next stage of growth.",
    images: ["/firstbank-sme-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5b2a82",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}
