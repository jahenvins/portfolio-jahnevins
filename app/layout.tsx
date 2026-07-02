import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Inbox (165) - Jahnevi N S",
  description: "Portfolio of Jahnevi N S, styled as Gmail.",
  icons: {
    icon: [
      {
        url: "/logo/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo/logo.png",
        sizes: "48x48",
        type: "image/png"
      },
    ],
  },
};

    
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}