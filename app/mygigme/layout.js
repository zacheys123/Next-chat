import Nav_Links from "@/components/Nav_Links";
import React from "react";
import { auth } from "@clerk/nextjs/server";
const Gigmelayout = ({ children }) => {
  // auth().protect();
  return (
    <div>
      <Nav_Links />
      {children}
    </div>
  );
};

export default Gigmelayout;
