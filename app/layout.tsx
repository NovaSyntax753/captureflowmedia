import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKaptureFlow Media",
  description:"Kkapture Flow Media was founded with a simple mission: help businesses grow by using the most powerful content format in the world — VIDEO. Unlike typical agencies that just deliver designs or edits, we focus on what actually matters — getting you clients. Our proprietary strategy, the Video Lead Machine, blends engaging visuals with lead-generation funnels to help you stand out, build trust, and convert.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "KKaptureFlow Media",
    description:"Kkapture Flow Media was founded with a simple mission: help businesses grow by using the most powerful content format in the world — VIDEO. Unlike typical agencies that just deliver designs or edits, we focus on what actually matters — getting you clients. Our proprietary strategy, the Video Lead Machine, blends engaging visuals with lead-generation funnels to help you stand out, build trust, and convert.",
    url: "https://kkaptureflowmedia.com",
    siteName: "KKaptureFlow Media",
    images: [
      {
        url: "/logo1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KKaptureFlow Media",
    description:"Kkapture Flow Media was founded with a simple mission: help businesses grow by using the most powerful content format in the world — VIDEO. Unlike typical agencies that just deliver designs or edits, we focus on what actually matters — getting you clients. Our proprietary strategy, the Video Lead Machine, blends engaging visuals with lead-generation funnels to help you stand out, build trust, and convert.",
    images: ["/logo1.png"],
  },
  metadataBase: new URL("https://kkaptureflowmedia.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          {children}
              {/* Footer */}
          <Footer />
      </body>
    </html>
  );
}
