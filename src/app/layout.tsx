import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'SD Roofing Pros | Expert Roof Replacement & Repair',
  description: 'Professional residential roofing services in San Diego. Get a free inspection from trusted local experts today.',
  openGraph: {
    "title": "SD Roofing Pros - Expert Roof Repair & Replacement",
    "description": "Reliable roofing solutions for San Diego homes. Book your free roof inspection.",
    "siteName": "SD Roofing Pros",
    "type": "website"
  },
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
