import { useNavigate } from 'react-router-dom';
import '../../css/components/_CardGrid.css';

function CardGrid({ cards }) {
  const navigate = useNavigate();

  return (
    <div className="BKTT-CardGrid row g-3">
      {cards.map((card, i) => (
        <div key={i} className="BKTT-CardGrid__item col">
          <div
            className="BKTT-CardGrid__card card h-100"
            style={{ cursor: card.link ? 'pointer' : 'default' }}
            onClick={() => card.link && navigate(card.link)}
          >
            {card.image && (
              <img src={card.image} className="card-img-top" alt={card.title || ''} />
            )}
            <div className="BKTT-CardGrid__header">
              <h5 className="BKTT-CardGrid__title">{card.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
