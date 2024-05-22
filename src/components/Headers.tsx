"use client";
import { ButtonGroup, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
const Headers: React.FC = () => {
  const { IsOpen, setIsOpen } = useContext(SidebarContext);
  const ToggleOpen = () => {
    if (IsOpen === "NotOpen") {
      setIsOpen("Open");
    }
    if (IsOpen === "Open") {
      setIsOpen("NotOpen");
    }
  };
  return (
    <header className="bg-white w-full flex justify-between h-14 items-center fixed z-50 top-0 p-1 shadows">
      <IconButton
        onClick={() => {
          ToggleOpen();
        }}
      >
        <MenuIcon />
      </IconButton>
      <div>
        <IconButton>
          <NightsStayIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Headers;
