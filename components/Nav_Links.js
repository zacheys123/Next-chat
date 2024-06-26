"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import UserAvatar from "./UserAvatar";
import MobileNavProfile from "./MobileNavProfile";
import { TextInput } from "flowbite-react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { IoIosSettings } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import UserButton from "./UserButton";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalContext } from "@/app/Context/store";
import Axios from "axios";

const Nav_Links = () => {
  const {
    authstate: { mainUserProfile, allusers },
    setAuthState,
  } = useGlobalContext();

  const router = useRouter();
  const [Active, setActive] = useState("home");
  let activelink;
  const active_Ref = useRef();
  const search_Ref = useRef("");

  useEffect(() => {
    active_Ref.current = activelink;
  }, []);

  useEffect(() => {
    active_Ref.current = localStorage.getItem("active");
  }, []);

  // React query function tto get current User

  //
  // Get all users
  // const {
  //   data: alldata,
  //   isLoading: allusersloading,
  //   error: errorallusers,
  // } = useQuery({
  //   queryKey: ["alluserdata"],
  //   queryFn: async () => {
  //     const res = await Axios.get(`/api/user/getAllusers`);

  //     return res;
  //   },
  // });

  //

  const handleSearch = async () => {
    // try {
    //   const res = await fetch(`/api/user/searchFriend/${search_Ref.current}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ search_Ref, auth0: user?.sub }),
    //   });
    //   const data = await res.json();
    //   if (res.ok) {
    //     router.push(`/mygigme/social/friends?search=${search_Ref.current}`);
    //     search_Ref.current = "";
    //   } else {
    //     alert(data.message);
    //     router.push(`/mygigme/social`);
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const [showSearch, setSearch] = useState("false");
  const searchFn = (searchkey) => {
    // let sorteddata = alldata?.data?.results;
    // let search = search_Ref.current.toString().toLowerCase();
    // sorteddata = sorteddata?.filter((newdata) => {
    //   if (searchkey !== undefined || searchkey?.length > 0 || searchkey) {
    //     if (
    //       newdata.firstname?.toLowerCase().includes(searchkey) ||
    //       newdata.secondname?.toLowerCase().includes(searchkey) ||
    //       newdata.username?.toLowerCase().includes(searchkey) ||
    //       newdata.piano?.toLowerCase().includes(searchkey)
    //     ) {
    //       // console.log(sorteddata[0]);
    //       return sorteddata;
    //     } else {
    //       console.log("user not found");
    //     }
    //   } else {
    //     console.log("empty");
    //   }
    // });
    // return sorteddata;
  };
  if (errorallusers || error) {
    router.push("/");
  }
  return (
    <nav className="container xl:w-[100vw] mx-auto  p-3  flex items-center justify-between gap-5 md:gap-3">
      <span
        className={showSearch ? "tracking-tighter cursor-pointer" : "hidden"}
        onClick={() => router.push("/")}
      >
        <span className=" bg-cyan-300 text-purple-700 font-bold p-1 rounded-b-xl shadow-red-500">
          GigMe
        </span>
        <span className=" text-yellow-500 font-bold p-1 shadow-blue-500">
          Up
        </span>
      </span>
      <div className="hidden md:flex gap-7 items-center justify-around ">
        <form className="hidden md:flex gap-2 items-center flex-1v  md:flex-col">
          <div className="flex gap-3 justify-center items-center">
            <TextInput
              ref={search_Ref}
              type="text"
              placeholder="Find anyone/instrument.username"
              onKeyDown={(ev) => searchFn(ev.target.value)}
            />
            <Search
              onClick={handleSearch}
              className="text-slate-400 font-bold cursor-pointer"
            />
          </div>
          <>
            {" "}
            {searchFn() &&
              searchFn()?.map((allusersdata) => {
                return (
                  <Link
                    key={allusersdata._id}
                    href={`/mygigme/social/friends?search=${search_Ref.current.toString()}`}
                    onClick={() => {
                      setActive("chat");
                      localStorage.setItem("active", Active);
                    }}
                    className="h-[100px] bg-green z-1 absolute"
                  >
                    {allusersdata?.firstname} {allusersdata?.secondname}
                  </Link>
                );
              })}
          </>
        </form>
        <div className="hidden md:inline-flex">
          <Link
            className={
              !active_Ref.current === "home" ? "navLinks" : "active_links"
            }
            href="/mygigme/social"
            onClick={() => {
              setActive("home");
              localStorage.setItem("active", Active);
            }}
          >
            Home |
          </Link>
          <Link
            className={
              active_Ref.current === "chat" ? "navLinks" : "active_links"
            }
            href="/mygigme/chat"
            onClick={() => {
              setActive("chat");
              localStorage.setItem("active", Active);
            }}
          >
            chat |
          </Link>
          <Link
            className={
              !active_Ref.current === "post" ? "navLinks" : "active_links"
            }
            href="/post"
            onClick={() => {
              setActive("posts");
              localStorage.setItem("active", Active);
            }}
          >
            post |
          </Link>
          <Link
            className={
              !active_Ref.current === "gigs" ? "navLinks" : "active_links"
            }
            href="/"
            onClick={() => {
              setActive("gigs");
              localStorage.setItem("active", Active);
            }}
          >
            gigs |
          </Link>
          <Link
            className={
              !active_Ref.current === "settings" ? "navLinks" : "active_links"
            }
            href="/"
            onClick={() => {
              setActive("settings");
              localStorage.setItem("active", Active);
            }}
          >
            settings |
          </Link>
          <Link
            className={
              !active_Ref.current === "profile" ? "navLinks" : "active_links"
            }
            href={`/profile/${user?.sub}`}
            onClick={() => {
              setActive("profile");
              localStorage.setItem("active", Active);
            }}
          >
            profile |
          </Link>
          <Link
            className={
              !active_Ref.current === "faq" ? "navLinks" : "active_links"
            }
            href="/"
            onClick={() => {
              setActive("faq");
              localStorage.setItem("active", Active);
            }}
          >
            faq
          </Link>
        </div>
      </div>{" "}
      <div className=" flex justify-center items-center gap-2 md:hidden xl:hidden">
        {!showSearch && (
          <form className="flex gap-2 items-center flex-1 w-[90vw]">
            <TextInput
              onChange={(ev) => setSearchQuery(ev.target.value)}
              value={searchQuery}
              type="text"
              placeholder="Find anyone/musician"
              className="w-full"
            />
            <UserButton
              onClick={() => {
                setSearch(false);
                handleSearch();
              }}
              title="search"
              className="font-mono bg-blue-500 rounded-xl text-1xl p-1 text-white"
            />
          </form>
        )}
        <Search
          onClick={() => {
            setSearch(false);
          }}
          className={
            showSearch ? "text-slate-400 font-bold cursor-pointer" : "hidden"
          }
        />
        <IoHomeOutline
          onClick={() => router.push("/mygigme/social")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <IoChatbubbleOutline
          onClick={() => router.push("/mygigme/chat")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <FaRegUser
          onClick={() => router.push("/mygigme/profile")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <FiGift
          onClick={() => router.push("/mygigme/gigs")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <FcAbout
          onClick={() => router.push("/mygigme/post")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <IoIosSettings
          onClick={() => router.push("/mygigme/settings")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <FaQuestionCircle
          onClick={() => router.push("/mygigme/faq")}
          className={
            showSearch
              ? "text-[28px] cursor-pointer bg-gray-200/70 p-[5px] rounded-full hover:bg-gray-300/70"
              : "hidden"
          }
        />
        <UserButton
          title="SignOut"
          onClick={() => router.push("/api/auth/logout")}
          className={
            showSearch
              ? "md:hidden flex ml-2 text-sm  border border-red-600 py-1 px-2 rounded-xl text-slate-600 font-arial hover:bg-gray-100/70"
              : "hidden "
          }
        />
      </div>
      <UserAvatar source={data?.data?.user} loading={isLoading} />
      <MobileNavProfile source={mainUserProfile} mobile="hidden" />
    </nav>
  );
};

export default Nav_Links;
