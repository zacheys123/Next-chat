import React from "react";

import { Button } from "flowbite-react";

const UserButton = ({ onClick, title, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default UserButton;
