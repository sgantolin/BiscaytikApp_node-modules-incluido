import { Link } from 'react-router-dom';
import '../../css/components/_BKTTBlock.css';

const BlockImage = ({ section, imageFilter }) => {
  if (!section.image) return null;
  return (
    <div className={`BKTT-Block__imageWrapper ${section.imageClassName || ''}`}>
      <img src={section.image} alt={section.alt || ''} className="BKTT-Block__image" style={imageFilter ? { filter: imageFilter } : undefined} />
      {section.decorations?.map((d, i) => (
        <img
          key={i}
          src={d.image}
          alt={d.alt || ''}
          className={`BKTT-Block__decoration ${d.className || ''}`}
          style={{ top: d.top, right: d.right, bottom: d.bottom, left: d.left, width: d.width, height: d.height, ...(imageFilter ? { filter: imageFilter } : {}) }}
        />
      ))}
    </div>
  );
};

const BlockButton = ({ button }) => {
  if (!button?.label) return null;
  const inner = (
    <>
      {button.icon && <span className={`BKTT-Icon ${button.icon}`} />}
      <span>{button.label}</span>
      {button.endIcon && <span className={`BKTT-Icon ${button.endIcon}`} />}
    </>
  );
  if (button.href) {
    return <a href={button.href} className={`BKTT-Block__button ${button.className || ''}`}>{inner}</a>;
  }
  if (button.link) {
    return <Link to={button.link} className={`BKTT-Block__button ${button.className || ''}`}>{inner}</Link>;
  }
  return <button type="button" className={`BKTT-Block__button ${button.className || ''}`}>{inner}</button>;
};

const BlockText = ({ section }) => {
  const TitleTag = section.titleTag || 'h2';
  return (
    <div className={`BKTT-Block__content ${section.contentClassName || ''}`}>
      {section.eyebrow && <span className="BKTT-Block__eyebrow">{section.eyebrow}</span>}
      {section.subtitle && <p className="BKTT-Block__subtitle">{section.subtitle}</p>}
      {section.title && <TitleTag className="BKTT-Block__title">{section.title}</TitleTag>}
      {section.description && <p className="BKTT-Block__description">{section.description}</p>}
      {(section.button || section.extra) && (
        <div className="BKTT-Block__actions">
          <BlockButton button={section.button} />
          {section.extra && (
            <div className="BKTT-Block__extra">
              {section.extra.icon && <span className={`BKTT-Icon ${section.extra.icon}`} />}
              {section.extra.label && <span>{section.extra.label}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const BlockCards = ({ cards, imageFilter }) => (
  <div className="BKTT-Block__cards">
    {cards.map((card, i) => (
      <div key={i} className={`BKTT-BlockCard BKTT-BlockCard--${i + 1}`}>
        {card.image && <img src={card.image} alt={card.title || ''} style={imageFilter ? { filter: imageFilter } : undefined} />}
        {card.title && <span>{card.title}</span>}
      </div>
    ))}
  </div>
);

function BKTTBlock({
  layout = 'text-image',
  backgroundColor,
  backgroundImage,
  overlayColor,
  gap = '0',
  align = 'center',
  columns,
  className = '',
  sections = [],
  title,
  subtitle,
  description,
  eyebrow,
  button,
  image,
  alt,
  injectedCards,
  imageFilter,
}) {
  const resolvedSections = sections.length > 0 ? sections : (() => {
    const left = { title, subtitle, description, eyebrow, button };
    const right = injectedCards?.length > 0
      ? { _cards: injectedCards }
      : image
      ? { image, alt }
      : null;
    return right ? [left, right] : [left];
  })();

  const colCount = columns || resolvedSections.length || 1;

  // Construimos el estilo de fondo sin mezclar background shorthand con backgroundImage
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : backgroundColor
    ? { background: backgroundColor }
    : {};

  return (
    <div
      className={`BKTT-Block BKTT-Block--${layout} ${className}`}
      style={{
        '--BKTT-block-gap': gap,
        '--BKTT-block-align': align,
        '--BKTT-block-columns': colCount,
        ...(backgroundImage && backgroundColor ? { backgroundColor } : {}),
        ...bgStyle,
      }}
    >
      {backgroundImage && overlayColor && (
        <div className="BKTT-Block__overlay" style={{ backgroundColor: overlayColor }} />
      )}
      <div className="BKTT-Block__grid row">
        {resolvedSections.map((section, i) => {
          if (section._cards) {
            return (
              <div key={i} className="BKTT-Block__section col BKTT-Block__section--cards">
                <BlockCards cards={section._cards} imageFilter={imageFilter} />
              </div>
            );
          }

          const order = section.contentOrder || 'image-text';
          return (
            <div
              key={section.id || i}
              className={`BKTT-Block__section col ${section.className || ''}`}
              style={{ backgroundColor: section.backgroundColor, textAlign: section.textAlign }}
            >
              {order === 'text-image' ? (
                <><BlockText section={section} /><BlockImage section={section} imageFilter={imageFilter} /></>
              ) : (
                <><BlockImage section={section} imageFilter={imageFilter} /><BlockText section={section} /></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default BKTTBlock;
