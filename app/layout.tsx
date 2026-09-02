import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcellus Ifeanyi Ugokwe | Engineer & Technology Professional",
  description:
    "Marcellus Ifeanyi Ugokwe is a multidisciplinary engineer and technology professional with a background in electrical and electronics engineering, energy systems, software, data, AI, blockchain, and quantitative finance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
