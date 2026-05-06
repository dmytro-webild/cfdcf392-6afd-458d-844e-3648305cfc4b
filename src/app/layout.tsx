import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Ταξί Καρρράς Μιχάλης - VIP Μεταφορές στο Άστρος',
  description: 'Πολυτελείς μεταφορές 24/7 με Mercedes-Benz στο Άστρος Κυνουρίας. Ασφαλής, άνετη και επαγγελματική εξυπηρέτηση στις τιμές ενός ταξί.',
  openGraph: {
    "title": "Ταξί Καρρράς Μιχάλης - VIP Μεταφορές",
    "description": "VIP μεταφορές στο Άστρος με 2 πολυτελείς Mercedes.",
    "siteName": "Ταξί Καρρράς Μιχάλης"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
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
        <body className={`${manrope.variable} antialiased`}>
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
