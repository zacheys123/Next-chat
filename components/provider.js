"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProv({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
