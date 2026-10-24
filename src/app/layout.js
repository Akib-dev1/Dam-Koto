import { Hind_Siliguri, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageContext";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  metadataBase: new URL("https://dam-koto-lilac.vercel.app/"),
  title: {
    default: "DamKoto — Bangladesh Daily Market Prices",
    template: "%s | DamKoto",
  },
  description:
    "Check today's market prices in Bangladesh. Compare daily prices of rice, vegetables, fish, meat, oil and other essentials with historical price data.",
  applicationName: "DamKoto",
  keywords: [
    "Bangladesh market price",
    "today bazar price",
    "daily market price Bangladesh",
    "আজকের বাজার দর",
    "নিত্যপণ্যের দাম",
    "DamKoto",
  ],
  openGraph: {
    type: "website",
    siteName: "DamKoto",
    locale: "en_BD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-ibm flex flex-col">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
