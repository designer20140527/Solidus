'use client';

import React from 'react';
import Image from 'next/image';

const BorderFrame = () => {
  return (
    <>
      {/* SVG遮罩定义 */}
      <svg width="0" height="0" style={{ position: 'absolute' }} preserveAspectRatio="none">
        <defs>
          <mask id="border-frame-shape" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            {/* 外层完整矩形 - 白色 */}
            <rect fill="white" x="0" y="0.03" width="1" height="0.97"></rect>
            {/* 内层镂空矩形 - 黑色 */}
            <rect fill="black" x="0.0015" y="0.0315" width="0.997" height="0.9670"></rect>
            {/* 顶部中间遮挡块 - 黑色，创建截断效果 */}
            <rect fill="black" x="0.37" y="0" width="0.26" height="0.0315"></rect>
          </mask>
        </defs>
      </svg>

      {/* 顶部装饰图片 */}
      <div className="border-frame-decoration">
        <Image 
          src="/images/head.png"
          alt="Border Decoration"
          width={600}
          height={150}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* 发光层 */}
      <div className="border-frame-glow"></div>
      
      {/* 边框层 */}
      <div className="border-frame-container"></div>
    </>
  );
};

export default BorderFrame; 