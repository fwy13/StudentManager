"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TypeSideBar {
  IsOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
}

export const SidebarContext = createContext<TypeSideBar>({
  IsOpen: "",
  setIsOpen: (): string => "",
});

export default function SidebarApp({ children }: any) {
  const [IsOpen, setIsOpen] = useState<string>("NotOpen");
  return (
    <SidebarContext.Provider value={{ IsOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
