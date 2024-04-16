"use client";
import UserButton from "@/components/UserButton";
import { useRouter } from "next/navigation";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Error = () => {
  const router = useRouter();
  const reload = () => {
    router.back();
  };
  return (
    <div className="flex h-100 justif-center items-center gap-3 flex-col bg-slate-300 text-gray-400/60">
      <h1>Error had Occured check your internet or Network connection</h1>
      <UserButton
        title="Reload"
        onClick={reload}
        className="p-3 w-[40px] bg-blue-500b  h-[30px]"
      />
    </div>
  );
};

export default Error;
