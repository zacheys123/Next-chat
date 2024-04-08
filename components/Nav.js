"use client";
import { useEffect } from "react";
import UserAvatar from "./UserAvatar";
import UserButton from "./UserButton";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CircularProgress } from "@mui/material";
import { useGlobalContext } from "@/app/Context/store";
const Nav = () => {
  const {
    authstate: { mainUserProfile },
    setAuthState,
  } = useGlobalContext();
  const router = useRouter();
  const { user, isLoading } = useUser();
  const getUser = async () => {
    const res = await fetch(
      `/api/user/getuser/${user?.sub}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      { cache: "no-store" }
    );
    let ares = await res.json();
    setAuthState({ type: global.GETUSER, payload: ares });
    return ares;
  };

  useEffect(() => {
    getUser();
  }, [user?.sub]);
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
        <div className="hidden md:inline-flex">
          {user ? (
            <UserAvatar source={mainUserProfile} />
          ) : (
            <UserButton
              onClick={() => router.push("/api/auth/login")}
              title="Login"
              className="w-[100px]  bg-slate-600 border border-yellow-300 rounded-full py-2  text-white my-1 hover:bg-slate-500"
            />
          )}
        </div>
        <div className="md:hidden inline-flex">
          {user ? (
            <MobileNav source={mainUserProfile} />
          ) : (
            <UserButton
              onClick={() => router.push("/api/auth/login")}
              title="Login"
              className="w-[100px]  bg-slate-600 border border-yellow-300 rounded-full py-2  text-white my-1 hover:bg-slate-500"
            />
          )}
        </div>
      </nav>{" "}
    </div>
  );
};

export default Nav;
