import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const plexSans = IBM_Plex_Sans({ variable: "--font-plex-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const title = "Sideris Terra | Parcel-level Agricultural Intelligence";
const description = "Sideris Terra is building a parcel-level crop monitoring platform and seeking early pilot partners.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
  const socialImage = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: socialImage ? [{ url: socialImage, width: 1200, height: 630, alt: "Sideris Terra â€” Understand crop stress. Earlier." }] : undefined },
    twitter: { card: "summary_large_image", title, description, images: socialImage ? [socialImage] : undefined },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plexSans.variable} ${plexMono.variable} ${newsreader.variable} antialiased`}>{children}</body>
    </html>
  );
}
