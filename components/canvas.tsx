'use client'

import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

export default function FabricJSCanvas() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const imageUrl = 'https://buffer.com/library/content/images/2023/10/free-images.jpg'

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {
      width: 0.7 * window.innerWidth,
      height: 0.83 * window.innerHeight,
    });

    fabric.FabricImage
      .fromURL(imageUrl)
      .then(img => {
        img.scaleToHeight(50);
        canvas.add(img);
      });


    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 200,
      height: 150,
      fill: 'blue',
    });

    canvas.add(rect);

    return () => {
      canvas.dispose();
    }
  }, []);

  const generateThumbnail = () => {
    const canvas = canvasEl.current;
    const imageData = canvas?.toDataURL('image/png');
  };

  return (
    <canvas className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700" ref={canvasEl} />
  );
};
