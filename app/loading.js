import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center h-screen flex-col">
        <CircularProgress size="100px" />
        <span className="mt-2 text-2xl font-bold">
          Please wait a moment :)..
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
