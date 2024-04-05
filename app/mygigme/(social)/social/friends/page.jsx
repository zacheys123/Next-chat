"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const FriendsPage = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("username"));
  return (
    <div>
      <h1>Friends Page Going Here</h1>
    </div>
  );
};

export default FriendsPage;
