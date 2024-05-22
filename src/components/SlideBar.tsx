"use client";
import { Box, Button } from "@mui/material";
import "@/app/globals.css";
import { AccountBox, AutoStories, Groups, Home, Settings } from "@mui/icons-material";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import Link from "next/link";

const SlideBar: React.FC = () => {
    const { IsOpen } = useContext(SidebarContext);
    return (
        <Box
            className={`${IsOpen} fixed top-0 left-0 mt-14 bg-white h-full p-2 z-50 w-40 shadows transition-all`}
        >
          <Link href={"/"}>
                <Button startIcon={<Home />} className="w-full">
                    Home
                </Button>
            </Link>
            <Link href={"/exam"}>
                <Button startIcon={<AutoStories />} className="w-full">
                    Exam
                </Button>
            </Link>
            <Link href={"/team"}>
                <Button startIcon={<Groups />} className="w-full">
                    Team
                </Button>
            </Link>
        </Box>
    );
};

export default SlideBar;
