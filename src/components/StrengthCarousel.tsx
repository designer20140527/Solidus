'use client';

import React, { useState, useEffect } from 'react';

const StrengthCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // 预先加载所有内容
  useEffect(() => {
    // 等待组件完全挂载并渲染
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      id: 1,
      title: "Atomic Minting",
      description: "Deposit SOL, BTC, or ETH, and Solidus instantly mints $SUSD with a matching short perpetual contract. Stable value, secured.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "$sSUSD: Earn Rewards",
      description: "Stake $SUSD to receive $sSUSD, an asset that grows with protocol income. Pure value accumulation, no rehypothecation.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 12l8 14-8 14-8-14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Liquidity Provision",
      description: "Add $SUSD to Solana AMMs and earn $SOLID rewards while boosting DeFi liquidity.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 22l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Cross-Chain",
      description: "Seamlessly move $SUSD between Solana and Ethereum using LayerZero or Wormhole. Expand your reach.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 24h16M32 16l-8 8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Flexible Redemption",
      description: "Redeem $SUSD for underlying assets through AMM pools or direct channels.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20l8 8 8-8M24 28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const maxIndex = items.length - 3; // 最大索引（显示3个item）

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // 只显示当前和临近的几个item
  const visibleItems = items.slice(
    Math.max(0, currentIndex),
    Math.min(items.length, currentIndex + 3)
  );

  return (
    <section id="about" className="strength-carousel-section">
      <div className="strength-carousel-container">
        <h2 className="strength-carousel-heading">
          Backed by Strength
        </h2>
        
        <div className={`carousel-wrapper ${isReady ? 'carousel-ready' : 'carousel-loading'}`}>
          {/* 左侧导航按钮 */}
          <button 
            className="carousel-nav-button carousel-nav-prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel容器 - 简化版本，不使用复杂的transform */}
          <div className="carousel-container">
            <div className="carousel-visible-area">
              {visibleItems.map((item, index) => (
                <div key={item.id} className="carousel-item">
                  <div className="carousel-item-icon">
                    {item.icon}
                  </div>
                  <h3 className="carousel-item-title">
                    {item.title}
                  </h3>
                  <p className="carousel-item-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧导航按钮 */}
          <button 
            className="carousel-nav-button carousel-nav-next"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StrengthCarousel; 