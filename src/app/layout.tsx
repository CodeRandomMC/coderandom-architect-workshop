import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
  description:
    "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects. From chatbots to ESP32 builds, exploring the intersection of code and hardware.",
  keywords: [
    "CodeRandom",
    "maker portfolio",
    "AI experiments",
    "robotics projects",
    "electronics projects",
    "ESP32 projects",
    "AI chatbots",
    "maker tools",
    "hardware projects",
    "prototype development",
    "embedded systems",
    "IoT projects",
    "Arduino projects",
    "maker community",
    "DIY electronics",
    "open source projects",
  ],
  authors: [{ name: "Jack Pollard" }],
  creator: "Jack Pollard",
  publisher: "Jack Pollard",
  category: "Technology",
  classification: "AI Systems Architecture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.coderandom.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "verification-token-will-be-added-later",
  },
  openGraph: {
    title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
    description:
      "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects. From chatbots to ESP32 builds, exploring the intersection of code and hardware.",
    url: "https://www.coderandom.com",
    siteName: "CodeRandom - Maker Portfolio",
    images: [
      {
        url: "/coderandom-hero.png",
        width: 1200,
        height: 630,
        alt: "CodeRandom - Maker Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
    description:
      "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects.",
    images: ["/coderandom-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jack Pollard",
    jobTitle: "Maker & Electronics Enthusiast",
    description:
      "Maker exploring AI, robotics, and electronics. Building tools, prototypes, and experiments that combine code with hardware.",
    url: "https://www.coderandom.com",
    sameAs: ["https://github.com/CodeRandomMC"],
    image: "https://www.coderandom.com/coderandom-hero.png",
    knowsAbout: [
      "AI Experiments",
      "Robotics",
      "Electronics",
      "Arduino",
      "ESP32",
      "IoT Projects",
      "Maker Tools",
      "Open Source",
      "Prototype Development",
      "Embedded Systems",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Maker & Electronics Enthusiast",
      description:
        "Building tools, prototypes, and experiments that combine code with hardware",
      occupationalCategory: "Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Maker",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-Taught Maker",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodeRandom - Maker Portfolio",
    url: "https://www.coderandom.com",
    description:
      "Maker portfolio showcasing AI experiments, robotics prototypes, and electronics projects",
    author: {
      "@type": "Person",
      name: "Jack Pollard",
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <link rel="canonical" href="https://www.coderandom.com" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
