'use client'

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL'

export default function SlideImage() {

  return (
    <Draggable>
      <Resizable
        defaultSize={{
          width: 200,
          height: 360
        }}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        lockAspectRatio={true}
      >
      </Resizable>
    </Draggable>

  );
};
