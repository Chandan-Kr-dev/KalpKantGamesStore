// import type { Metadata } from "next";
import Head from "next/head";

import Script from "next/script";
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

// export const metadata: Metadata = {
//   title: {
//     default: "Kalpkant Games Store",
//     template: "%s - Kalpkant games",
//   },
//   description: "Your Gateway to infinite adventures",
//   other: {
//     "google-adsense-account": "ca-pub-1674197696050997",
//     "google-site-verification": "8eSvh0en8XRrVhaOShyVibev8sB4zX7D4hdqlFBx2qw",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Kalpkant Games Store - Download & Buy Games</title>
        <meta name="description" content="Explore and download the best indie games at Kalpkant Games Store." />
        <meta name="og:title" content="Kalpkant Games Store - Download & Buy Games" />
        <meta name="og:description" content="Explore the best indie games." />
        <meta name="og:image" content="https://kalpkantgames.tech/og-image.jpg" />
        <meta name="og:url" content="https://kalpkantgames.tech/" />
        <meta name="google-site-verification" content="8eSvh0en8XRrVhaOShyVibev8sB4zX7D4hdqlFBx2qw" />
        <meta name="google-adsense-account" content="ca-pub-1674197696050997"></meta>
      </Head>

      

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P2FL06P3XR"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P2FL06P3XR');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
