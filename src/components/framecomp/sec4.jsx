import './sec4.css'
import ReviewCard from './ReviewCard'

export default function Sec4() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      package: 'Bali Package',
      quote: 'Amazing experience! Tringl made it so easy to find and book the perfect vacation package. The process was smooth and the trip exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      package: 'Greece Package',
      quote: 'Best prices and amazing customer service! The comparison feature helped us save a lot of money while still getting a premium experience.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      package: 'Maldives Package',
      quote: 'The curated experiences were fantastic! Every detail was perfect, and we got to enjoy unique activities that we wouldn\'t have found otherwise.',
      rating: 5
    }
  ]

  return (
    <section className="sec4">
      <div className="sec4-inner">
        <h2 className="sec4-title">What Our Travelers Say</h2>
        <div className="sec4-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
