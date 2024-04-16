"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";

import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const MobileNavProfile = ({ source, mobile }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box className={`flex || ${mobile} md:hidden`}>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <IoMdMenu className="inline text-black md:hidden text-2xl mx-2 cursor-pointer hover:opacity-8 hover:bg-green" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="flex flex-col justify-between  h-full "
        >
          <Box>
            <h4 className="text-center mt-3 font-bold text-gray-700/70">
              Welcome to GigmeApp
            </h4>

            <h6 className="text-sm tracking-tighter font-semibold text-gray-600/80 text-center">
              Simple way to get Gigs.
            </h6>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaHome />
                  </ListItemIcon>
                  <Link href="/">Home</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <MdDashboard />
                  </ListItemIcon>
                  <Link href="/dashboard">Chat</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <IoMdSettings />
                  </ListItemIcon>
                  <Link href="/settings">Posts</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FcAbout />
                  </ListItemIcon>
                  <Link href="/about">Gigs</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <MdEmail />
                  </ListItemIcon>
                  <Link href="/contact">Settings</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <FaQuestionCircle />
                  </ListItemIcon>
                  <Link href="/Faq">Faq</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar src="" alt="profile image" />
                </ListItemIcon>
                <Link href="">Profile</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding className="w-full">
              <Link href="/api/auth/logout">
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <CiLogout />
                  </ListItemIcon>
                  Logout
                  <ListItemText />
                </ListItemButton>
              </Link>
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavProfile;
