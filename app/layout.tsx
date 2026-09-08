import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tariqali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tariq Ali - Full-Stack Software Engineer",
    template: "%s | Tariq Ali",
  },
  description:
    "Full-Stack Software Engineer with 8+ years of experience building SaaS, ticketing, e-commerce, fintech, healthcare and AI-enabled web products with React, Next.js, TypeScript, Node.js and AWS.",
  keywords: [
    "Tariq Ali",
    "Full-Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "AWS",
    "Pakistan",
    "Remote Software Engineer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: "Tariq Ali - Full-Stack Software Engineer",
    description:
      "React, Next.js, TypeScript, Node.js, AWS and scalable product engineering.",
    url: siteUrl,
    siteName: "Tariq Ali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tariq Ali - Full-Stack Software Engineer",
    description:
      "React, Next.js, TypeScript, Node.js, AWS and scalable product engineering.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "MongoDB",
      "GraphQL",
      "Software Architecture",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skipLink" href="#main">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
