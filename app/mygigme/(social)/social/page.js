"use client";
import UserAvatar from "@/components/UserAvatar";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const GigmeSocial = () => {
  const { user } = useUser();
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <span className="ml-5">
          {" "}
          <span className="font-georgia text-2xl text-red-500 font-extrabold bg-yellow-200">
            G
          </span>
          <span>Gigme</span>
        </span>
        <div className="flex ">
          <UserAvatar source={user} />
        </div>
      </nav>
    </div>
  );
};

export default GigmeSocial;
