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
  title: "Jack Pollard | AI Systems Architect & Ethical AI Developer",
  description:
    "Expert AI-augmented systems architect specializing in ethical AI development, AI for kids, rapid AI prototyping, and safe AI systems. Portfolio showcasing KidsAI mission project and high-velocity development capabilities.",
  keywords: [
    "ethical AI",
    "AI for kids",
    "AI prototyping",
    "systems architect",
    "AI safety",
    "responsible AI development",
    "AI augmented development",
    "high velocity development",
    "AI co-pilot",
    "Claude API integration",
    "machine learning",
    "AI ethics",
    "child-safe AI",
    "AI systems design",
    "rapid prototyping",
    "full-stack AI",
    "AI portfolio",
    "KidsAI",
    "VelocityAI",
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
    title: "Jack Pollard | AI Systems Architect & Ethical AI Developer",
    description:
      "Expert AI-augmented systems architect specializing in ethical AI development, AI for kids, rapid AI prototyping, and safe AI systems. Portfolio showcasing KidsAI mission project and high-velocity development capabilities.",
    url: "https://www.coderandom.com",
    siteName: "Jack Pollard - Architect's Workshop",
    images: [
      {
        url: "/kids-ai/welcome_screen.png",
        width: 1200,
        height: 630,
        alt: "Jack Pollard - AI Systems Architect Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Pollard | AI Systems Architect & Ethical AI Developer",
    description:
      "Expert AI-augmented systems architect specializing in ethical AI development, AI for kids, rapid AI prototyping, and safe AI systems.",
    images: ["/kids-ai/welcome_screen.png"],
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
    jobTitle: "AI Systems Architect",
    description:
      "AI-Augmented, High-Velocity Systems Architect specializing in ethical AI development, AI for kids, and rapid AI prototyping",
    url: "https://www.coderandom.com",
    sameAs: ["https://github.com/CodeRandomMC"],
    image: "https://www.coderandom.com/kids-ai/welcome_screen.png",
    knowsAbout: [
      "Ethical AI",
      "AI for Kids",
      "AI Prototyping",
      "Systems Architecture",
      "AI Safety",
      "Machine Learning",
      "Full-Stack Development",
      "Claude API Integration",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Systems Architect",
      description:
        "Designing and building robust, safe, and scalable AI systems",
      occupationalCategory: "Software Development",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance AI Systems Architect",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-Taught AI Specialist",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jack Pollard - AI Systems Architect Portfolio",
    url: "https://www.coderandom.com",
    description:
      "Portfolio showcasing ethical AI development, AI for kids projects, and high-velocity AI prototyping",
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
