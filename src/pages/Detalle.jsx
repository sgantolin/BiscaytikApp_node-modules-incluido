import { useEffect } from 'react';
import CardContainer from '../shared/components/CardContainer';
import CardGrid from '../shared/components/CardGrid';
import BKTTFigureGaleria from '../shared/components/BKTTFigureGaleria';
import BreadCrumbComponent from '../shared/components/Breadcrumb';
/*import '../css/components/_Detalle.css';*/

import barca from '../assets/themes/default/media/barca.jpg';
import canoa from '../assets/themes/default/media/canoa.jpg';
import iglesia from '../assets/themes/default/media/iglesia.jpg';
import puente from '../assets/themes/default/media/puente.jpg';
import summerFest from '../assets/themes/default/media/summerFest.jpg';
import teatro from '../assets/themes/default/media/teatro.jpg';
import paseoCasco from '../assets/themes/default/media/paseoCasco.jpg';
import rio from '../assets/themes/default/media/rio.jpg';
import hotel1 from '../assets/themes/default/media/hotel1.jpg';
import hotel2 from '../assets/themes/default/media/hotel2.jpg';
import hotel3 from '../assets/themes/default/media/hotel3.jpg';
import playa from '../assets/themes/default/media/playa.png';
import titleDatepicker2 from '../assets/themes/default/title & datepicker (1).png';

function EventoDetalle() {
 useEffect(() => {
  let mapInstance = null;

  const t = setTimeout(() => {
   try {
    const el = document.getElementById('map');
    if (el && window.initLeafletMap) {
     mapInstance = window.initLeafletMap('map');
    }
   } catch (e) {
    console.warn('initLeafletMap failed', e);
   }
  }, 0);

  return () => {
   clearTimeout(t);
   try {
    if (mapInstance && mapInstance.remove) mapInstance.remove();
   } catch (e) { }
  };
 }, []);

 const galleryImages = [
  { image: summerFest, alt: 'Plentzia SummerFest' },
  { image: iglesia, alt: 'Iglesia' },
  { image: paseoCasco, alt: 'Casco antiguo' },
  { image: puente, alt: 'Puente' },
  { image: paseoCasco, alt: 'Casco antiguo' },
  { image: puente, alt: 'Puente' },
 ];

 const eventosSimilares = [
  {
   image: puente,
   title: 'Plan cultural de un día',
   date: '22/01/2026 - 24/01/2026',
   tags: [{ label: 'Plaza de la iglesia', icon: 'fa-light fa-location-dot' }],
   link: '/plan-cultural-un-dia',
  },
  {
   image: rio,
   title: 'Plan cultural de un día',
   date: '22/01/2026 - 24/01/2026',
   tags: [{ label: 'Gastronomía', icon: 'fa-light fa-location-dot' }],
   link: '/plan-cultural-un-dia',
  },
  {
   image: hotel3,
   title: 'Plan cultural de un día',
   date: '12/01/2026',
   tags: [{ label: 'Gastronomía', icon: 'fa-light fa-location-dot' }],
   link: '/plan-cultural-un-dia',
  },
  {
   image: iglesia,
   title: 'Plan cultural de un día',
   date: '12/01/2026',
   tags: [{ label: 'Gastronomía', icon: 'fa-light fa-location-dot' }],
   link: '/plan-cultural-un-dia',
  },
 ];

 const interesCards = [
  {
   image: teatro,
   title: 'Pub Leku Ona',
   link: '/pub-leku-ona',
  },
  {
   image: hotel1,
   title: 'Hotel Boutique Bahía de Plentzia',
   link: '/hotel-boutique-bahia-plentzia',
  },
  {
   image: canoa,
   title: 'Comercio X',
   link: '/comercio-x',
  },
 ];

 const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Plentzia SummerFest',
  description: 'Evento cultural y de ocio en Plentzia con música, gastronomía y actividades para toda la familia.',
  image: [titleDatepicker2],
  startDate: '2026-06-22T10:00:00',
  endDate: '2026-06-24T20:00:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
   '@type': 'Place',
   name: 'Playa de Plentzia',
   address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. Villa de Plentzia Kalea, 14',
    addressLocality: 'Plentzia',
    postalCode: '48980',
    addressRegion: 'Bizkaia',
    addressCountry: 'ES',
   },
  },
  offers: {
   '@type': 'Offer',
   price: '15',
   priceCurrency: 'EUR',
   availability: 'https://schema.org/InStock',
   url: 'https://example.com/reservar-entradas',
  },
  organizer: {
   '@type': 'Organization',
   name: 'Ayuntamiento de Plentzia',
  },
  keywords: ['música', 'mar', 'cultura', 'plentzia'],
  url: 'https://example.com/detalle',
 };

 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
   />
   {/* =====================================================
        PL-EVENTO--T
        Breadcrumb + imagen + título + compartir
        ===================================================== */}

   <div className="PL-Evento--T" itemscope itemtype="https://schema.org/Event">
    <div className="row">
     <div className="BKTT-WebPartZone-fullWidth--TopContainer col-12">
      <BreadCrumbComponent
       items={[
        {
         label: 'Agenda',
         url: '/listado',
        },
        {
         label: 'Plentzia SummerFest',
         url: '/detalle',
        },
       ]}
      />
      <figure className="BKTT-FigureImg" itemprop="image">
       <img
        src={titleDatepicker2}
        alt="Plentzia SummerFest"
        className="BKTT-EventoDetalleHero__image"
       />
      </figure>

      <div className="BKTT-EventoDetalle__header container mt-5">
       <div className="BKTT-EventoDetalle__heading">
        <h1 className="BKTT-EventoDetalle__title" itemprop="name">Plentzia SummerFest</h1>
       </div>
       <button className="BKTT-EventoDetalle__share" type="button" aria-label="Compartir evento" >
        <span className="BKTT-Icon fa-light fa-arrow-up-from-bracket" aria-hidden="true" />
       </button>
      </div>
     </div>
    </div>
   </div>

   <main className="WPZT-DetCont--Default BKTT-EventoDetalle">
    <div className="container">

     {/* CONTENIDO PRINCIPAL 75/25 */}

     <div className="row g-4">

      {/* COLUMNA IZQUIERDA 75 % */}

      <div className="BKTT-WebPartZone-H75--L col-lg-9">
       <nav className="BKTT-EventoDetalle__tabsWrapper"
        aria-label="Contenido del evento"
       >
        <ul className="BKTT-EventoDetalle__tabs">
         <li>
          <a href="#descripcion" className="is-active">Descripción</a>
         </li>
         <li>
          <a href="#localizacion">Localización</a>
         </li>
         <li>
          <a href="#eventos-similares">Eventos relacionados</a>
         </li>
        </ul>
       </nav>
       <dl className="BKTT-EventoDetalle__meta" aria-label="Información del evento">
        <div className="BKTT-EventoDetalle__metaItem">
         <dt className="sr-only">Fechas</dt>
         <dd>
          <span className="BKTT-Icon fa-light fa-calendar" aria-hidden="true" />
          <time dateTime="2026-06-22T00:00">22/06/2026</time>
          <span className="mx-1">-</span>
          <time dateTime="2026-06-24T23:59:59">24/06/2026</time>
         </dd>
        </div>
        <div className="BKTT-EventoDetalle__metaItem">
         <dt className="sr-only">Horario</dt>
         <dd>
          <span className="BKTT-Icon fa-light fa-clock" aria-hidden="true" />
          <span>10:00 - 20:00</span>
         </dd>
        </div>
        <div className="BKTT-EventoDetalle__metaItem">
         <dt className="sr-only">Ubicación</dt>
         <dd>
          <span className="BKTT-Icon fa-light fa-location-dot" aria-hidden="true" />
          <span>Playa de Plentzia</span>
          <meta itemProp="address" content="Playa Plentzia, Plentzia, Vizcaya" />
         </dd>
        </div>
       </dl>
        <ul className="BKTT-Tags">
         <li><span className="BKTT-Badge badge bg-light text-dark"><span className="BKTT-Icon fa-solid fa-music me-2"></span><span>Música</span></span></li>
         <li><span className="BKTT-Badge badge bg-light text-dark"><span className="BKTT-Icon fa-solid fa-water me-2"></span><span>Mar</span></span></li>
        </ul>
       <section className="BKTT-EventoDetalle__section" itemprop="description" >
        <h2>Descripción</h2>
        <h3>Acerca del evento</h3>
        <p itemprop="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Quisque dictum luctus interdum. Nunc eget mauris eu urna
         varius varius. Duis ut leo euismod, aliquam purus eu,
         viverra tortor.</p>
        <BKTTFigureGaleria
         variant="featured"
         images={galleryImages}
         showDots
         showThumbs
        />
       </section>
       <section id="localizacion" className="BKTT-EventoDetalle__section" itemprop="location" itemscope itemtype="https://schema.org/Place">
        <h2>Localización</h2>
        <address className="BKTT-EventoDetalle__address">
         <strong>Plaza de la iglesia</strong>
         <br />
         C. Villa de Plentzia Kalea, 14
         <br />
         48980 Plentzia
        </address>
        <meta itemprop="address" content="Playa Plentzia, Plentzia, Vizcaya"/>
        <div id="map" className="BKTT-Map BKTT-EventoDetalle__map" itemprop="hasMap"  itemtype="https://schema.org/Map" />
       </section>
      </div>

      {/* COLUMNA DERECHA 25 % */}

      <aside className="BKTT-WebPartZone-H25--R col-lg-3">
       <div className="BKTT-EventoDetalleAside" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
        <h2>Destacado</h2>
        <p>Este SummerFest pretende rendir homenaje a nuestros antepasados mostrando al público la evolución, sacrificio y trabajo de quienes durante siglos supieron hacer del caserío vasco una institución autosuficiente.</p>
        <div className="BKTT-EventoDetalleAside__price">
         <span>por persona</span>
         <meta itemprop="price" content="15"/>
         <meta itemprop="priceCurrency" content="EUR" />
         <strong>15€</strong>
        </div>
        <a href="/reservar-entradas" className="BKTT-Button" >
        <link itemprop="availability" href="https://schema.org/InStock"/>
         <span className="BKTT-Icon fa-light fa-link" aria-hidden="true" />
         <span>Reserva entradas</span>
        </a>
       </div>
      </aside>
     </div>

     {/* RECOMENDADOS DENTRO DE WPZT-DETCONT */}

     <div className="row">
      <div
       id="eventos-similares"
       className="BKTT-WebPartZone-fullWidth--MiddleContainer col-12"
      >
       <section className="BKTT-EventoDetalle__similar">
        <h3>Eventos similares</h3>
        <CardContainer
         cards={eventosSimilares}
        />
       </section>
      </div>
     </div>
    </div>
   </main>

   {/* =====================================================
        WPZB-HTML--FOOTER
        Bloque antes del footer
        ===================================================== */}

   <section className="WPZB-HTML--FOOTER BKTT-EventoDetalleInterest">
    <div className="">
     <CardGrid
      cards={interesCards}
      bgColor="var(--secondary-color)"
      title="Podría interesarte"
      headerBgColor="var(--custom-white)"
      titleColor="var(--primary-color)"
     />
    </div>
   </section>
  </>
 );
}

export default EventoDetalle;
