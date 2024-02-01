'use client'

import { RefObject } from "react";
import Image from 'next/image';

type Props = {
  canvasRefs: Array<RefObject<HTMLCanvasElement>>;
}

export default function SidePanel({ canvasRefs }: Props) {
  const generateThumbnail = (canvasRef: RefObject<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    return canvas?.toDataURL('image/png');
  };

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {canvasRefs.map((ref, index) => {
          const imgUri = generateThumbnail(ref);
          console.log(`imgUri: ${imgUri}`);
          if (!imgUri) return;
          return (
            <Image
              key={index}
              src={imgUri}
              width={500}
              height={500}
              alt="Slide thumbnail"
            />
          );
        })}
      </div>
    </aside>
  );
}