'use client';

import React, { useEffect, useState } from 'react';

const Roadmap = () => {
  const [isReady, setIsReady] = useState(false);

  // 预先加载所有内容
  useEffect(() => {
    // 等待组件完全挂载并渲染
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const phases = [
    {
      number: '1',
      title: 'Launch',
      items: [
        'Deploy $SOLID and $SUSD contracts on Solana.',
        'Enable minting with SOL/BTC/ETH hedging.',
        'Onboard developers and community members.'
      ]
    },
    {
      number: '2',
      title: 'Ecosystem Growth',
      items: [
        'Integrate $SUSD into Solana lending and AMM protocols.',
        'Launch $sSUSD staking with funding rate rewards.',
        'Secure initial DeFi partnerships.'
      ]
    },
    {
      number: '3',
      title: 'Scaling & Bridging',
      items: [
        'Activate cross-chain bridging to Ethereum.',
        'Distribute $SOLID incentives to boost liquidity.',
        'Expand marketing to the DeFi community.'
      ]
    },
    {
      number: '4',
      title: 'DeFi Leadership',
      items: [
        'Enhance hedging with more CEX perpetual markets.',
        'Establish the Solidus DAO for decentralized governance.',
        'Position $SUSD as a core collateral asset across Solana DeFi.'
      ]
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-container">
        <h2 className="roadmap-heading">
          Building the Future
        </h2>
        
        <div className={`roadmap-content ${isReady ? 'content-ready' : 'content-loading'}`}>
          {phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-header">
                <h3 className="phase-title">Phase {phase.number}</h3>
                <h4 className="phase-subtitle">{phase.title}</h4>
              </div>
              <ul className="phase-list">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="phase-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 