import React, { useState, useEffect } from 'react';

// Confetti animation function
const triggerConfetti = () => {
  const confettiCount = 50;
  const duration = 3000;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const element = document.createElement('div');
      element.className = 'confetti';
      element.style.left = Math.random() * 100 + '%';
      element.style.backgroundColor = ['#D4A574', '#8B6F47', '#F5E6D3', '#E8D5B7'][Math.floor(Math.random() * 4)];
      element.style.animationDelay = Math.random() * 0.5 + 's';
      document.body.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, duration);
    }, i * 20);
  }
};

function OrderSection() {
  const [quantities, setQuantities] = useState({
    classic: 0,
    apple: 0,
    strawberry: 0,
    tiramisu: 0
  });
  const [orderSummary, setOrderSummary] = useState({ subtotal: 0, tax: 0, total: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryDate: '',
    deliveryTime: 'morning',
    specialInstructions: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const flavors = {
    classic: 'Classic',
    apple: 'Apple',
    strawberry: 'Strawberry',
    tiramisu: 'Tiramisu'
  };

  const calculateBundlePrice = (totalQuantity) => {
    if (totalQuantity === 0) return 0;
    if (totalQuantity === 1) return 5.00;
    if (totalQuantity === 4) return 20.00;
    if (totalQuantity === 9) return 35.00;
    
    let price = 0;
    let remaining = totalQuantity;
    
    const bundlesOf9 = Math.floor(remaining / 9);
    price += bundlesOf9 * 35.00;
    remaining -= bundlesOf9 * 9;
    
    const bundlesOf4 = Math.floor(remaining / 4);
    price += bundlesOf4 * 20.00;
    remaining -= bundlesOf4 * 4;
    
    price += remaining * 5.00;
    
    return price;
  };

  useEffect(() => {
    const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    const total = calculateBundlePrice(totalQuantity);
    
    setOrderSummary({ subtotal: total, tax: 0, total });
  }, [quantities]);

  const updateQuantity = (flavor, change) => {
    setQuantities(prev => ({
      ...prev,
      [flavor]: Math.max(0, prev[flavor] + change)
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    if (totalQuantity === 0) {
      alert('Please select at least one cinnamon roll to order.');
      return;
    }

    const orderDetails = [];
    Object.keys(flavors).forEach(flavor => {
      if (quantities[flavor] > 0) {
        orderDetails.push(`${quantities[flavor]}x ${flavors[flavor]}`);
      }
    });

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('pickup-date', formData.deliveryDate);
    formDataToSend.append('pickup-time', formData.deliveryTime);
    formDataToSend.append('special-instructions', formData.specialInstructions);
    formDataToSend.append('order-details', orderDetails.join(', '));
    formDataToSend.append('order-total', orderSummary.total.toFixed(2));

    try {
      const response = await fetch('https://formspree.io/f/mkgplvbw', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setShowSuccess(true);
        // Trigger confetti animation
        triggerConfetti();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  useEffect(() => {
    const dateInput = document.getElementById('pickup-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }, []);

  if (showSuccess) {
    return (
      <section id="order" className="order-container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="success-message">
          <h2>Order Confirmed!</h2>
          <p>Thank you so much for your order! We've received your request and will reach out to you soon to confirm all the sweet details.</p>
          <p className="order-total-text">
            Your order total: <strong>${orderSummary.total.toFixed(2)}</strong>
          </p>
        </div>
      </section>
    );
  }

  const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <section id="order" className="order-container" style={{ padding: '2rem 1rem' }}>
      <div className="mobile-image-between">
        <img src="/images/about1.png" alt="Cinnamon rolls" />
      </div>
      <div className="order-header">
        <h1 className="fs-primary-heading fw-bold">Place Your Order</h1>
      </div>

      <div className="pricing-info">
        <h3>
          <span className="pricing-title-line1">Bundle Pricing</span>
          <span className="pricing-title-line2">Mix & Match</span>
        </h3>
        <ul>
          <li>
            <div className="pricing-item-left">
              <span>1 roll</span>
            </div>
            <div className="pricing-item-right">
              <strong>$5.00</strong>
            </div>
          </li>
          <li>
            <div className="pricing-item-left">
              <span>4 rolls</span>
            </div>
            <div className="pricing-item-right">
              <strong>$20.00</strong>
            </div>
          </li>
          <li>
            <div className="pricing-item-left">
              <span>9 rolls</span>
              <span className="save-text">Save $10</span>
            </div>
            <div className="pricing-item-right">
              <strong>$35.00</strong>
            </div>
          </li>
        </ul>
        <p className="bundle-hint">Bundle pricing is automatically calculated at checkout.</p>
      </div>

      <div>
        <h2 className="fs-secondary-heading text-center" style={{ marginBottom: '2rem' }}>Choose Your Flavors</h2>
        <div className="flavors-grid">
          {Object.keys(flavors).map(flavor => (
            <div key={flavor} className="flavor-card">
              <h3>{flavors[flavor]}</h3>
              <p>
                {flavor === 'classic' && 'Traditional cinnamon roll with rich cream cheese frosting'}
                {flavor === 'apple' && 'Apple chunks swirled with cinnamon and topped with cream cheese frosting'}
                {flavor === 'strawberry' && 'Sweet fresh strawberries with cream cheese frosting'}
                {flavor === 'tiramisu' && 'Coffee-flavored cinnamon roll with mascarpone frosting'}
              </p>
              <div className="quantity-control">
                <button 
                  type="button" 
                  className="quantity-btn" 
                  onClick={() => updateQuantity(flavor, -1)}
                  disabled={quantities[flavor] === 0}
                >
                  −
                </button>
                <span className="quantity-display">{quantities[flavor]}</span>
                <button 
                  type="button" 
                  className="quantity-btn" 
                  onClick={() => updateQuantity(flavor, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-summary-section">
        <h2 className="fs-secondary-heading">Order Summary</h2>
        <div id="summary-content">
          {totalQuantity === 0 ? (
            <div className="summary-item">
              <span>No items selected</span>
              <span>$0.00</span>
            </div>
          ) : (
            <>
              {Object.keys(flavors).map(flavor => {
                if (quantities[flavor] > 0) {
                  return (
                    <div key={flavor} className="summary-item flavor-item">
                      <span>{flavors[flavor]} ({quantities[flavor]}x)</span>
                      <span>—</span>
                    </div>
                  );
                }
                return null;
              })}
            </>
          )}
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span className="total-amount">${orderSummary.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="form-section">
        <h2 className="fs-secondary-heading">Pickup Information</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="pickup-date">Preferred Pickup Date *</label>
            <input 
              type="date" 
              id="pickup-date" 
              name="deliveryDate" 
              value={formData.deliveryDate}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="pickup-time">Preferred Pickup Time</label>
            <select 
              id="pickup-time" 
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="time-select"
            >
              <option value="morning">9:00 AM - 12:00 PM</option>
              <option value="afternoon">12:00 PM - 5:00 PM</option>
              <option value="evening">5:00 PM - 8:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="special-instructions">Special Instructions</label>
            <textarea 
              id="special-instructions" 
              name="specialInstructions" 
              rows="3" 
              value={formData.specialInstructions}
              onChange={handleInputChange}
              placeholder="Any special requests or dietary restrictions..."
            ></textarea>
          </div>

          <button type="submit" className="button submit-btn">Place Order</button>
        </form>
      </div>
    </section>
  );
}

export default OrderSection;

