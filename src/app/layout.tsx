import type { Metadata } from "next";
import { UserProvider } from "@/utils/contexts";
import LogInWrapper from "@/app/category/LogInWrapper";
import Header from "@/app/components/Header";
import "./globals.css";

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
      <body className={`antialiased`}>
        <Header />
        <UserProvider>
          <LogInWrapper children={children} />
        </UserProvider>
      </body>
    </html>
  );
}
