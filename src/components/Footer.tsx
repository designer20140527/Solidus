'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

const Footer = () => {
  const communityLinks: FooterLink[] = [
    { label: 'Twitter', href: 'https://x.com/Solidus_Token', target: '_blank' },
    { label: 'Telegram', href: 'https://t.me/Solidus_Official', target: '_blank' },
    { label: 'DEXtools', href: '#' },
    { label: 'DEX Screener', href: '#' }
  ];

  const resourceLinks: FooterLink[] = [
    { label: 'Gitbook', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      
      <div className="footer-container">
        {/* Logo部分 */}
        <div className="footer-brand">
          <div className="footer-brand-top">
            <Image 
              src="/images/logo.png" 
              alt="Solidus Logo" 
              width={55} 
              height={55}
              style={{ objectFit: 'contain' }}
            />
            <span className="footer-brand-name">Solidus</span>
          </div>
          <p className="footer-brand-description">
            Build on Stability. Thrive on Solana.
          </p>
        </div>

        {/* 导航链接部分 */}
        <div className="footer-nav">
          <div className="footer-nav-section">
            <h4 className="footer-nav-title">Community</h4>
            <ul className="footer-nav-list">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  {link.target ? (
                    <a href={link.href} target={link.target} rel="noopener noreferrer" className="footer-nav-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-nav-title">Resources</h4>
            <ul className="footer-nav-list">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  {link.target ? (
                    <a href={link.href} target={link.target} rel="noopener noreferrer" className="footer-nav-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Solidus Protocol. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 