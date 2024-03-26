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

const MobileNav = ({ source }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <IoMdMenu className="inline text-white md:hidden text-2xl mx-2 cursor-pointer hover:opacity-8 hover:bg-green" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="flex flex-col justify-between  h-full "
        >
          <Box>
            <h4 className="text-center mt-3 font-bold ">Welcome to GigmeApp</h4>

            <h5 className="">Simple way to get Gigs.</h5>
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
                  <Link href="/dashboard">dashboard</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <IoMdSettings />
                  </ListItemIcon>
                  <Link href="/settings">settings</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FcAbout />
                  </ListItemIcon>
                  <Link href="/about">About</Link>
                  <ListItemText />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <MdEmail />
                  </ListItemIcon>
                  <Link href="/contact">Contact</Link>
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
                  <Avatar src={source?.picture} alt="profile image" />
                </ListItemIcon>
                <Link href="/Profile">Profile</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <CiLogout />
                </ListItemIcon>
                <Link href="">Logout</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
