import React from "react";
import cover from "@/public/assets/cover.jpg";
import Image from "next/image";
const Cover = ({ source }) => {
  console.log(source);
  return (
    <div>
      <Image
        src={cover}
        alt="cover photo"
        className="absolute z-[-1] top-18 w-full left-0 h-[200px] md:h-[340px] xl:h-[450px] object-fit"
      />
      <Image
        src={source?.picture}
        alt="profile photo"
        width={20}
        height={20}
        className="absolute z-[1]  w-[10vw] left-0 h-[30px] md:h-[65px] xl:h-[100px] object-fit"
      />
    </div>
  );
};

export default Cover;
