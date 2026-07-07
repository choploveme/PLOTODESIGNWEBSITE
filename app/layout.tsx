import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PLOTO | AI Fashion Creative Studio",
    template: "%s | PLOTO"
  },
  description: site.description,
  openGraph: {
    title: "PLOTO | AI Fashion Creative Studio",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/assets/hero-studio.png",
        width: 1600,
        height: 1000,
        alt: "PLOTO AI fashion creative studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PLOTO | AI Fashion Creative Studio",
    description: site.description,
    images: ["/assets/hero-studio.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
