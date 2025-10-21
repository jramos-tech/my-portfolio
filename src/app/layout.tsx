import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Ramos | Software Engineer Portfolio",
  description: "Full-stack developer skilled in Python, JavaScript, React, and cloud technologies.",
  openGraph: {
    title: "Jean Ramos | Software Engineer Portfolio",
    description: "Explore Jean Ramos's projects, experience, and contact information.",
    url: "https://jeanramos.dev",
    siteName: "Jean Ramos Portfolio",
    locale: "en_US",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
