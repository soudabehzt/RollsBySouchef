import React from 'react';

function Features() {
  return (
    <section className="about padding-block-700">
      <div className="container">
        <div className="about-wrap">
          <h2 className="fs-secondary-heading fw-bold text-center">What Makes Our Cinnamon Rolls Special</h2>
          
          <div className="numbered-items">
            <ul role="list" className="flow" style={{ '--flow-spacer': '2em' }}>
              <li>
                <div>
                  <h3 className="numbered-items__title fw-bold">Made Fresh Daily</h3>
                  <p className="numbered-items__body">Every batch is baked fresh the morning of your order, ensuring maximum flavor and that perfect warm, gooey texture.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="numbered-items__title fw-bold">Four Delicious Flavors</h3>
                  <p className="numbered-items__body">Choose from Classic, Apple, Strawberry, or Tiramisu - mix and match to create your perfect order!</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="numbered-items__title fw-bold">Bundle Pricing</h3>
                  <p className="numbered-items__body">Special pricing: 1 roll $5, 4 rolls $20, or 9 rolls $35. Mix any flavors you like!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

