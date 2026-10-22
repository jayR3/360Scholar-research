import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Manrope } from "next/font/google";
import { siteContent } from "../site-content";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

const themeStyles = Object.fromEntries(
  Object.entries(siteContent.theme).map(([name, value]) => [`--${name}`, value])
) as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL("https://research.360scholar.org"),
  title: {
    default: siteContent.seo.title,
    template: "%s | 360 Scholar"
  },
  description: siteContent.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "360 Scholar Research & Learning",
    type: "website",
    title: siteContent.seo.title,
    description: siteContent.seo.description
  },
  icons: { icon: "/360scholar-mark.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`} style={themeStyles}>
      <body>
        {children}
        <Script
          src="https://code.tidio.co/4ozfuwqfjbg2cmxanpqtyx1rrtezxche.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
