import '../../css/components/_CardContainer.css';

function CardContainer({ cards = [], direction = 'row', layout = 'vertical', cardWidth, cardHeight }) {
 return (
  <ul 
   className={`BKTT-CardContainer ${direction === 'column' ? 'BKTT-CardContainer--column' : ''}`}

  >
   {cards.map((card, i) => (
    <li key={i} className={`BKTT-CardContainer__item col ${direction === 'column' ? 'col-12' : ''}`}>
     <div className={`BKTT-CardContainer__card card ${layout === 'horizontal' ? 'BKTT-CardContainer__card--horizontal' : ''} ${!card.image ? 'BKTT-CardContainer__card--no-image' : ''}`}>

      {(card.image || card.badgeText) && (
       <figure className="BKTT-Card__figure">
        {card.badgeText && (
         <span className={`BKTT-Badge ${card.badgeClass || 'badge bg-light text-dark'}`}>
          {card.badgeIcon && <span className={`BKTT-Icon ${card.badgeIcon} me-2`} />}
          <span>{card.badgeText}</span>
         </span>
        )}
        {card.image && (
         <img src={card.image} className="card-img-top" alt={card.title || ''} />
        )}
       </figure>
      )}
      <div className="BKTT-Card__main">
       <data value={card.note}>
        <small className="BKTT-Card__note">{card.note}</small>
       </data>
       <h3 className="BKTT-Card__title">
        {card.link
         ? <a className="BKTT-Link" href={card.link}>{card.title}</a>
         : card.title
        }
       </h3>
       <div className="BKTT-Card__Body">
        {(card.date || card.price) && (
         <div className="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
          {card.date && (
           <div className="BKTT-Date">
            <span className="BKTT-Icon fa-light fa-calendar me-2"></span>
            <span>{card.date}</span>
           </div>
          )}
          {card.price && (
           <div className="BKTT-Data">
            <data value={card.price}>
             <strong>{card.price}</strong>
             <span className="BKTT-Icon fa-regular"></span>
            </data>
           </div>
          )}
         </div>
        )}
        {(card.tags?.length > 0 || card.progress != null) && (
         <div className="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
          {card.tags && card.tags.length > 0 && (
           <ul className="BKTT-Tags">
            {card.tags.map((t, idx) => (
             <li key={idx}>
              {t.icon && <span className={`BKTT-Icon ${t.icon} me-2`} />}
              <span className="BKTT-Label">{t.label || t}</span>
             </li>
            ))}
           </ul>
          )}
          {card.progress != null && (
           <div className="BKTT-progress__Container flex-grow-1">
            <div className="BKTT-progress progress" style={{ height: card.progressHeight || '6px' }}>
             <div
              className={`progress-bar ${card.progressClass || 'bg-info'}`}
              role="progressbar"
              style={{ width: `${card.progress}%` }}
              aria-valuenow={card.progress}
              aria-valuemin={0}
              aria-valuemax={100}
             />
            </div>
            {card.progressLabel && <small className="BKTT-Label">{card.progressLabel}</small>}
           </div>
          )}
         </div>
        )}
        
        {card.description && <p>{card.description}</p>}
       </div>
       {card.footerLabel && (
        <div className="BKTT-Card__Footer d-flex justify-content-end">
         <button type="button" className="BKTT-Button btn btn-primary">
          {card.footerIcon && <span className={`BKTT-Icon ${card.footerIcon} me-1`} />}
          <span className="BKTT-Label">{card.footerLabel}</span>
         </button>
        </div>
       )}
      </div>
     </div>
    </li>
   ))}
  </ul>
 );
}

export default CardContainer;
