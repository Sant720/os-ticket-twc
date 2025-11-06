import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
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
    default: "OS Ticket Docs",
    template: "%s | OS Ticket Docs",
  },
  description: "Documentation for the OS Ticket TWC project.",
};

const banner = (
  <Banner storageKey="os-ticket-twc-banner">Nextra 4.0 is released 🎉</Banner>
);

const navbar = (
  <Navbar
    logo={<b>Nextra</b>}
    // Add additional navbar props here if needed.
  />
);

const footer = (
  <Footer>MIT {new Date().getFullYear()} © OS Ticket TWC Docs.</Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>{/* Add additional <meta> or <link> tags here if needed. */}</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Sant720/os-ticket-twc"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
