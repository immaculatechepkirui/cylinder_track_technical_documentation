import type { Metadata } from "next";
import "./globals.css";
import { Teachers } from "next/font/google";


const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-teachers",
});

export const metadata: Metadata = {
  title: "CylinderTrack Technical Documentation",
  description: "Economists Support Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
         <link href="/pics/zeno-logo.png" rel="icon"/>
      </head>
      <body className={`${teachers.variable} font-teachers antialiased`}>
        {children}
      </body>
    </html>
  );
}