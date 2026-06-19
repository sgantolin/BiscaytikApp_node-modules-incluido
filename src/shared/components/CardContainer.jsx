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
     >
      <figure class="BKTT-Card__figure">
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
      <div class="BKTT-Card__main">
       <div className="BKTT-Card__header">
        {card.headerBadge && (
         <span className={`BKTT-Badge badge ${card.headerBadge.class || 'badge-info'}`}>
          {card.headerBadge.icon && <span className={`BKTT-Icon ${card.headerBadge.icon} me-2`} />}
          <span className="BKTT-Label">{card.headerBadge.text}</span>
         </span>
        )}
        <h3 className="BKTT-Card__title"><a class="BKTT-Link" href="">{card.title}</a></h3>
       </div>
       <div className="BKTT-Card__Body">
        <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
         <div class="BKTT-Date">
          <span class="BKTT-Icon fa-light fa-calendar me-2"></span>
          <time datetime="20265-01-12">12/01/2026</time>
         </div>
         <div class="BKTT-Data">
          <data value="49.99">49.99
           <span class="BKTT-Icon fa-regular fa-euro-sign ms-1"></span>
          </data>
         </div>
        </div>

        <ul className="BKTT-Tags mb-2">
         <li>
          <span className="BKTT-Icon fa-light fa-champagne-glass me-2"></span>
          <span className="BKTT-Label">Gastronomía</span>
         </li>
         <li>
          <span className="BKTT-Icon fa-sharp fa-light fa-people-pants me-2"></span>
          <span className="BKTT-Label">Parejas</span>
         </li>
         {(card.tags || []).map((t, idx) => (
          <li key={idx}>
           {t.icon && <span className={`BKTT-Icon ${t.icon}`} />}
           <span className="BKTT-Label">{t.label || t}</span>
          </li>
         ))}
        </ul>
        <p>{card.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
        <div className="BKTT-progress__Container mb-3">
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
       <div className="BKTT-Card__Footer d-flex justify-content-end">
        <button type="button" className="BKTT-Button btn btn-primary">
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
