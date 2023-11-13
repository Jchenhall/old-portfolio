"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { AppContext } from "@/context/app-context";
import { useState } from "react";
import { UserStatus } from "@/enums/enums";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userStatus, setUserStatusTo] = useState<UserStatus>(
    UserStatus.LoggedOut
  );

  return (
    <html lang="en">
      <body>
        <Providers>
          <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
            {children}
          </AppContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
