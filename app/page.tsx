'use client'

import Slide from "@/components/slide";
import Navbar from "@/components/navbar";
import SidePanel from "@/components/side-panel";
import { useRef, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  function addImage(imageDataUri: string) {
    setImages(prevState => {
      return [
        ...prevState,
        imageDataUri
      ]
    })
  }

  return (
    <>
      <Navbar addImage={addImage} />
      <SidePanel />
      <div className="h-90v p-4 mt-14 sm:ml-64">
        <Slide images={images} />
      </div>
    </>
  );
}
