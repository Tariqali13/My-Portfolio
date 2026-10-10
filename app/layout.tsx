import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tariqali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tariq Ali, senior full-stack software engineer",
    template: "%s | Tariq Ali",
  },
  description:
    "Senior full-stack engineer with 8+ years building ticketing, payments, SaaS and AI products with React, Next.js, TypeScript, Node.js and AWS. Live open-source projects, client work and résumé.",
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
    title: "Tariq Ali, senior full-stack software engineer",
    description:
      "Live projects, client work and résumé: ticketing, payments, SaaS and AI products with React, Next.js, Node.js and AWS.",
    url: siteUrl,
    siteName: "Tariq Ali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tariq Ali, senior full-stack software engineer",
    description:
      "Live projects, client work and résumé: ticketing, payments, SaaS and AI products with React, Next.js, Node.js and AWS.",
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
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Payments",
      "Software Architecture",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint, so dark-mode visitors don't see a light flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
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
