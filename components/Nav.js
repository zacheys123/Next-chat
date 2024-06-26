"use client";
import { useEffect } from "react";
import UserAvatar from "./UserAvatar";
import { UserButton, auth, useAuth } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useGlobalContext } from "@/app/Context/store";
import { useUser } from "@clerk/nextjs";
const Nav = () => {
  const {
    authstate: { mainUserProfile },
    setAuthState,
  } = useGlobalContext();
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId);
  const { isSignedIn, user } = useUser();
  console.log(user);
  // const getUser = async () => {
  //   const res = await fetch(
  //     `/api/user/getuser/${user?.sub}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //     { cache: "no-store" }
  //   );
  //   let ares = await res.json();
  //   setAuthState({ type: global.GETUSER, payload: ares });
  //   return ares;
  // };

  // useEffect(() => {
  //   getUser();
  // }, [user?.sub]);
  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-blue-900">
        <div className="flex justify-center items-center h-screen flex-col">
          <CircularProgress size="100px" />
          <span className="mt-2 text-base text-white font-bold">
            Authenticate User,more actions underway :)..
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="top-0">
      <nav className="container mx-auto max-w-[100vw] xl:w-[60vw] p-3 bg-cyan-800 flex items-center justify-between">
        <span
          className="tracking-tighter cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className=" bg-pink-100 text-red-500 font-bold p-1 rounded-b-xl shadow-red-500">
            GigMe
          </span>
          <span className=" text-yellow-100 font-bold p-1 shadow-blue-500">
            Up
          </span>
        </span>
        <span></span>
        <UserButton afterSignOutUrl="/sign-in" />
      </nav>{" "}
    </div>
  );
};

export default Nav;
