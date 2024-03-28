"use client";
import { Avatar, Dropdown } from "flowbite-react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const UserAvatar = ({ source }) => {
  const router = useRouter();
  return (
    <div className="rounded-full ">
      <Dropdown
        label={
          <Image
            src={source?.picture || ""}
            alt="image"
            width={30}
            height={30}
            className="rounded-full  md:h-30 xl:w-34 xl:h-34"
          />
        }
      >
        <Dropdown.Header>
          <span className="flex flex-col text-sm text-red-500 font-bold">
            {source && source?.name}
            <span className="text-green-500 ">
              {source?.nickname && source?.nickname}
            </span>
          </span>
          <span className="block truncate text-sm font-bold text-cyan-400">
            {source?.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item onClick={() => router.push(`/dashboard/`)}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item onClick={() => router.push(`/settings/`)}>
          Settings
        </Dropdown.Item>
        <Dropdown.Item onClick={() => router.push(`/profile/${source?.sub}`)}>
          Profile
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item
          onClick={async () => {
            router.push("/api/auth/logout");
            if (typeof window !== "undefined" && window.localStorage) {
              window?.localStorage.removeItem("profile");
              window?.localStorage.removeItem("token");
            }
            const res = await fetch("/api/auth/logout");
            let data = await res.json();
            console.log(res);
          }}
        >
          SignOut
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserAvatar;
