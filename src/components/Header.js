import React from 'react';

function Header() {
  const handleOrderClick = (e) => {
    e.preventDefault();
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#home" aria-label="Home">
            <img src="/images/logo.png" alt="SouChef" className="site-logo" />
          </a>
          <nav className="primary-navigation" id="primary-navigation">
            <ul role="list" aria-label="Primary" className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#order" onClick={handleOrderClick}>Order</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

