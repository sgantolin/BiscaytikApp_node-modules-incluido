import { Link } from 'react-router-dom';
import '../../css/components/_BKTT-Banner.css';

const BannerText = ({ banner }) => (
  <div className="BKTT-Banner__text px-5 py-5">
    {banner.subtitle && <p className="BKTT-Banner__subtitle">{banner.subtitle}</p>}
    {banner.title && <h2 className="BKTT-Banner__title">{banner.title}</h2>}
    {banner.description && <p className="BKTT-Banner__description">{banner.description}</p>}
    {banner.button && (
      <Link to={banner.button.link} className="btn btn-primary btn-sm mt-3">
        {banner.button.icon && <i className={`${banner.button.icon} me-2`} />}
        {banner.button.label}
        <i className="fa-regular fa-arrow-right ms-2" />
      </Link>
    )}
  </div>
);

const BannerCards = ({ cards }) => (
  <div className="BKTT-Banner__cards position-relative">
    {cards.map((card, index) => (
      <div key={index} className={`BKTT-BannerCard BKTT-BannerCard--${index + 1}`}>
        {card.image && <img src={card.image} alt={card.title || ''} />}
        {card.title && <span>{card.title}</span>}
      </div>
    ))}
  </div>
);

const BannerImage = ({ image, alt }) => (
  <div className="BKTT-Banner__image">
    <img src={image} alt={alt || ''} />
  </div>
);

const Banner = ({ banner }) => {
  const overlay = banner.backgroundImage
    ? (banner.overlayColor || 'rgba(0,0,0,0.35)')
    : null;

  const bannerStyle = banner.backgroundImage
    ? {
        backgroundImage: overlay
          ? `linear-gradient(${overlay}, ${overlay}), url(${banner.backgroundImage})`
          : `url(${banner.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...(banner.backgroundColor && { backgroundColor: banner.backgroundColor }),
      }
    : banner.backgroundColor
    ? { background: banner.backgroundColor }
    : {};

  const layout = banner.layout || 'text-cards';

  return (
    <section className={`BKTT-Banner BKTT-Banner--${layout}`} style={{ position: 'relative', ...bannerStyle }}>
      <div className="container-fluid h-100" style={{ position: 'relative', zIndex: 1 }}>
        <div className={`row h-100 ${layout === 'image-text' ? 'flex-row-reverse' : ''} ${(layout === 'text-image' || layout === 'image-text') ? 'align-items-stretch' : 'align-items-center'}`}>
          {layout === 'text-cards' && (
            <>
              <div className="col-lg-6 col-md-7">
                <BannerText banner={banner} />
              </div>
              <div className="col-lg-6 col-md-5">
                {banner.injectedCards?.length > 0 && <BannerCards cards={banner.injectedCards} />}
              </div>
            </>
          )}
          {(layout === 'text-image' || layout === 'image-text') && (
            <>
              <div className="col-lg-6 col-md-7 d-flex align-items-center">
                <BannerText banner={banner} />
              </div>
              <div className="col-lg-6 col-md-5 p-0 position-relative">
                {banner.image && <BannerImage image={banner.image} alt={banner.title} />}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
