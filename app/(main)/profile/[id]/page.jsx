"use client";
import ProfileForm from "@/components/ProfileForm";
import { Card, TextInput } from "flowbite-react";
import Image from "next/image";
import React from "react";

import Cover from "@/components/Cover";
import GigsPosted from "@/components/GigsPosted";
import GigsAccepted from "@/components/GigsAccepted";

import Link from "next/link";
import UserAvatar from "@/components/UserAvatar";
import { Search } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import MobileNavProfile from "@/components/MobileNavProfile";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="flex flex-col  h-screen">
      <nav className="container xl:w-[100vw] mx-auto   p-3  flex items-center justify-between">
        <span
          className="tracking-tighter cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className=" bg-cyan-300 text-purple-700 font-bold p-1 rounded-b-xl shadow-red-500">
            GigMe
          </span>
          <span className=" text-yellow-500 font-bold p-1 shadow-blue-500">
            Up
          </span>
        </span>
        <div className="flex gap-7 items-center justify-around ">
          <form className="flex gap-2 items-center flex-1">
            <TextInput type="text" placeholder="Find anyone/musician" />
            <Search className="text-slate-400 font-bold cursor-pointer" />
          </form>
          <div className="hidden md:inline-flex">
            <Link className="navLinks" href="/">
              Home |
            </Link>
            <Link className="navLinks" href="/">
              chat |
            </Link>
            <Link className="navLinks" href="/">
              post |
            </Link>
            <Link className="navLinks" href="/">
              gigs |
            </Link>
            <Link className="navLinks" href="/">
              settings |
            </Link>
            <Link className="navLinks" href="/">
              faq
            </Link>
          </div>
        </div>
        <UserAvatar source={user} />
        <MobileNavProfile source={user} />
      </nav>
      <Cover />
      <div className="flex gap-3">
        {" "}
        <ProfileForm />
        <GigsPosted />
        <GigsAccepted />
      </div>
    </div>
  );
};

export default ProfilePage;
