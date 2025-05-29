'use client';

import React, { useState, useEffect } from 'react';

const SolidChoiceCarousel = () => {
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
      title: "Scalability",
      description: "Solana's 65,000+ TPS and $65B+ perp market liquidity allow $SUSD to scale to billions without Ethereum's bottlenecks.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 32l8-16 8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 24h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Capital Efficiency",
      description: "1:1 Delta-neutral backing eliminates over-collateralization, outperforming traditional models like DAI (150%+).",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 12v24M32 16l-8-4-8 4M32 32l-8 4-8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "High Yields",
      description: "Tap into Solana's lucrative perpetual futures market - short funding rates averaged ~9% annually.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 20h4v12h-4zM27 14h4v18h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Censorship Resistance",
      description: "Assets secured via Off-Exchange Settlement (OES) providers ensure zero custodial risk, surpassing DeFi's hack losses and CeFi's failures.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16v8M24 30v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 20a6 6 0 0 1-12 0 6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 34a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Diversified Revenue",
      description: "Solidus generates income from funding rates, stablecoin rewards, and SOL staking, ensuring sustainable yields even in bear markets, backed by a reserve fund.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 18v12M24 14v20M30 22v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    <section className="solid-choice-section">
      <div className="solid-choice-container">
        <h2 className="solid-choice-heading">
          The Solid Choice on Solana
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

          {/* Carousel容器 */}
          <div className="carousel-container">
            <div className="carousel-visible-area">
              {visibleItems.map((item) => (
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

export default SolidChoiceCarousel; 