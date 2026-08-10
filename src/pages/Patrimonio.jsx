import { useEffect } from 'react';

import CardContainer from '../shared/components/CardContainer';
import BKTTFeatureBanner from '../shared/components/BKTTFeatureBanner';
import Wrapper from '../shared/components/BKTT-Wrapper';

import './Patrimonio.css';

/*
 * Sustituye estos imports por las imágenes definitivas.
 */
/* Hero */
import heroPatrimonio
  from '../assets/themes/default/media/patrimonio/patrimonio-hero-completo.png';

/* FeatureBanner principal */
import patrimonioArbolConexiones
  from '../assets/themes/default/media/patrimonio/patrimonio-arbol-conexiones.png';

/* Banner rojo de la exposición */
import patrimonioExposicionTextura
  from '../assets/themes/default/media/patrimonio/patrimonio-exposicion-textura.jpg';

/* FeatureBanner de entradas y visitas */
import patrimonioEntradasGrupos
  from '../assets/themes/default/media/patrimonio/patrimonio-entradas-grupos.png';

import patrimonioVisitasGuiadas
  from '../assets/themes/default/media/patrimonio/patrimonio-visitas-guiadas.png';

/* Obras */
import obraEscalerasMuro
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escaleras-muro.png';

import obraEscaleraInterior
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escalera-interior.png';

import obraSalaVerde
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-sala-verde.png';

import obraEsculturaTejida
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escultura-tejida.png';

import obraSalaExposicion
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-sala-exposicion.png';

import obraTejidoMetalico
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-tejido-metalico.png';

/* Agenda */
import agendaMerkatartea
  from '../assets/themes/default/media/patrimonio/patrimonio-agenda-merkatartea.png';

import agendaFiestasPatronales
  from '../assets/themes/default/media/patrimonio/patrimonio-agenda-fiestas-patronales.png';

/* Alojamientos */
import alojamientoCasaRuralMadariaga
  from '../assets/themes/default/media/patrimonio/patrimonio-alojamiento-casa-rural-madariaga.png';

import alojamientoHotelBalnearioAreatza
  from '../assets/themes/default/media/patrimonio/patrimonio-alojamiento-hotel-balneario-areatza.png';

import alojamientoCasaRuralUrkiola
  from '../assets/themes/default/media/patrimonio/patrimonio-alojamiento-casa-rural-urkiola.png';

/* Imágenes adicionales para eventos o detalles */
import eventoGrupoCultural
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-grupo-cultural.png';

import eventoVisitaCasaRural
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-visita-casa-rural.png';

import eventoIglesiaCasco
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-iglesia-casco.png';

import eventoRutaNaturaleza
  from '../assets/themes/default/media/patrimonio/patrimonio-evento-ruta-naturaleza.png';

function Patrimonio() {
  useEffect(() => {
    document.body.classList.add('patrimonio-page');

    return () => {
      document.body.classList.remove('patrimonio-page');
    };
  }, []);

  /*
   * Banner principal dividido en imagen y texto.
   */
  const PatrimonioFeatureData = {
    layout: 'split',
    backgroundColor: '#f8f5ef',
    gap: '0',
    align: 'stretch',
    sections: [
      {
        id: 'patrimonio-image',
        image: patrimonioArbolConexiones,
        alt: 'Ilustración del patrimonio de Bizkaia',
        className: 'BKTT-PatrimonioFeature__imageSection',
      },
      {
        id: 'patrimonio-content',
        title: 'Artea y el gran patrimonio de Bizkaia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: {
          label: 'Saber más sobre Patrimonio',
          href: '/patrimonio',
          endIcon: 'fa-light fa-arrow-right',
        },
        extra: {
          icon: 'fa-light fa-circle-info',
        },
        className: 'BKTT-PatrimonioFeature__contentSection',
      },
    ],
  };

  /*
   * Tarjetas de obras.
   */
  const ObrasCards = [
  {
    badgeText: 'Patrimonio',
    image: obraEscalerasMuro,
    title: 'Todo está conectado',
    date: '22/01/2026 - 24/09/2026',
    price: '10€',
    link: '/obras/todo-esta-conectado',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Reservar',
  },
  {
    badgeText: 'Historia',
    image: obraEscaleraInterior,
    title: 'Plan cultural de un día',
    date: 'PERMANENTE',
    price: 'GRATUITO',
    link: '/obras/plan-cultural',
  },
  {
    badgeText: 'Arte',
    image: obraSalaVerde,
    title: 'Casa Rural Madariaga',
    price: '15€',
    tags: [
      {
        label: '3 estrellas',
        icon: 'fa-light fa-star',
      },
    ],
    link: '/obras/casa-rural-madariaga',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Reservar',
  },
  {
    badgeText: 'Etnografía',
    image: obraEsculturaTejida,
    title: 'Hotel Balneario Areatza',
    price: '15€',
    link: '/obras/hotel-balneario',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Reservar',
  },
  {
    badgeText: 'Arte',
    image: obraSalaExposicion,
    title: 'Casa Rural Urkiola',
    price: '15€',
    tags: [
      {
        label: '2 estrellas',
        icon: 'fa-light fa-star',
      },
    ],
    link: '/obras/casa-rural-urkiola',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Reservar',
  },
  {
    badgeText: 'Patrimonio',
    image: obraTejidoMetalico,
    title: 'Apartamento X',
    price: '15€',
    link: '/obras/apartamento-x',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Reservar',
  },
];

  /*
   * Banner convencional con imagen de fondo.
   */
  const ExposicionBannerData = {
  layout: 'text-image',
  title: 'No te pierdas la exposición “Todo está conectado”',
  subtitle: '',
  description: '',
  backgroundColor: '#9f260e',
  backgroundImage: patrimonioExposicionTextura,
  overlayColor: 'rgba(100, 5, 5, 0.90)',
  image: '',
  button: {
    label: 'Reserva las entradas',
    icon: 'fa-light fa-calendar',
    link: '/reservar-exposicion',
  },
};

  /*
   * FeatureBanner con dos columnas de imagen, texto y botón.
   */
  const ServiciosFeatureData = {
  layout: 'cards',
  backgroundColor: '#ffffff',
  gap: '4rem',
  align: 'start',
  sections: [
    {
      id: 'entradas-grupos',
      image: patrimonioEntradasGrupos,
      alt: 'Grupo de personas con vestimenta tradicional',
      title: 'Entradas para grupos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus.',
      button: {
        label: 'Más información',
        href: '/entradas-grupos',
        endIcon: 'fa-light fa-arrow-right',
      },
    },
    {
      id: 'visitas-guiadas',
      image: patrimonioVisitasGuiadas,
      alt: 'Ilustración de una mujer vinculada al patrimonio',
      title: 'Talleres y visitas guiadas tematizadas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus.',
      button: {
        label: 'Más información',
        href: '/visitas-guiadas',
        endIcon: 'fa-light fa-arrow-right',
      },
    },
  ],
};

  /*
   * Agenda.
   */
  const AgendaCards = [
  {
    image: agendaMerkatartea,
    title: 'Merkatartea',
    date: '21/06/2026',
    description:
      'Merkatartea es una feria y mercado de alimentación y artesanía euskaldun.',
    link: '/agenda/merkatartea',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Detalle',
  },
  {
    image: agendaFiestasPatronales,
    title: 'Fiestas patronales',
    date: '08/09/2026 - 10/09/2026',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/agenda/fiestas-patronales',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Detalle',
  },
];

  /*
   * Alojamientos.
   */
  const AlojamientoCards = [
  {
    badgeText: 'Parejas',
    image: alojamientoCasaRuralMadariaga,
    title: 'Casa Rural Madariaga',
    price: '15 - 50€ noche',
    tags: [
      {
        label: '3 estrellas',
        icon: 'fa-light fa-star',
      },
    ],
    link: '/alojamientos/casa-rural-madariaga',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Link reserva',
  },
  {
    badgeText: 'Parejas',
    image: alojamientoHotelBalnearioAreatza,
    title: 'Hotel Balneario Areatza',
    description: 'CERTIFICADO',
    price: '15€',
    tags: [
      {
        label: 'Accesible',
        icon: 'fa-light fa-wheelchair',
      },
      {
        label: 'Mascotas',
        icon: 'fa-light fa-paw',
      },
    ],
    link: '/alojamientos/hotel-balneario-areatza',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Link reserva',
  },
  {
    badgeText: 'Parejas',
    image: alojamientoCasaRuralUrkiola,
    title: 'Casa Rural Urkiola',
    price: '15€',
    tags: [
      {
        label: '2 estrellas',
        icon: 'fa-light fa-star',
      },
    ],
    link: '/alojamientos/casa-rural-urkiola',
    footerIcon: 'fa-light fa-link',
    footerLabel: 'Link reserva',
  },
];

  const ObraFilters = [
    {
      id: 'patrimonio',
      label: 'Patrimonio',
      icon: 'fa-light fa-landmark',
    },
    {
      id: 'arte',
      label: 'Arte',
      icon: 'fa-light fa-palette',
    },
    {
      id: 'historia',
      label: 'Historia',
      icon: 'fa-light fa-book-open',
    },
    {
      id: 'etnografia',
      label: 'Etnografía',
      icon: 'fa-light fa-people-group',
    },
  ];

  const AlojamientoFilters = [
    {
      id: 'hoteles',
      label: 'Hoteles',
      icon: 'fa-light fa-hotel',
    },
    {
      id: 'apartamentos',
      label: 'Apartamentos',
      icon: 'fa-light fa-building',
    },
    {
      id: 'precios',
      label: 'Precios',
      icon: 'fa-light fa-coins',
      dropdown: true,
    },
  ];

  return (
    <>
      {/* HERO */}
      <div className="row">
        <div className="BKTT-WebPartZone-fullWidth--Top col-12">
          <section
            className="BKTT-PatrimonioHero"
            style={{
              backgroundImage: `url(${heroPatrimonio})`,
            }}
          >
            <div className="BKTT-PatrimonioHero__overlay" />

            <div className="container BKTT-PatrimonioHero__container">
              <h1 className="BKTT-PatrimonioHero__title">
                Centro Contemporáneo para
                <br />
                las Artes y el Patrimonio
              </h1>

              <div className="BKTT-PatrimonioHero__controls">
                <button
                  type="button"
                  className="BKTT-PatrimonioHero__control"
                  aria-label="Información"
                >
                  <span className="BKTT-Icon fa-light fa-circle-info" />
                </button>

                <button
                  type="button"
                  className="BKTT-PatrimonioHero__control"
                  aria-label="Anterior"
                >
                  <span className="BKTT-Icon fa-light fa-angle-left" />
                </button>

                <button
                  type="button"
                  className="BKTT-PatrimonioHero__control"
                  aria-label="Siguiente"
                >
                  <span className="BKTT-Icon fa-light fa-angle-right" />
                </button>
              </div>
            </div>

            <div className="BKTT-PatrimonioHero__dots">
              <span className="is-active" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
        </div>
      </div>

      {/* FEATURE BANNER PATRIMONIO */}
      <div className="BKTT-PatrimonioPage__mainFeature">
        {/* ANTIGUO:
        <BKTTFeatureBanner
          layout={PatrimonioFeatureData.layout}
          backgroundColor={PatrimonioFeatureData.backgroundColor}
          gap={PatrimonioFeatureData.gap}
          align={PatrimonioFeatureData.align}
          sections={PatrimonioFeatureData.sections}
        />
        */}
        <Wrapper
          layout={PatrimonioFeatureData.layout}
          backgroundColor={PatrimonioFeatureData.backgroundColor}
          gap={PatrimonioFeatureData.gap}
          align={PatrimonioFeatureData.align}
          sections={PatrimonioFeatureData.sections}
        />
      </div>

      {/* OBRAS */}
      <section className="container BKTT-PatrimonioSection">
        <div className="BKTT-PatrimonioSection__header">
          <h2 className="BKTT-PatrimonioSection__title">
            Obras
            <span className="BKTT-Icon fa-light fa-angle-right" />
          </h2>

          <div className="BKTT-PatrimonioFilters">
            {ObraFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="BKTT-PatrimonioFilters__chip"
              >
                <span className={`BKTT-Icon ${filter.icon}`} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        <CardContainer cards={ObrasCards} imageFilter="grayscale(1)" />

        <div className="BKTT-PatrimonioSection__controls">
          <button
            type="button"
            className="BKTT-PatrimonioSection__control"
            aria-label="Anterior"
          >
            <span className="BKTT-Icon fa-light fa-angle-left" />
          </button>

          <button
            type="button"
            className="BKTT-PatrimonioSection__control is-active"
            aria-label="Siguiente"
          >
            <span className="BKTT-Icon fa-light fa-angle-right" />
          </button>
        </div>
      </section>

      {/* BANNER EXPOSICIÓN */}
      <section className="BKTT-PatrimonioPage__exhibition">
        {/* ANTIGUO: <Banner banner={ExposicionBannerData} /> */}
        <Wrapper
          layout={ExposicionBannerData.layout}
          backgroundImage={ExposicionBannerData.backgroundImage}
          backgroundColor={ExposicionBannerData.backgroundColor}
          overlayColor={ExposicionBannerData.overlayColor}
          title={ExposicionBannerData.title}
          button={ExposicionBannerData.button}
        />
      </section>

      {/* FEATURE BANNER SERVICIOS */}
      <section className="BKTT-PatrimonioPage__services">
        <div className="container">
          {/* ANTIGUO:
          <BKTTFeatureBanner
            layout={ServiciosFeatureData.layout}
            backgroundColor={ServiciosFeatureData.backgroundColor}
            gap={ServiciosFeatureData.gap}
            align={ServiciosFeatureData.align}
            sections={ServiciosFeatureData.sections}
          />
          */}
          <Wrapper
            layout={ServiciosFeatureData.layout}
            backgroundColor={ServiciosFeatureData.backgroundColor}
            gap={ServiciosFeatureData.gap}
            align={ServiciosFeatureData.align}
            sections={ServiciosFeatureData.sections}
          />
        </div>
      </section>

      {/* AGENDA */}
      <section className="BKTT-PatrimonioPage__agenda">
        <div className="container">
          <div className="BKTT-PatrimonioSection__header">
            <h2 className="BKTT-PatrimonioSection__title">
              Agenda
              <span className="BKTT-Icon fa-light fa-angle-right" />
            </h2>
          </div>

          <CardContainer
            cards={AgendaCards}
            direction="row"
            layout="horizontal"
            imageFilter="grayscale(1)"
          />
        </div>
      </section>

      {/* ALOJAMIENTOS */}
      <section className="container BKTT-PatrimonioSection BKTT-PatrimonioPage__accommodation">
        <div className="BKTT-PatrimonioSection__header">
          <h2 className="BKTT-PatrimonioSection__title">
            Alojamientos
            <span className="BKTT-Icon fa-light fa-angle-right" />
          </h2>

          <div className="BKTT-PatrimonioFilters">
            {AlojamientoFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="BKTT-PatrimonioFilters__chip"
              >
                <span className={`BKTT-Icon ${filter.icon}`} />
                <span>{filter.label}</span>

                {filter.dropdown && (
                  <span className="BKTT-Icon fa-light fa-angle-down" />
                )}
              </button>
            ))}
          </div>
        </div>

        <CardContainer cards={AlojamientoCards} imageFilter="grayscale(1)" />
      </section>
    </>
  );
}

export default Patrimonio;