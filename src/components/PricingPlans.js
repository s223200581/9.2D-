// src/components/PricingPlans.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingPlans.css';
import { Icon } from 'semantic-ui-react';

const PricingPlans = () => {
  const navigate = useNavigate();

  const handlePremiumSelect = () => {
    navigate('/payment');
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Choose Your Plan</h2>
      <div className="pricing-cards">
        {/* Free Plan Card */}
        <div className="plan-card">
          <Icon name="check circle" size="big" className="plan-icon" />
          <h3>Free Plan</h3>
          <p className="plan-price">Free</p>
          <ul className="plan-features">
            <li>Basic Post and Question features</li>
            <li>Community support</li>
          </ul>
          <button className="select-btn selected-btn" disabled>
            Selected
          </button>
        </div>
        {/* Premium Plan Card */}
        <div className="plan-card premium">
          <Icon name="star" size="big" className="plan-icon" />
          <h3>Premium Plan</h3>
          <p className="plan-price">$9.99/month</p>
          <ul className="plan-features">
            <li>Customization (messages, banners, themes)</li>
            <li>Content controls & admin features</li>
            <li>Analytics Dashboard</li>
            <li>24/7 priority support</li>
          </ul>
          <button className="select-btn" onClick={handlePremiumSelect}>
            Select Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
