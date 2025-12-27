// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/footer";
import MenuBar from "../components/menu-bar/menu-bar";
import { admin } from "@lib/firebase-admin";
import cookies from "js-cookie";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const authToken = cookies.get("authToken");
  if (authToken) {
    try {
      const user = await admin.auth().verifyIdToken(authToken);
      const userRecord = await admin.auth().getUser(decodedToken.uid);
    } catch (err) {
      console.log("error: " + err.message);
      await cookies.remove("authToken");
    }
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <MenuBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
