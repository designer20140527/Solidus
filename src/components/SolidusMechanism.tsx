'use client';

import React, { useEffect, useState } from 'react';

const SolidusMechanism = () => {
  const [isReady, setIsReady] = useState(false);

  // 预先加载所有内容
  useEffect(() => {
    // 等待组件完全挂载并渲染
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mechanism-section">
      <div className="mechanism-container">
        <h2 className="mechanism-heading">
          The Solidus Mechanism
        </h2>
        
        <div className={`mechanism-content ${isReady ? 'content-ready' : 'content-loading'}`}>
          {/* 第一行: 两个并排的卡片 */}
          <div className="mechanism-row top-row">
            <div className="mechanism-card">
              <h3 className="mechanism-card-title">Delta-Neutral Precision</h3>
              <p className="mechanism-card-description">
                $SUSD maintains its peg with automated Delta hedging. A 1 SOL deposit triggers a 1 SOL short perpetual, neutralizing price volatility.
              </p>
            </div>

            <div className="mechanism-card">
              <h3 className="mechanism-card-title">Off-Exchange Security</h3>
              <p className="mechanism-card-description">
                Backing assets are held in secure OES solutions, minimizing counterparty risk by only using CEXs for settlement.
              </p>
            </div>
          </div>

          {/* 第二行: 收入生成卡片 */}
          <div className="mechanism-row revenue-row">
            <div className="revenue-card">
              <h3 className="revenue-heading">Revenue Generation: Solidus earns from</h3>
              
              <div className="revenue-sources">
                <div className="revenue-item">
                  <h4 className="revenue-item-title">Funding Rate Spreads</h4>
                  <p className="revenue-item-description">
                    Short perpetuals historically yield 7-13% annually.
                  </p>
                </div>

                <div className="revenue-item">
                  <h4 className="revenue-item-title">Stablecoin Rewards</h4>
                  <p className="revenue-item-description">
                    USDC holdings earn fixed rates (e.g., Coinbase).
                  </p>
                </div>

                <div className="revenue-item">
                  <h4 className="revenue-item-title">SOL Staking</h4>
                  <p className="revenue-item-description">
                    Consensus rewards boost returns without leverage risk.
                  </p>
                </div>
              </div>

              <div className="revenue-divider"></div>

              <div className="reward-distribution">
                <h4 className="reward-heading">Reward Distribution</h4>
                <p className="reward-description">
                  $sSUSD holders receive daily income via a "Token Vault" model. Your stake grows automatically, protected from negative funding by the reserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolidusMechanism; 