import type { Metadata } from "next";
import { NextSeo } from "next-seo";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kalpkant Games Store",
    template: "%s - Kalpkant games",
  },
  description: "Your Gateway to infinite adventures",
  other: {
    "google-adsense-account": "ca-pub-1674197696050997",
    "google-site-verification": "8eSvh0en8XRrVhaOShyVibev8sB4zX7D4hdqlFBx2qw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P2FL06P3XR"
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P2FL06P3XR');`}
        </script>
        <NextSeo
          title="Kalpkant Games Store - Download & Buy Games"
          description="Explore and download the best indie games at Kalpkant Games Store."
          canonical="https://kalpkantgames.tech/"
          openGraph={{
            url: "https://kalpkantgames.tech/",
            title: "Kalpkant Games Store",
            description: "Explore the best indie games.",
            images: [
              { url: "https://kalpkantgames.tech/og-image.jpg" },
            ],
            siteName: "Kalpkant Games",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
