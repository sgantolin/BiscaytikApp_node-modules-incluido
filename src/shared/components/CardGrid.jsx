import { useNavigate } from 'react-router-dom';
import '../../css/components/_CardGrid.css';

function CardGrid({ cards, bgColor, title, headerBgColor = 'var(--primary-color)', titleColor, columns, imageFilter }) {
  const navigate = useNavigate();

  return (
    <div className="BKTT-CardGrid" style={bgColor ? { backgroundColor: bgColor } : undefined}>
      {title && <h2 className="BKTT-CardGrid__sectionTitle BKTT-TitleBar">{title}</h2>}
      <div className="row g-3">
        {cards.map((card, i) => (
          <div key={i} className="BKTT-CardGrid__item">
            <a
              className="BKTT-CardGrid__card card h-100"
              style={{ cursor: card.link ? 'pointer' : 'default' }}
              onClick={() => card.link && navigate(card.link)}
            >
              {card.image && (
                <img src={card.image} className="card-img-top" alt={card.title || ''} style={imageFilter ? { filter: imageFilter } : undefined} />
              )}
              <div className="BKTT-CardGrid__header" style={{ backgroundColor: headerBgColor }}>
                <h5 className="BKTT-CardGrid__title" style={titleColor ? { color: titleColor } : undefined}>{card.title}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
