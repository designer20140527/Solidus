import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* 左侧文字内容 */}
        <div className="hero-content">
          <h1 className="hero-heading">
            The Solana-Powered Foundation for Stablecoins
          </h1>
          <p className="hero-description">
            Solidus is a next-gen protocol on Solana, bringing you $SUSD - a fully-backed, 
            scalable, and censorship-resistant stablecoin built to dominate DeFi. Leveraging 
            Solana's speed and a Delta-neutral hedging strategy, Solidus transforms volatile 
            crypto assets into a reliable, USD-pegged instrument. Stake $SUSD to earn sustainable 
            yields from funding rates and protocol revenue, redefining the value of stablecoins 
            in decentralized finance.
          </p>
          <a 
            href="https://docs.solidustoken.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Gitbook
          </a>
        </div>

        {/* 右侧图片容器 */}
        <div className="hero-image-container">
          <Image 
            src="/images/image-1.png"
            alt="Solidus Hero Image"
            width={650}
            height={650}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 