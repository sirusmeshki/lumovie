import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Loading from "./loading";
import "./globals.css";

export const metadata = {
  title: "LuMovie",
  description: "Generated by create next app",
  themeColor: "#000",
};

import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
const PJS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={PJS.className}>
      <body className="relative bg-background">
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
