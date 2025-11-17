import './sec3.css'
import { useMemo, useState } from 'react'
import PlaceCard from './palcecard'

export default function Sec3() {
  const allCards = useMemo(
    () => [
      {
        name: 'Bali, Indonesia',
        place: '7 days of tropical paradise',
        description: '',
        price: '$1,299',
        imageSrc: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop',
      },
      {
        name: 'Swiss Alps',
        place: '5 days mountain adventure',
        description: '',
        price: '$1,599',
        imageSrc: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1200&auto=format&fit=crop',
      },
      {
        name: 'Santorini, Greece',
        place: '6 days Mediterranean escape',
        description: '',
        price: '$1,899',
        imageSrc: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'New Delhi',
        place: '4 days city highlights',
        description: '',
        price: '$899',
        imageSrc: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    []
  )

  const [showAll, setShowAll] = useState(false)
  const cardsToRender = showAll ? allCards : allCards.slice(0, 3)
  const shouldShowToggle = allCards.length > 3

  return (
    <section className="sec3">
      <div className="sec3-inner">
        <h2 className="sec3-title">Popular Destinations</h2>
        <div className="sec3-grid">
          {cardsToRender.map((card) => (
            <PlaceCard key={card.name} {...card} />
          ))}
        </div>

        {shouldShowToggle && (
          <div className="sec3-actions">
            <button
              className="sec3-showmore"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less Packages' : 'Show All Packages'}
              <span className="sec3-showmore-arrow" aria-hidden>
                {showAll ? '↑' : '→'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

