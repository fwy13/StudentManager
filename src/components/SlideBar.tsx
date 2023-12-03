"use client";
import { Box, Button } from "@mui/material";
import "@/app/globals.css";
import { AccountBox, AutoStories, Groups, Settings } from "@mui/icons-material";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

const SlideBar: React.FC = () => {
  const { IsOpen } = useContext(SidebarContext);
  return (
    <Box
      className={`${IsOpen} fixed top-0 left-0 mt-14 bg-white h-full p-2 z-50 w-40 shadows transition-all`}
    >
      <Button startIcon={<AutoStories />} className="w-full">
        Exam
      </Button>
      <Button startIcon={<AccountBox />} className="w-full">
        Information
      </Button>
      <Button startIcon={<Groups />} className="w-full">
        Team
      </Button>
      <Button startIcon={<Settings />} className="w-full">
        Setting
      </Button>
    </Box>
  );
};

export default SlideBar;
