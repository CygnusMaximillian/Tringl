import React, { useState } from 'react';
import './filter.css';

const Filter = () => {
  const [duration, setDuration] = useState(1);
  const [flightOption, setFlightOption] = useState('with');
  const [budget, setBudget] = useState(10000);
  const [budgetRanges, setBudgetRanges] = useState({
    under10k: false,
    tenTo20k: false,
    twentyTo50k: false,
    moreThan50k: false
  });

  const handleBudgetRangeChange = (range) => {
    setBudgetRanges(prev => ({
      ...prev,
      [range]: !prev[range]
    }));
  };

  return (
    <div className="filter-container">
      <h2 className="filter-title">Filters</h2>
      
      {/* Duration Section */}
      <div className="filter-section">
        <h3 className="section-title">Duration (in Nights)</h3>
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="15"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="slider"
          />
          <div className="slider-labels">
            <span>1 Night</span>
            <span>15 Nights</span>
          </div>
        </div>
      </div>

      {/* Flights Section */}
      <div className="filter-section">
        <h3 className="section-title">Flights</h3>
        <div className="flight-buttons">
          <button
            className={`flight-btn ${flightOption === 'with' ? 'active' : ''}`}
            onClick={() => setFlightOption('with')}
          >
            With Flight
          </button>
          <button
            className={`flight-btn ${flightOption === 'without' ? 'active' : ''}`}
            onClick={() => setFlightOption('without')}
          >
            Without Flight
          </button>
        </div>
      </div>

      {/* Budget Section */}
      <div className="filter-section">
        <h3 className="section-title">Budget (per person)</h3>
        <div className="slider-container">
          <input
            type="range"
            min="10000"
            max="155000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="slider"
          />
          <div className="slider-labels">
            <span>₹10,000</span>
            <span>₹155,000</span>
          </div>
        </div>
        
        <div className="budget-checkboxes">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={budgetRanges.under10k}
              onChange={() => handleBudgetRangeChange('under10k')}
            />
            <span className="checkmark"></span>
            Under ₹10,000
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={budgetRanges.tenTo20k}
              onChange={() => handleBudgetRangeChange('tenTo20k')}
            />
            <span className="checkmark"></span>
            ₹10,000 to ₹20,000
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={budgetRanges.twentyTo50k}
              onChange={() => handleBudgetRangeChange('twentyTo50k')}
            />
            <span className="checkmark"></span>
            ₹20,000 to ₹50,000
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={budgetRanges.moreThan50k}
              onChange={() => handleBudgetRangeChange('moreThan50k')}
            />
            <span className="checkmark"></span>
            More than ₹50,000
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
