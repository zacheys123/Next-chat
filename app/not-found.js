"use client";
import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col  h-screen">
      <h1 className="text-5xl font-bold">404 |</h1>
      <h2 className="text-2xl font-semibold mb-3 ">Ooops!!!,Page not found</h2>
      <Button variant="primary" onClick={() => router.push("/mygigme/social")}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
