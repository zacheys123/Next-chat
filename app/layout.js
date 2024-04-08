import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GlobalProvider } from "./Context/store";
import QueryProv from "@/components/provider";
export const metadata = {
  title: "GigMeApp",
  description: "Connect to Musicians",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <QueryProv>
        <GlobalProvider>
          <html lang="en">
            <body className="min-h-screen bg-gray-100 ">{children}</body>
          </html>
        </GlobalProvider>
      </QueryProv>
    </UserProvider>
  );
}
