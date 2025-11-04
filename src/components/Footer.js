import React from 'react';

function Footer() {
  return (
    <footer className="endcap bg-accent-400 text-neutral-100">
      <div className="container">
        <div className="endcap-grid">
          <div className="brand">
            <a href="#home" aria-label="Home">
              <img className="logo" src="/images/logo2.png" alt="SouChef" />
            </a>
            <ul className="social-list" aria-label="Social links">
              <li>
                <a 
                  href="https://ca.pinterest.com/soudabehtorbati/?invite_code=8ef1a356b9e94667a78c33bdb64a8674&sender=943433959348684411" 
                  aria-label="Pinterest"
                >
                  <svg className="social-icon">
                    <use href="#icon-pinterest"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/souchef__" aria-label="Instagram">
                  <svg className="social-icon">
                    <use href="#icon-instagram"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <p className="legal">
            Fresh baked daily. Made with love.<br />
            Copyright 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

