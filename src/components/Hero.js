import React from 'react';

function Hero() {
  const handleOrderClick = (e) => {
    e.preventDefault();
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero | text-center-sm-only | padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div className="flow">
            <h1 className="fs-primary-heading fw-bold">Handcrafted Cinnamon Rolls</h1>
            <p>
              Freshly baked with love, these warm, gooey cinnamon rolls are made from scratch 
              using the finest ingredients. Each roll is perfectly swirled, generously frosted, 
              and baked to golden perfection.
            </p>
            <a href="#order" className="button" onClick={handleOrderClick}>Order Now</a>
          </div>
          <div className="hero__image">
            <img className="mx-auto" src="/images/roll.jpg" alt="Fresh cinnamon rolls" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

