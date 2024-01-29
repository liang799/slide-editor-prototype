'use client'

import React, { useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { Resizable, ResizeCallback } from 're-resizable';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL'

type ImgPos = {
  x: number,
  y: number
}

type ImgSize = {
  width: number,
  height: number
}

export default function SlideImage() {
  const [position, setPosition] = useState<ImgPos>({ x: 0, y: 0 });
  const [size, setSize] = useState<ImgSize>({ width: 200, height: 360 });

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const handleResize: ResizeCallback = (e, direction, ref, delta) => {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
  };

  return (
    <Draggable
      position={position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <Resizable
        size={size}
        onResizeStop={handleResize}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        lockAspectRatio={true}
      />
    </Draggable>
  );
};
