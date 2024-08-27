import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://GalataWaqwaya.com"),
  alternates: {
    canonical: "https://GalataWaqwaya.com",
  },
  title: "Galata Waqwaya",
  description:
    "Galata Waqwaya is a Software Engineer, and Web Developer.",
  keywords:
    "Galata Waqwaya, Software Engineer, Software Developer, Web Development, Machine learning, AI, Cloud",
  openGraph: {
    locale: "en_US",
    siteName: "Galata Waqwaya",
    type: "website",
    title: "Galata Waqwaya",
    description:
      "Galata Waqwaya is a Software Engineer, and Web Developer.",
    url: "https://GalataWaqwaya.com",
    images: [
      {
        url: "./og-large-meik.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galata Waqwaya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
