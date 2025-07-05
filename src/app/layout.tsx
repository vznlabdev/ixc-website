import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "incoXchange - Digital Transformation & Business Solutions",
  description: "Transform your business with incoXchange. We provide innovative digital solutions including web development, mobile apps, cloud solutions, and consulting services.",
  keywords: "digital transformation, web development, mobile apps, cloud solutions, consulting, business solutions",
  authors: [{ name: "incoXchange Team" }],
  creator: "incoXchange",
  publisher: "incoXchange",
  openGraph: {
    title: "incoXchange - Digital Transformation & Business Solutions",
    description: "Transform your business with incoXchange. We provide innovative digital solutions for modern businesses.",
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
