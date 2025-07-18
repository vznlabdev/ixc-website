import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "incoXchange - Simple Wins",
  description: "The fastest way to manage contractor work orders.",
  keywords: "digital transformation, web development, mobile apps, cloud solutions, consulting, business solutions",
  authors: [{ name: "incoXchange Team" }],
  creator: "incoXchange",
  publisher: "incoXchange",
  openGraph: {
    title: "incoXchange - Simple Wins",
    description: "The fastest, easiest, simplest way to manage contractor work orders.",
    url: "https://incoxchange.com",
    siteName: "incoXchange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "incoXchange - Digital Transformation & Business Solutions",
    description: "Transform your business with incoXchange. We provide innovative digital solutions for modern businesses.",
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
        className={`${instrumentSans.variable} font-sans antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TKS3SBGZD1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TKS3SBGZD1');
          `}
        </Script>

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
