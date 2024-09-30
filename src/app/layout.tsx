import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header";
import { UserProvider } from "@/utils/contexts";
import LogInWrapper from "@/Components/LogInWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Food Booth",
  description: "Your everyday savior when inspiration is lacking!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <UserProvider>
          <LogInWrapper children={children} />
        </UserProvider>
      </body>
    </html>
  );
}
