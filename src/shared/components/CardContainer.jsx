import { useNavigate } from 'react-router-dom';
import '../../css/components/_CardContainer.css';

function CardContainer({ cards = [] }) {
 const navigate = useNavigate();

 return (
  <ul className="BKTT-CardContainer row g-3">
   {cards.map((card, i) => (
    <li key={i} className="BKTT-CardContainer__item col">
     <div
      className="BKTT-CardContainer__card card h-100"
      style={{ cursor: card.link ? 'pointer' : 'default' }}
      onClick={() => card.link && navigate(card.link)}
     >
      <figure>
       {card.badgeText && (
        <span className={`BKTT-Badge badge ${card.badgeClass || 'badge-info'}`}>
         {card.badgeIcon && <span className={`BKTT-Icon ${card.badgeIcon} me-2`} />}
         <span>{card.badgeText}</span>
        </span>
       )}
       {card.image && (
        <img src={card.image} className="card-img-top" alt={card.title || ''} />
       )}
      </figure>
      <div>
       <div className="BKTT-Card__header">
        {card.headerBadge && (
         <span className={`BKTT-Badge badge ${card.headerBadge.class || 'badge-info'}`}>
          {card.headerBadge.icon && <span className={`BKTT-Icon ${card.headerBadge.icon} me-2`} />}
          <span className="BKTT-Label">{card.headerBadge.text}</span>
         </span>
        )}
        <h3 className="BKTT-Card__title">{card.title}</h3>
       </div>
       <div className="BKTT-Card__Body">
        <ul className="BKTT-Tags">
         {(card.tags || []).map((t, idx) => (
          <li key={idx}>
           {t.icon && <span className={`BKTT-Icon ${t.icon}`} />}
           <span className="BKTT-Label">{t.label || t}</span>
          </li>
         ))}
        </ul>
        <p>{card.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
        <div className="BKTT-progress__Container">
         <div className="BKTT-progress progress" style={{ height: card.progressHeight || '6px' }}>
          <div
           className={`progress-bar ${card.progressClass || 'bg-info'}`}
           role="progressbar"
           style={{ width: `${card.progress != null ? card.progress : 25}%` }}
           aria-valuenow={card.progress != null ? card.progress : 25}
           aria-valuemin={0}
           aria-valuemax={100}
          />
         </div>
         {card.progressLabel && <span className="BKTT-Label">{card.progressLabel}</span>}
        </div>
       </div>
       <div className="BKTT-Card__Footer">
        <button type="button" className="btn btn-primary">
         {card.footerIcon && <span className={`BKTT-Icon ${card.footerIcon} me-1`} />}
         <span className="BKTT-Label">{card.footerLabel || 'Primary'}</span>
        </button>
       </div>
      </div>
     </div>
    </li>
   ))}
  </ul>
 );
}

export default CardContainer;
