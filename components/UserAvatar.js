"use client";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "flowbite-react";
import { useState } from "react";
import { useGlobalContext } from "@/app/Context/store";
import { global } from "@/actions/actions";
import { Avatar } from "@mui/material";
import broken from "@/public/assets/broken-image.png";
const UserAvatar = ({ source }) => {
  const {
    authstate: { toggle },
    setAuthState,
  } = useGlobalContext();
  const router = useRouter();

  console.log(source);
  return (
    <div>
      {" "}
      <div className=" hidden md:inline-flex cursor-pointer">
        {/* <Image
   
          src={source?.picture || ""}
          alt="image"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        /> */}
        {source?.firstname && !source?.picture ? (
          <Avatar
            alt="profile image"
            src={broken}
            onClick={() => {
              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          >
            {source?.firstname.split("")[0]}
          </Avatar>
        ) : (
          <Avatar
            src={source?.picture}
            onClick={() => {
              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          />
        )}
      </div>
      {toggle && (
        <Card className=" flex-col items-center gap-3 absolute right-10">
          <section>
            <span className="flex gap-1 text-sm text-red-500 font-bold">
              {source && source?.firstname}
              <span>{source?.secondname && source?.secondname}</span>
            </span>
            <span className="block truncate text-sm font-bold text-cyan-400">
              {source?.email}
            </span>
          </section>
          <span
            className="font-serif font-normal text-sm cursor-pointer p-2 hover:bg-gray-200/60 transition-opacity duration-75"
            onClick={() => {
              router.push(`/dashboard/`);

              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          >
            Dashboard
          </span>
          <span
            className="font-serif font-normal text-sm cursor-pointer p-2 hover:bg-gray-200/60 transition-opacity duration-75"
            onClick={() => {
              router.push(`/settings/`);
              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          >
            Settings
          </span>
          <span
            className="font-serif font-normal text-sm cursor-pointer p-2 hover:bg-gray-200/60 transition-opacity duration-75"
            onClick={() => {
              router.push(`/profile/${source?.sub}`);
              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          >
            Profile
          </span>
          <Separator />

          <span
            className="cursor-pointer hover:bg-gray-200/60 p-2"
            onClick={async () => {
              router.push("/api/auth/logout");
              if (typeof window !== "undefined" && window.localStorage) {
                window?.localStorage.removeItem("profile");
                window?.localStorage.removeItem("token");
              }
              const res = await fetch("/api/auth/logout");
              let data = await res.json();
              console.log(res);
              setAuthState({ type: global.TOGGLE, payload: !toggle });
            }}
          >
            SignOut
          </span>
        </Card>
      )}
    </div>
  );
};

export default UserAvatar;
