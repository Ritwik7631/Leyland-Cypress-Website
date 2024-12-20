import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import AnalyticsWrapper from "@/components/wrappers/FirebaseAnalyticsWrapper";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leyland Cypress",
  description: "Trusted Registered Investment Advisor - Leyland Cypress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <AnalyticsWrapper>
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </AnalyticsWrapper>
        </Suspense>
      </body>
    </html>
  );
}
