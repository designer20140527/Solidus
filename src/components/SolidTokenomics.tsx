'use client';

import React, { useEffect, useState } from 'react';

const SolidTokenomics = () => {
  const [isReady, setIsReady] = useState(false);

  // 预先加载所有内容
  useEffect(() => {
    // 等待组件完全挂载并渲染
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const allocations = [
    { label: 'Liquidity', percentage: 70, color: 'rgba(173, 95, 20, 0.3)' },
    { label: 'Community & Incentives', percentage: 20, color: 'rgba(237, 175, 53, 0.4)' },
    { label: 'Ecosystem Development', percentage: 5, color: 'rgba(226, 159, 24, 0.4)' },
    { label: 'Team', percentage: 5, color: 'rgba(212, 160, 23, 0.4)' }
  ];

  const utilities = [
    {
      title: 'Governance',
      description: '$SOLID holders shape the protocol\'s future.'
    },
    {
      title: 'Fee Reduction',
      description: 'Reduce minting/redemption costs with $SOLID.'
    },
    {
      title: 'Ecosystem Perks',
      description: 'Get priority access to partner benefits.'
    }
  ];

  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="tokenomics-container">
        <h2 className="tokenomics-heading">
          $SOLID Tokenomics
        </h2>
        
        <div className={`tokenomics-content ${isReady ? 'content-ready' : 'content-loading'}`}>
          {/* 左侧：分配进度条 */}
          <div className="allocation-section">
            <h3 className="tokenomics-supply">
              Total Supply: 1 Billion $SOLID
            </h3>
            <h4 className="allocation-heading">Allocation</h4>
            <div className="allocation-list">
              {allocations.map((item, index) => (
                <div key={index} className="allocation-item">
                  <div 
                    className="allocation-bar"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                  <span className="allocation-label">{item.label}</span>
                  <span className="allocation-value">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：功能介绍 */}
          <div className="utility-section">
            {utilities.map((item, index) => (
              <div key={index} className="utility-item">
                <h4 className="utility-title">{item.title}</h4>
                <p className="utility-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolidTokenomics; 