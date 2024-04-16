"use client";
import { global } from "@/actions/actions";
import { useGlobalContext } from "@/app/Context/store";
import Nav_Links from "@/components/Nav_Links";
import UserAvatar from "@/components/UserAvatar";

import React, { useEffect } from "react";

const GigmeSocial = () => {
  const {
    authstate: { toggle },
    setAuthState,
  } = useGlobalContext();

  return (
    <div>
      <h1> Social Media</h1>
    </div>
  );
};

export default GigmeSocial;
