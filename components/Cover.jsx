import React from "react";
import cover from "@/public/assets/cover.jpg";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
const Cover = ({ source }) => {
  console.log(source);
  return (
    <div>
      <Image
        src={cover}
        alt="cover photo"
        className="absolute z-[-1] top-18 w-full left-0 h-[330px] md:h-[340px] xl:h-[450px] object-fit"
      />
      <div className="absolute flex gap-3 w-[400px]">
        {" "}
        <Image
          src={source?.picture}
          alt="profile photo"
          width={160}
          height={160}
          className="relative md:w-160 md:h-160 z-[99] rounded-full  left-4 top-[180px]  xl:h-[100px] object-fit"
        />
        <label
          htmlFor="profile"
          className="text-black text-2xl absolute left-[150px] flex cursor-pointer  gap-3 w-100 top-[250px] z-[100] "
        >
          <FaCamera />{" "}
          <span className="text-white text-sm hover:text-gray-100/80">
            update user profile pic
          </span>
          <input type="file" name="" id="profile" className="hidden" />{" "}
        </label>{" "}
      </div>
    </div>
  );
};

export default Cover;
