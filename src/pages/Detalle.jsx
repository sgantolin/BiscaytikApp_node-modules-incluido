import { useEffect } from 'react';
import CardContainer from '../shared/components/CardContainer';
import CardGrid from '../shared/components/CardGrid';
import BKTTFigureGaleria from '../shared/components/BKTTFigureGaleria';
import BreadCrumbComponent from '../shared/components/Breadcrumb';
import '../css/components/_Detalle.css';

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
      } catch (e) {}
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

  return (
  <>
    {/* =====================================================
        PL-EVENTO--T
        Breadcrumb + imagen + título + compartir
        ===================================================== */}

    <section className="PL-Evento--T">
      <div className="container">
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

            <div className="BKTT-EventoDetalleHero">
              <img
                src={titleDatepicker2}
                alt="Plentzia SummerFest"
                className="BKTT-EventoDetalleHero__image"
              />
            </div>

            <div className="BKTT-EventoDetalle__header">
              <div className="BKTT-EventoDetalle__heading">
                <h1 className="BKTT-EventoDetalle__title">
                  Plentzia SummerFest
                </h1>

                {/*
                <p className="BKTT-EventoDetalle__subtitle">
                  Subtítulo opcional del evento
                </p>
                */}
              </div>

              <button
                className="BKTT-EventoDetalle__share"
                type="button"
                aria-label="Compartir evento"
              >
                <span
                  className="BKTT-Icon fa-light fa-arrow-up-from-bracket"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        WPZT-HTML
        Zona HTML opcional
        ===================================================== */}

    {/*
    <section className="WPZT-HTML">
      <div className="container">
        <div className="row">
          <div className="col-12">
            Contenido HTML superior opcional
          </div>
        </div>
      </div>
    </section>
    */}

    {/* =====================================================
        WPZT-DETCONT--DEFAULT
        Contenido 75/25 + recomendados
        ===================================================== */}

    <main className="WPZT-DetCont--Default BKTT-EventoDetalle">
      <div className="container">

        {/* CONTENIDO PRINCIPAL 75/25 */}

        <div className="row g-4">

          {/* COLUMNA IZQUIERDA 75 % */}

          <div className="BKTT-WebPartZone-H75--L col-lg-9">
            <nav
              className="BKTT-EventoDetalle__tabsWrapper"
              aria-label="Contenido del evento"
            >
              <ul className="BKTT-EventoDetalle__tabs">
                <li>
                  <a
                    href="#descripcion"
                    className="is-active"
                  >
                    Descripción
                  </a>
                </li>

                <li>
                  <a href="#localizacion">
                    Localización
                  </a>
                </li>

                <li>
                  <a href="#eventos-similares">
                    Eventos relacionados
                  </a>
                </li>
              </ul>
            </nav>

            <div className="BKTT-EventoDetalle__meta">
              <div>
                <span
                  className="BKTT-Icon fa-light fa-calendar"
                  aria-hidden="true"
                />

                <span>
                  22/06/2026 - 24/06/2026
                </span>
              </div>

              <div>
                <span
                  className="BKTT-Icon fa-light fa-clock"
                  aria-hidden="true"
                />

                <span>
                  10:00 - 20:00
                </span>
              </div>

              <div>
                <span
                  className="BKTT-Icon fa-light fa-location-dot"
                  aria-hidden="true"
                />

                <span>
                  Playa de Plentzia
                </span>
              </div>
            </div>

            <section
              id="descripcion"
              className="BKTT-EventoDetalle__section"
            >
              <h2>Descripción</h2>

              <h3>Acerca del evento</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque dictum luctus interdum. Nunc eget mauris eu urna
                varius varius. Duis ut leo euismod, aliquam purus eu,
                viverra tortor.
              </p>

              <BKTTFigureGaleria
                variant="masonry"
                images={galleryImages}
                showDots
                showThumbs
              />
            </section>

            <section
              id="localizacion"
              className="BKTT-EventoDetalle__section"
            >
              <h2>Localización</h2>

              <address className="BKTT-EventoDetalle__address">
                <strong>Plaza de la iglesia</strong>
                <br />
                C. Villa de Plentzia Kalea, 14
                <br />
                48980 Plentzia
              </address>

              <div
                id="map"
                className="BKTT-Map BKTT-EventoDetalle__map"
              />
            </section>
          </div>

          {/* COLUMNA DERECHA 25 % */}

          <aside className="BKTT-WebPartZone-H25--R col-lg-3">
            <div className="BKTT-EventoDetalleAside">
              <h2>Destacado</h2>

              <p>
                Este SummerFest pretende rendir homenaje a nuestros
                antepasados mostrando al público la evolución,
                sacrificio y trabajo de quienes durante siglos supieron
                hacer del caserío vasco una institución autosuficiente.
              </p>

              <div className="BKTT-EventoDetalleAside__price">
                <span>por persona</span>
                <strong>15€</strong>
              </div>

              <a
                href="/reservar-entradas"
                className="BKTT-EventoDetalleAside__button"
              >
                <span
                  className="BKTT-Icon fa-light fa-link"
                  aria-hidden="true"
                />

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
              <h2>Eventos similares</h2>

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
      <div className="container">
        <CardGrid
          cards={interesCards}
          bgColor="#145A92"
          title="Podría interesarte"
          headerBgColor="#ffffff"
          titleColor="#2196F3"
        />
      </div>
    </section>
  </>
);
}

export default EventoDetalle;
