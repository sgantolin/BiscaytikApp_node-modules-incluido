import { useState } from 'react';
import '../../css/components/_BKTTFigureGaleria.css';

function BKTTFigureGaleria({
  images = [],
  variant = 'featured',
  showDots = true,
  showThumbs = true,
  columns = 3,
  gap = '0.5rem',
  className = '',
  imageFilter,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const activeImage = images[activeIndex] || images[0];

  if (variant === 'masonry') {
    return (
      <div
        className={`BKTT-Gallery BKTT-Gallery--masonry ${className}`}
        style={{
          '--BKTT-gallery-columns': columns,
          '--BKTT-gallery-gap': gap,
        }}
      >
        {images.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`BKTT-Gallery__masonryItem BKTT-Gallery__masonryItem--${index + 1}`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.image}
              alt={item.alt || ''}
              className="BKTT-Gallery__masonryImage"
              style={imageFilter ? { filter: imageFilter } : undefined}
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`BKTT-Gallery BKTT-Gallery--featured ${className}`}>
      <div className="BKTT-Gallery__main">
        <img
          src={activeImage.image}
          alt={activeImage.alt || ''}
          className="BKTT-Gallery__mainImage"
          style={imageFilter ? { filter: imageFilter } : undefined}
        />

        {showDots && images.length > 1 && (
          <div className="BKTT-Gallery__dots">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`BKTT-Gallery__dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        )}

        {showThumbs && images.length > 1 && (
          <div className="BKTT-Gallery__thumbs">
            {images.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`BKTT-Gallery__thumb ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.alt || ''}
                  className="BKTT-Gallery__thumbImage"
                  style={imageFilter ? { filter: imageFilter } : undefined}
                />
              </button>
            ))}
          </div>
        )}

        <div className="BKTT-Gallery__controls">
          <div className="BKTT-Gallery__controlInfo">
            <span className="BKTT-Icon fa-light fa-circle-info" />
          </div>

          <button
            type="button"
            className="BKTT-Gallery__control"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + images.length) % images.length)
            }
            aria-label="Anterior"
          >
            <span className="BKTT-Icon fa-light fa-angle-left" />
          </button>

          <button
            type="button"
            className="BKTT-Gallery__control"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
            aria-label="Siguiente"
          >
            <span className="BKTT-Icon fa-light fa-angle-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BKTTFigureGaleria;
