import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { headers } from "next/headers";
import { getLanguageFromSearchParams } from "./lib/i18n";
import {
  generateMetadataForLanguage,
  generateStructuredDataForLanguage,
  getLanguageCode,
  languageMetadata,
} from "./lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// メタデータを動的に生成する関数
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const searchParams = new URLSearchParams(pathname.split("?")[1] || "");
  const lang = getLanguageFromSearchParams(searchParams);

  return generateMetadataForLanguage(lang);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const searchParams = new URLSearchParams(pathname.split("?")[1] || "");
  const lang = getLanguageFromSearchParams(searchParams);

  const structuredData = generateStructuredDataForLanguage(lang);
  const langCode = getLanguageCode(lang);

  return (
    <html lang={langCode} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased overflow-y-hidden`}>
        <link rel="alternate" hrefLang="x-default" href="https://pdf2md.app/" />
        {Object.values(languageMetadata).map((meta) => (
          <link
            key={meta.hrefLang}
            rel="alternate"
            hrefLang={meta.hrefLang}
            href={`https://pdf2md.app${meta.canonicalPath}`}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
