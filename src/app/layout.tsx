import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alkawthar-group.com'),
  title: {
    template: '%s | الكوثر كروب للمقاولات العامة',
    default: 'الكوثر كروب | حلول هندسية متكاملة في العراق',
  },
  description: 'شركة الكوثر كروب للمقاولات العامة في العراق. متخصصون في التصميم، التنفيذ، الإشراف الهندسي، الأنظمة الميكانيكية (HVAC, Fire Fighting)، والأعمال المدنية للمشاريع التجارية والصناعية والمرافق الطبية.',
  keywords: ['مقاولات عامة', 'شركة هندسية في العراق', 'أنظمة تكييف', 'HVAC', 'إطفاء حريق', 'أعمال مدنية', 'تصميم هندسي', 'إشراف موقعي', 'الكوثر كروب', 'مشاريع تجارية'],
  openGraph: {
    title: 'الكوثر كروب | حلول هندسية متكاملة في العراق',
    description: 'شركة الكوثر كروب للمقاولات العامة في العراق. متخصصون في التصميم، التنفيذ، والإشراف الهندسي.',
    url: 'https://www.alkawthar-group.com',
    siteName: 'الكوثر كروب للمقاولات العامة',
    locale: 'ar_IQ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الكوثر كروب | حلول هندسية متكاملة في العراق',
    description: 'شركة الكوثر كروب للمقاولات العامة في العراق. متخصصون في التصميم، التنفيذ، والإشراف الهندسي.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
