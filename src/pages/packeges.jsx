import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Filter from '../components/packagecomp/filter'
import PackageCard from '../components/packagecomp/PackageCard.jsx'
import './packeges.css'

export default function Packeges() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Packages', count: 228 },
    { id: 'honeymoon', name: 'Honeymoon', count: 45 },
    { id: 'newly-launched', name: 'Newly Launched', count: 12 },
    { id: 'pilgrimage', name: 'Pilgrimage', count: 34 }
  ];

  const packages = [
    {
      id: 1,
      title: "Premium 4N Kerala Vacay",
      duration: "2N Munnar, 1N Thekkady, 1N Alleppey",
      provider: "Ramlal Travel Agency",
      tags: ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
      inclusions: ["Boating at Periyar Lake", "Spice Plantation Tour"],
      price: "₹12,494",
      isBestSeller: true
    },
    {
      id: 2,
      title: "Premium 4N Kerala Vacay",
      duration: "2N Munnar, 1N Thekkady, 1N Alleppey",
      provider: "Ramlal Travel Agency",
      tags: ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
      inclusions: ["Boating at Periyar Lake", "Spice Plantation Tour"],
      price: "₹12,494",
      isBestSeller: true
    },
    {
      id: 3,
      title: "Premium 4N Kerala Vacay",
      duration: "2N Munnar, 1N Thekkady, 1N Alleppey",
      provider: "Ramlal Travel Agency",
      tags: ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
      inclusions: ["Boating at Periyar Lake", "Spice Plantation Tour"],
      price: "₹12,494",
      isBestSeller: true
    },
    {
      id: 4,
      title: "Premium 4N Kerala Vacay",
      duration: "2N Munnar, 1N Thekkady, 1N Alleppey",
      provider: "Ramlal Travel Agency",
      tags: ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
      inclusions: ["Boating at Periyar Lake", "Spice Plantation Tour"],
      price: "₹12,494",
      isBestSeller: true
    },
    {
      id: 5,
      title: "Premium 4N Kerala Vacay",
      duration: "2N Munnar, 1N Thekkady, 1N Alleppey",
      provider: "Ramlal Travel Agency",
      tags: ["Round Trip Flights", "5 Star Hotels", "8 Activities"],
      inclusions: ["Boating at Periyar Lake", "Spice Plantation Tour"],
      price: "₹12,494",
      isBestSeller: true
    }
  ];

  return (
    <>
      <div className="packages-hero-container">
        <Header />
        <div className="hero-content">
          <h1>Kerela Packages</h1>
          <p>Discover beach Serene at the world's finest state</p>
        </div>
      </div>
      <div className="packages-container">
        <div className="content">
         <Filter />
         <div className="packages-main">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          <div className="packages-header">
            <div className="package-count">
              Showing {categories.find(cat => cat.id === activeTab)?.count || 228} packages
            </div>
            <div className="sort-container">
              <label htmlFor="sort-select">Sort by: </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="packages-list">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                duration={pkg.duration}
                provider={pkg.provider}
                tags={pkg.tags}
                inclusions={pkg.inclusions}
                price={pkg.price}
                isBestSeller={pkg.isBestSeller}
              />
            ))}
          </div>
         </div>
        </div>
      </div>
      <Footer />
    </>
  )
}