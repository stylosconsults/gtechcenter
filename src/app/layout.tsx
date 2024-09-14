import type { Metadata } from "next";
import "./globals.css";
import {Open_Sans} from "next/font/google"
import Navbar from "@/components/Navbar";


const open_sans = Open_Sans({
  display: "swap",
  subsets: ['latin'],
  variable: "--font-open-sans",
  weight: "300",
});

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
