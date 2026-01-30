import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallButton from "@/components/CallButton";

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P.A. Home Care Services | Professional Home Care in Sheffield",

  description:
    "P.A. Home Care Services provide professional, person-centred home care in Sheffield. Personal care, companionship, medication support and free consultations.",

  keywords: [
    "home care Sheffield",
    "domiciliary care Sheffield",
    "elderly care Sheffield",
    "home carers Sheffield",
    "personal care at home",
    "companionship care",
    "medication support",
    "physiotherapy support",
    "care services Sheffield",
    "independent home care",
    "local care provider Sheffield",
  ],

  authors: [{ name: "P.A. Home Care Services" }],
  creator: "P.A. Home Care Services",
  publisher: "P.A. Home Care Services",

  metadataBase: new URL("https://www.pahomecareservices.co.uk"),

  alternates: {
    canonical: "https://www.pahomecareservices.co.uk",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.pahomecareservices.co.uk",
    title: "P.A. Home Care Services | Professional Home Care in Sheffield",
    description:
      "Professional, person-centred home care in Sheffield. Supporting independence, dignity and wellbeing at home.",
    siteName: "P.A. Home Care Services",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "P.A. Home Care Services – professional home care in Sheffield",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "P.A. Home Care Services | Home Care in Sheffield",
    description:
      "Professional, person-centred home care services in Sheffield. Free consultation available.",
    images: ["/img/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Healthcare",

  other: {
    "geo.region": "GB-SHF",
    "geo.placename": "Sheffield",
    "geo.position": "53.3811;-1.4701",
    ICBM: "53.3811, -1.4701",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-100 bg-white text-(--purple) px-4 py-2 rounded-md shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
