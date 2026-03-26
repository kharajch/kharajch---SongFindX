import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 0.8,
  maximumScale: 0.8,
  userScalable: false,
};

export const metadata = {
  title: "kharajch--SongFindX",
  description: "Find And Download Songs --- Created By Kharaj Chakraborty (@kharajch)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidenav />
        {children}
      </body>
    </html>
  );
}
