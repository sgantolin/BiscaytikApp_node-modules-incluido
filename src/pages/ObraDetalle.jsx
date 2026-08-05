import { useEffect } from 'react';

import BKTTBreadcrumb from '../shared/components/Breadcrumb';
import BKTTFigureGaleria from '../shared/components/BKTTFigureGaleria';
import CardContainer from '../shared/components/CardContainer';
import CardGrid from '../shared/components/CardGrid';

import obraEscalerasMuro
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escaleras-muro.png';

import obraEscaleraInterior
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escalera-interior.png';

import obraSalaVerde
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-sala-verde.png';

import obraSalaExposicion
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-sala-exposicion.png';

import obraTejidoMetalico
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-tejido-metalico.png';

import obraEsculturaTejida
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escultura-tejida.png';

import patrimonioArbolConexiones
  from '../assets/themes/default/media/patrimonio/patrimonio-arbol-conexiones.png';

import patrimonioEntradasGrupos
  from '../assets/themes/default/media/patrimonio/patrimonio-entradas-grupos.png';

import patrimonioVisitasGuiadas
  from '../assets/themes/default/media/patrimonio/patrimonio-visitas-guiadas.png';

import eventoGrupoCultural
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-grupo-cultural.png';

import eventoVisitaCasaRural
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-visita-casa-rural.png';

import alojamientoHotelBalnearioAreatza
  from '../assets/themes/default/media/patrimonio/patrimonio-alojamiento-hotel-balneario-areatza.png';

import './ObraDetalle.css';

function ObraDetalle() {
  useEffect(() => {
    document.body.classList.add('obra-detalle-page');

    let mapInstance = null;

    const timer = setTimeout(() => {
      try {
        const mapElement = document.getElementById('obra-detail-map');

        if (mapElement && window.initLeafletMap) {
          mapInstance = window.initLeafletMap('obra-detail-map');
        }
      } catch (error) {
        console.warn('No se ha podido inicializar el mapa', error);
      }
    }, 0);

    return () => {
      document.body.classList.remove('obra-detalle-page');
      clearTimeout(timer);

      try {
        if (mapInstance?.remove) {
          mapInstance.remove();
        }
      } catch (error) {
        console.warn('No se ha podido eliminar el mapa', error);
      }
    };
  }, []);

  const GalleryImages = [
    {
      image: obraSalaVerde,
      alt: 'Interior de la exposición Todo está conectado',
    },
    {
      image: obraEscaleraInterior,
      alt: 'Escalera interior del centro',
    },
    {
      image: obraTejidoMetalico,
      alt: 'Documento histórico de Bizkaia',
    },
    {
      image: eventoVisitaCasaRural,
      alt: 'Edificio tradicional del patrimonio de Bizkaia',
    },
    {
      image: obraSalaExposicion,
      alt: 'Detalle interior de la exposición',
    },
    {
      image: obraEscalerasMuro,
      alt: 'Muro artístico de la exposición',
    },
    {
      image: patrimonioArbolConexiones,
      alt: 'Ilustración de conexiones',
    },
    {
      image: obraEsculturaTejida,
      alt: 'Escultura tejida',
    },
    {
      image: patrimonioVisitasGuiadas,
      alt: 'Ilustración vinculada al patrimonio',
    },
  ];

  const ObrasSimilaresCards = [
    {
      badgeText: 'Patrimonio',
      image: obraEscaleraInterior,
      title: 'Plan cultural de un día',
      date: '22/01/2026 - 24/09/2026',
      tags: [
        {
          label: 'Plaza de la iglesia',
          icon: 'fa-light fa-location-dot',
        },
      ],
      link: '/obras/plan-cultural-un-dia',
    },
    {
      badgeText: 'Historia',
      image: obraTejidoMetalico,
      title: 'Plan cultural de un día',
      date: '22/01/2026 - 24/09/2026',
      tags: [
        {
          label: 'Edificio X',
          icon: 'fa-light fa-location-dot',
        },
      ],
      link: '/obras/plan-cultural-historia',
    },
    {
      badgeText: 'Arte',
      image: obraEsculturaTejida,
      title: 'Plan cultural de un día',
      date: '12/01/2026',
      tags: [
        {
          label: 'Algorta kalea 34',
          icon: 'fa-light fa-location-dot',
        },
      ],
      link: '/obras/plan-cultural-arte',
    },
    {
      badgeText: 'Patrimonio',
      image: obraSalaExposicion,
      title: 'Plan cultural de un día',
      date: '12/01/2026',
      tags: [
        {
          label: 'Gastronomía',
          icon: 'fa-light fa-location-dot',
        },
      ],
      link: '/obras/plan-cultural-patrimonio',
    },
  ];

  const InteresCards = [
    {
      image: alojamientoHotelBalnearioAreatza,
      title: 'Balneario',
      link: '/alojamientos/hotel-balneario-areatza',
    },
    {
      image: eventoGrupoCultural,
      title: 'Ruta cultural por el municipio',
      link: '/rutas/ruta-cultural-municipio',
    },
    {
      image: patrimonioEntradasGrupos,
      title: 'Visita grupal',
      link: '/visitas/visita-grupal',
    },
  ];

  return (
    <>
      <main className="BKTT-ObraDetalle">
        <div className="container">

          <BKTTBreadcrumb
            items={[
              {
                label: 'Obras',
                href: '/obras',
              },
              {
                label: 'Todo está conectado',
              },
            ]}
          />

          <section className="BKTT-ObraDetalleHero">
            <img
              src={obraEscalerasMuro}
              alt="Exposición Todo está conectado"
              className="BKTT-ObraDetalleHero__image"
            />

            <div className="BKTT-ObraDetalleHero__controls">
              <button
                type="button"
                className="BKTT-ObraDetalleHero__control"
                aria-label="Información"
              >
                <span className="BKTT-Icon fa-light fa-circle-info" />
              </button>

              <button
                type="button"
                className="BKTT-ObraDetalleHero__control"
                aria-label="Imagen anterior"
              >
                <span className="BKTT-Icon fa-light fa-angle-left" />
              </button>

              <button
                type="button"
                className="BKTT-ObraDetalleHero__control"
                aria-label="Imagen siguiente"
              >
                <span className="BKTT-Icon fa-light fa-angle-right" />
              </button>
            </div>

            <div
              className="BKTT-ObraDetalleHero__dots"
              aria-hidden="true"
            >
              <span className="is-active" />
              <span />
              <span />
              <span />
            </div>
          </section>

          <header className="BKTT-ObraDetalle__header">
            <h1 className="BKTT-ObraDetalle__title">
              Todo está conectado
            </h1>

            <button
              type="button"
              className="BKTT-ObraDetalle__share"
              aria-label="Compartir obra"
            >
              <span className="BKTT-Icon fa-light fa-arrow-up-from-bracket" />
            </button>
          </header>

          <div className="BKTT-ObraDetalle__layout">
            <div className="BKTT-ObraDetalle__mainContent">

              <nav
                className="BKTT-ObraDetalleTabs"
                aria-label="Contenido de la obra"
              >
                <ul className="BKTT-ObraDetalleTabs__list">
                  <li>
                    <a
                      href="#descripcion"
                      className="BKTT-ObraDetalleTabs__link is-active"
                    >
                      Descripción
                    </a>
                  </li>

                  <li>
                    <a
                      href="#localizacion"
                      className="BKTT-ObraDetalleTabs__link"
                    >
                      Localización
                    </a>
                  </li>

                  <li>
                    <a
                      href="#obras-similares"
                      className="BKTT-ObraDetalleTabs__link"
                    >
                      Obras relacionadas
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="BKTT-ObraDetalleMeta">
                <div className="BKTT-ObraDetalleMeta__item">
                  <span className="BKTT-Icon fa-light fa-calendar" />
                  <span>22/06/2026 - 24/06/2026</span>
                </div>

                <div className="BKTT-ObraDetalleMeta__item">
                  <span className="BKTT-Icon fa-light fa-clock" />
                  <span>10:00 - 20:00</span>
                </div>

                <div className="BKTT-ObraDetalleMeta__item">
                  <span className="BKTT-Icon fa-light fa-location-dot" />
                  <span>Museo Artea, 8. Kalea</span>
                </div>
              </div>

              <section
                id="descripcion"
                className="BKTT-ObraDetalleSection"
              >
                <h2>Descripción</h2>

                <h3>Acerca de la obra</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dictum luctus interdum. Nunc eget mauris eu urna
                  varius varius. Duis ut leo euismod, aliquam purus eu,
                  viverra tortor. In ac sem nisi. Nulla eget lacus nibh.
                  Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </p>

                <h3>Etnografía</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dictum luctus interdum. Nunc eget mauris eu urna
                  varius varius. Duis ut leo euismod, aliquam purus eu,
                  viverra tortor. In ac sem nisi.
                </p>

                <h3>Sala Cultura</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dictum luctus interdum. Nunc eget mauris eu urna
                  varius varius. Duis ut leo euismod, aliquam purus eu,
                  viverra tortor.
                </p>
              </section>

              <section className="BKTT-ObraDetalle__gallery">
                <BKTTFigureGaleria
                  variant="masonry"
                  columns={3}
                  gap="0.5rem"
                  images={GalleryImages}
                  imageFilter="grayscale(1)"
                />
              </section>

              <section
                id="localizacion"
                className="BKTT-ObraDetalleSection BKTT-ObraDetalleLocation"
              >
                <h2>Localización</h2>

                <address className="BKTT-ObraDetalleLocation__address">
                  <strong>Plaza de la iglesia</strong>
                  <br />
                  C. Villa de Plentzia Kalea, 14
                  <br />
                  48930 Areatza
                </address>

                <div
                  id="obra-detail-map"
                  className="BKTT-Map BKTT-ObraDetalleLocation__map"
                />
              </section>
            </div>

            <aside className="BKTT-ObraDetalleAside">
              <div className="BKTT-ObraDetalleAside__card">
                <h2>Destacado</h2>

                <p>
                  Este SummerFest pretende rendir homenaje a nuestros
                  antepasados mostrando al público la evolución,
                  sacrificio y trabajo de quienes durante siglos
                  supieron hacer del caserío vasco una institución
                  autosuficiente.
                </p>

                <div className="BKTT-ObraDetalleAside__price">
                  <span>por persona</span>
                  <strong>10€</strong>
                </div>

                <a
                  href="/obras/todo-esta-conectado/reservar"
                  className="BKTT-ObraDetalleAside__button"
                >
                  <span className="BKTT-Icon fa-light fa-link" />
                  <span>Reserva entradas</span>
                </a>
              </div>
            </aside>
          </div>
        </div>

        <section
          id="obras-similares"
          className="container BKTT-ObraDetalleSimilar"
        >
          <h2 className="BKTT-ObraDetalleSimilar__title">
            Obras similares
          </h2>

          <CardContainer cards={ObrasSimilaresCards} imageFilter="grayscale(1)" />
        </section>

        <section className="BKTT-ObraDetalleInterest">
          <div className="container">
            <CardGrid
              cards={InteresCards}
              title="Podría interesarte"
              bgColor="transparent"
              headerBgColor="#ffffff"
              titleColor="#d62f0d"
              columns={3}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default ObraDetalle;
