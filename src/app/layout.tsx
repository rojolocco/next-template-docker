import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Template Docker",
  description: "Created by Next.js and Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
