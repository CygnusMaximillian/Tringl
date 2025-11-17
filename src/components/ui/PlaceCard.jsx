import React from 'react'
import './PlaceCard.css'

export default function PlaceCard({ name, image, price, duration, rating, description }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    return (
      <div className="rating-stars">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={index < fullStars ? "#FBBF24" : "none"}
            stroke="#FBBF24"
            strokeWidth="2"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#FBBF24"
            stroke="#FBBF24"
            strokeWidth="2"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        )}
        <span className="rating-text">{rating}</span>
      </div>
    )
  }

  return (
    <div className="place-card">
      <div className="place-image">
        <img src={image} alt={name} />
        <div className="place-overlay">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
      
      <div className="place-content">
        <div className="place-header">
          <h3 className="place-name">{name}</h3>
          {renderStars(rating)}
        </div>
        
        <p className="place-description">{description}</p>
        
        <div className="place-footer">
          <div className="place-details">
            <span className="duration">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="4.5" width="17" height="16" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
                <path d="M8 2.75V6M16 2.75V6M3.5 9.5h17" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {duration}
            </span>
          </div>
          
          <div className="place-price">
            <span className="price-amount">{price}</span>
            <span className="price-label">per person</span>
          </div>
        </div>
      </div>
    </div>
  )
}
