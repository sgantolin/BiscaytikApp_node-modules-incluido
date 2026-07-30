import '../../css/components/_BKTTFeatureBanner.css';

function BKTTFeatureBanner({
  sections = [],
  layout = 'split',
  backgroundColor = '#f8f5ef',
  gap = '2rem',
  align = 'center',
  className = '',
}) {
  const renderButton = (button) => {
    if (!button?.label) return null;

    const ButtonTag = button.href ? 'a' : 'button';

    return (
      <ButtonTag
        href={button.href}
        type={button.href ? undefined : 'button'}
        className={`BKTT-FeatureBanner__button ${button.className || ''}`}
        onClick={button.onClick}
      >
        {button.icon && (
          <span className={`BKTT-Icon ${button.icon}`} />
        )}

        <span>{button.label}</span>

        {button.endIcon && (
          <span className={`BKTT-Icon ${button.endIcon}`} />
        )}
      </ButtonTag>
    );
  };

  const renderImage = (section) => {
    if (!section.image) return null;

    return (
      <div
        className={`BKTT-FeatureBanner__imageWrapper ${
          section.imageClassName || ''
        }`}
      >
        <img
          src={section.image}
          alt={section.alt || ''}
          className="BKTT-FeatureBanner__image"
        />

        {section.decorations?.map((decoration, index) => (
          <img
            key={index}
            src={decoration.image}
            alt={decoration.alt || ''}
            className={`BKTT-FeatureBanner__decoration ${
              decoration.className || ''
            }`}
            style={{
              top: decoration.top,
              right: decoration.right,
              bottom: decoration.bottom,
              left: decoration.left,
              width: decoration.width,
              height: decoration.height,
            }}
          />
        ))}
      </div>
    );
  };

  const renderText = (section) => {
    const hasContent =
      section.eyebrow ||
      section.title ||
      section.description ||
      section.button ||
      section.extra;

    if (!hasContent) return null;

    const TitleTag = section.titleTag || 'h2';

    return (
      <div
        className={`BKTT-FeatureBanner__content ${
          section.contentClassName || ''
        }`}
      >
        {section.eyebrow && (
          <span className="BKTT-FeatureBanner__eyebrow">
            {section.eyebrow}
          </span>
        )}

        {section.title && (
          <TitleTag className="BKTT-FeatureBanner__title">
            {section.title}
          </TitleTag>
        )}

        {section.description && (
          <p className="BKTT-FeatureBanner__description">
            {section.description}
          </p>
        )}

        {(section.button || section.extra) && (
          <div className="BKTT-FeatureBanner__actions">
            {renderButton(section.button)}

            {section.extra && (
              <div className="BKTT-FeatureBanner__extra">
                {section.extra.icon && (
                  <span
                    className={`BKTT-Icon ${section.extra.icon}`}
                  />
                )}

                {section.extra.label && (
                  <span>{section.extra.label}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderSection = (section, index) => {
    const contentOrder = section.contentOrder || 'image-text';

    return (
      <article
        key={section.id || index}
        className={`BKTT-FeatureBanner__section ${
          section.className || ''
        }`}
        style={{
          backgroundColor: section.backgroundColor,
          textAlign: section.textAlign,
        }}
      >
        {contentOrder === 'text-image' ? (
          <>
            {renderText(section)}
            {renderImage(section)}
          </>
        ) : (
          <>
            {renderImage(section)}
            {renderText(section)}
          </>
        )}
      </article>
    );
  };

  return (
    <section
      className={`BKTT-FeatureBanner BKTT-FeatureBanner--${layout} ${className}`}
      style={{
        '--BKTT-feature-banner-bg': backgroundColor,
        '--BKTT-feature-banner-gap': gap,
        '--BKTT-feature-banner-align': align,
      }}
    >
      <div className="BKTT-FeatureBanner__grid">
        {sections.map(renderSection)}
      </div>
    </section>
  );
}

export default BKTTFeatureBanner;