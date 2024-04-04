"use client";
import { useGlobalContext } from "@/app/Context/store";
import { registerSlice } from "@/features/registerSlice";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Authenticate = () => {
  const {
    authstate: {},
    setAuthState,
  } = useGlobalContext();
  const router = useRouter();
  const { user, isLoading } = useUser();
  console.log(user);
  useEffect(() => {
    if (user) {
      registerSlice(user, router, setAuthState);
      router.push("/mygigme/social");
    }
  }, [user]);
  if (isLoading) {
    return (
      <div className="h-screen w-full">
        <div className="flex justify-center items-center h-screen flex-col">
          <CircularProgress size="100px" />
          <span className="mt-2 text-sm font-bold">
            Authenticate User,more actions underway :)..
          </span>
        </div>
      </div>
    );
  }
};

export default Authenticate;
