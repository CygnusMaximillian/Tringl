import React from 'react';
import './PackageCard.css';
import packageImg from '../../assets/images/packageimg.png';

const PackageCard = ({ 
  title = "Premium 4N Kerala Vacay",
  duration = "2N Munnar, 1N Thekkady, 1N Alleppey",
  provider = "Ramlal Travel Agency",
  tags = ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
  inclusions = ["Boating at Periyar Lake", "Spice Plantation Tour"],
  price = "₹12,494",
  isBestSeller = true
}) => {
  return (
    <div className="package-card">
      <div className="package-image-container">
        <img src={packageImg} alt={title} className="package-image" />
        {isBestSeller && (
          <div className="best-seller-badge">
            Best Seller
          </div>
        )}
      </div>
      
      <div className="package-content">
        <div className="package-header">
          <p className="package-provider">Provided by - {provider}</p>
          <h3 className="package-title">{title}</h3>
          <p className="package-duration">{duration}</p>
        </div>
        
        <div className="package-tags">
          {tags.map((tag, index) => (
            <span key={index} className="package-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="package-inclusions">
          {inclusions.map((inclusion, index) => (
            <div key={index} className="inclusion-item">
              <span className="checkmark">✓</span>
              <span>{inclusion}</span>
            </div>
          ))}
        </div>
        
        <div className="package-footer">
          <div className="package-price">
            {price} <span className="price-per">/Person</span>
          </div>
          <button className="view-details-btn">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
