import type { Metadata } from "next";
import "../globals.css";
// import {Open_Sans} from "next/font/google"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// const open_sans = Open_Sans({
//   display: "swap",
//   subsets: ['latin'],
//   variable: "--font-open-sans",
//   weight: "300",
// });

export const metadata: Metadata = {
  title: "GTECH CENTER",
  description: "Gtech center ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100vw]">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
