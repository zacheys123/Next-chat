import Nav_Links from "@/components/Nav_Links";
import React from "react";

const Gigmelayout = ({ children }) => {
  return (
    <div>
      <Nav_Links />
      {children}
    </div>
  );
};

export default Gigmelayout;
