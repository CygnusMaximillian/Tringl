import './placecaed.css'

export default function PlaceCard({
  name,
  price,
  place,
  description,
  imageSrc,
  imageAlt,
  children,
}) {
  return (
    <div className="pc-card" role="article">
      <div className="pc-image" aria-label="image area">
        {imageSrc ? (
          <img className="pc-img" src={imageSrc} alt={imageAlt || name || 'destination'} />
        ) : (
          <div className="pc-image-placeholder" />
        )}
      </div>

      <div className="pc-body">
        <div className="pc-title-row">
          <h3 className="pc-name">{name}</h3>
          <div className="pc-star-slot" aria-label="star vector slot">
            {children}
          </div>
        </div>

        <p className="pc-place">{place}</p>
        <p className="pc-desc">{description}</p>

        <div className="pc-footer">
          <span className="pc-price">{price}</span>
        </div>
      </div>
    </div>
  )
}


