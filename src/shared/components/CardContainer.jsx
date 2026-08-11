import { useRef, useLayoutEffect, useState } from 'react';
import '../../css/components/_BKTTCard.css';

function CardContainer({ cards = [], direction = 'row', layout = 'vertical', cardWidth, cardHeight, cardSize, scroll, columns, visibleCards, imageFilter, imagePosition }) {
  const itemStyle = columns && direction !== 'column'
    ? { flex: `0 0 calc(${100 / columns}% - 1rem)`, maxWidth: `calc(${100 / columns}% - 1rem)` }
    : undefined;

  const listRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(null);

  useLayoutEffect(() => {
    if (!visibleCards || !listRef.current) return;
    const items = listRef.current.querySelectorAll(':scope > .BKTT-CardContainer__item');
    if (items.length < visibleCards) return;
    let totalHeight = 0;
    for (let i = 0; i < visibleCards; i++) {
      totalHeight += items[i].getBoundingClientRect().height;
    }
    const gap = parseFloat(getComputedStyle(listRef.current).gap) || 16;
    setScrollHeight(totalHeight + gap * (visibleCards - 1));
  }, [visibleCards, cards]);

  const normalizeDateValue = (value) => {
    if (!value) return null;
    const trimmedValue = value.trim();
    const [day, month, year] = trimmedValue.split('/').map((part) => part.trim());
    if (!day || !month || !year) return null;
    const normalizedDay = String(day).padStart(2, '0');
    const normalizedMonth = String(month).padStart(2, '0');
    return `${year}-${normalizedMonth}-${normalizedDay}`;
  };

  const normalizePrice = (value) => {
    if (value == null || value === '') return null;
    if (typeof value === 'number') return value;
    const normalizedValue = String(value).trim();
    if (/gratuito|free|freetour/i.test(normalizedValue)) return 0;
    const parsedValue = Number(normalizedValue.replace(/[^\\d.,]/g, '').replace(',', '.'));
    return Number.isNaN(parsedValue) ? null : parsedValue;
  };

  return (
    <ul
      ref={listRef}
      className={`BKTT-CardContainer 
      ${direction === 'column' ? 'BKTT-CardContainer--column' : ''} 
      ${cardSize === 'small' ? 'BKTT-CardContainer--small' : ''}
      ${scroll ? 'BKTT-CardContainer--scroll' : ''}`}
      style={scrollHeight ? { maxHeight: `${scrollHeight}px`, overflowY: 'auto' } : undefined}>
        
   {cards.map((card, i) => {
    const dateParts = card.date ? card.date.split(' - ') : [];
    const startDate = dateParts[0] ? normalizeDateValue(dateParts[0]) : null;
    const endDate = dateParts[1] ? normalizeDateValue(dateParts[1]) : null;
    const priceValue = normalizePrice(card.price);

    return (
    <li key={i} className={`BKTT-CardContainer__item col ${direction === 'column' ? 'col-12' : ''}`} style={itemStyle} itemScope itemType="https://schema.org/Event">
  <div
    className={`BKTT-CardContainer__card card 
    ${layout === 'horizontal' ? 'BKTT-CardContainer__card--horizontal' : ''} 
    ${!card.image ? 'BKTT-CardContainer__card--no-image' : ''}
    ${direction === 'column' && i % 2 !== 0 ? 'BKTT-CardContainer__card--alt' : ''}`}
    style={layout === 'horizontal' && imagePosition === 'right' ? { flexDirection: 'row-reverse' } : undefined}>
      {(card.image || card.badgeText) && (
       <figure className="BKTT-Card__figure" itemProp="image">
        {card.badgeText && (
         <span className={`BKTT-Badge ${card.badgeClass || 'badge bg-light text-dark'}`}>
          {card.badgeIcon && <span className={`BKTT-Icon ${card.badgeIcon} me-2`} />}
          <span>{card.badgeText}</span>
         </span>
        )}
        {card.image && (
         <img src={card.image} className="card-img-top" alt={card.title || ''} style={imageFilter ? { filter: imageFilter } : undefined} itemProp="image" />
        )}
       </figure>
      )}
      <div className="BKTT-Card__main">
       <data value={card.note}>
        <small className="BKTT-Card__note">{card.note}</small>
       </data>
       <h3 className="BKTT-Card__title">
        {card.link
         ? <a className="BKTT-Link" href={card.link} itemProp="url"><span className='BKTT-Label' itemProp="name">{card.title}</span></a>
         : <span itemProp="name">{card.title}</span>
        }
       </h3>
       <div className="BKTT-Card__Body">
        {(card.date || card.price) && (
         <div className="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
          {card.date && (
           <div className="BKTT-Date">
            <span className="BKTT-Icon fa-light fa-calendar me-2"></span>
            {startDate ? (
             <>
              <time dateTime={startDate} itemProp="startDate">{dateParts[0]}</time>
              {endDate && (
               <>
                <span> - </span>
                <time dateTime={endDate} itemProp="endDate">{dateParts[1]}</time>
               </>
              )}
             </>
            ) : (
             <span>{card.date}</span>
            )}
           </div>
          )}
          {card.price && (
           <div className="BKTT-Data" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="EUR" />
            {priceValue != null && <meta itemProp="price" content={priceValue} />}
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <strong itemProp="price">{card.price}</strong>
            <span className="BKTT-Icon fa-regular"></span>
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
        
        {card.description && <p itemProp="description">{card.description}</p>}
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
    );
   })}
  </ul>
 );
}

export default CardContainer;
