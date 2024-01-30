'use client'
import Slide from "@/components/slide";
import Navbar from "@/components/navbar";
import SidePanel from "@/components/side-panel";
import SlideImage from "@/components/slide-image";
import { useRef } from "react";

export default function Home() {

  return (
    <>
      <Navbar />
      <SidePanel />
      <div className="h-90v p-4 mt-14 sm:ml-64">
        <Slide />
      </div>
    </>
  );
}
