import React, { RefObject, useEffect, useRef } from 'react';
import * as fabric from 'fabric';

type SlideProps = {
  images: string[];
  canvasRef: RefObject<HTMLCanvasElement>
};

export default function Slide({ images, canvasRef }: SlideProps) {

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!, {
      width: 0.7 * window.innerWidth,
      height: 0.83 * window.innerHeight,
    });

    const resizeHandler = () => {
      canvas.setDimensions({
        width: 0.7 * window.innerWidth,
        height: 0.83 * window.innerHeight,
      });
    };

    window.addEventListener('resize', resizeHandler);

    images.forEach((image) => {
      fabric.FabricImage
        .fromURL(image)
        .then(img => {
          img.scaleToHeight(50);
          canvas.add(img);
        })
    });

    return () => {
      window.removeEventListener('resize', resizeHandler);
      canvas.dispose();
    };
  }, [images]);


  return (
    <canvas
      className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
      ref={canvasRef}
    />
  );
}
