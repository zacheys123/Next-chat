import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "GigMeApp",
  description: "Connect to Musicians",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-100 ">{children}</body>
      </html>
    </UserProvider>
  );
}
