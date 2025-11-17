import React from 'react'
import './ReviewCard.css'

export default function ReviewCard({ name, package: packageName, quote, rating = 5 }) {
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <svg key={index} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ))
  }

  return (
    <div className="review-card">
      <div className="review-profile">
        <div className="profile-image-placeholder">
          {/* Placeholder for profile image */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="#9CA3AF" strokeWidth="2"/>
          </svg>
        </div>
        <div className="profile-info">
          <h4 className="reviewer-name">{name}</h4>
          <p className="package-name">{packageName}</p>
        </div>
      </div>
      <blockquote className="review-quote">"{quote}"</blockquote>
      <div className="review-rating">
        {renderStars(rating)}
      </div>
    </div>
  )
}
