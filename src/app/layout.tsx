import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IncoXchange - Digital Transformation & Business Solutions",
  description: "Transform your business with IncoXchange. We provide innovative digital solutions including web development, mobile apps, cloud solutions, and consulting services.",
  keywords: "digital transformation, web development, mobile apps, cloud solutions, consulting, business solutions",
  authors: [{ name: "IncoXchange Team" }],
  creator: "IncoXchange",
  publisher: "IncoXchange",
  openGraph: {
    title: "IncoXchange - Digital Transformation & Business Solutions",
    description: "Transform your business with IncoXchange. We provide innovative digital solutions for modern businesses.",
    url: "https://incoxchange.com",
    siteName: "IncoXchange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IncoXchange - Digital Transformation & Business Solutions",
    description: "Transform your business with IncoXchange. We provide innovative digital solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
