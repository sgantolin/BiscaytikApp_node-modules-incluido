import { useEffect, useState } from 'react';

import BKTTBreadcrumb from '../shared/components/Breadcrumb';
import AgendaFilters from '../shared/components/Filters';

import obraEscalerasMuro
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escaleras-muro.png';

import obraEscaleraInterior
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escalera-interior.png';

import obraTejidoMetalico
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-tejido-metalico.png';

import obraSalaExposicion
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-sala-exposicion.png';

import obraEsculturaTejida
  from '../assets/themes/default/media/patrimonio/patrimonio-obra-escultura-tejida.png';

import './ObrasListados.css';

function ObrasListado() {
  const [selectedFilters, setSelectedFilters] = useState([
    'patrimonio',
    'historia',
  ]);

  useEffect(() => {
    document.body.classList.add('obras-listado-page');

    return () => {
      document.body.classList.remove('obras-listado-page');
    };
  }, []);

  const Filters = [
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

  const Obras = [
    {
      id: 'todo-esta-conectado',
      category: 'Patrimonio',
      title: 'Todo está conectado',
      date: '12/01/2026',
      price: '10€',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraEscalerasMuro,
      imageAlt: 'Escaleras de piedra de la obra Todo está conectado',
      link: '/obras/todo-esta-conectado',
      reservable: true,
    },
    {
      id: 'arte-los-origenes',
      category: 'Historia',
      title: 'Arte, los orígenes',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraEscaleraInterior,
      imageAlt: 'Escalera interior de la exposición Arte, los orígenes',
      link: '/obras/arte-los-origenes',
      reservable: false,
    },
    {
      id: 'mar-planos-marineros',
      category: 'Historia',
      title: 'Mar, planos y marineros',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraTejidoMetalico,
      imageAlt: 'Representación gráfica de planos y patrimonio marítimo',
      link: '/obras/mar-planos-marineros',
      reservable: false,
    },
    {
      id: 'instalacion-respira',
      category: 'Patrimonio',
      title: 'Instalación, “Respira”',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraSalaExposicion,
      imageAlt: 'Sala de la instalación Respira',
      link: '/obras/instalacion-respira',
      reservable: false,
    },
  ];

  const toggleFilter = (filterId) => {
    setSelectedFilters((currentFilters) => {
      const isSelected = currentFilters.includes(filterId);

      if (isSelected) {
        return currentFilters.filter((id) => id !== filterId);
      }

      return [...currentFilters, filterId];
    });
  };

  return (
  <>
    {/* =====================================================
        PL-LIST--T
        Breadcrumb + imagen + título + subtítulo
        ===================================================== */}

    <section className="PL-List--T BKTT-ObrasListado__top">
      <div className="container">
        <div className="row">
          <div className="BKTT-WebPartZone-fullWidth--TopContainer col-12">

            <BKTTBreadcrumb
              items={[
                {
                  label: 'Obras',
                },
              ]}
            />

            <header className="BKTT-ObrasListado__header">
              <div className="BKTT-ObrasListado__headerContent">
                <h1 className="BKTT-ObrasListado__pageTitle">
                  Obras
                </h1>
              </div>

              <div
                className="BKTT-ObrasListado__headerDecoration"
                aria-hidden="true"
              >
                <img
                  src={obraEsculturaTejida}
                  alt=""
                />
              </div>
            </header>

            <div className="BKTT-ObrasListado__intro">
              <h2>
                Texto resumen categoría, resume la finalidad de la página
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque dictum luctus interdum. Nunc eget mauris eu urna
                varius varius. Duis ut leo euismod, aliquam purus eu,
                viverra tortor. In ac sem nisi. Nulla eget lacus nibh.
                Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        WPZT-HTML
        Zona HTML superior opcional

        No hace falta renderizarla mientras no tenga contenido.
        ===================================================== */}

    {/*
    <section className="WPZT-HTML">
      <div className="container">
        <div className="row">
          <div className="col-12">
            Contenido HTML opcional
          </div>
        </div>
      </div>
    </section>
    */}

    {/* =====================================================
        WPZT-LISTCONT--DEFAULT
        Filtros 25 % + listado 75 %
        ===================================================== */}

    <main className="WPZT-ListCont--Default BKTT-ObrasListado">
      <div className="container">
        <div className="row g-4">

          {/* FILTROS: 25 % */}

          <aside className="BKTT-WebPartZone-H25--L col-lg-3">
            <AgendaFilters
              filters={Filters}
              selectedFilters={selectedFilters}
              onToggleFilter={toggleFilter}
              layout="vertical"
              showDate={false}
            />
          </aside>

          {/* LISTADO: 75 % */}

          <section className="BKTT-WebPartZone-H75--R col-lg-9">
            <div className="BKTT-ObrasResults">
              <h2 className="visually-hidden">
                Listado de obras
              </h2>

              {Obras.map((obra) => (
                <article
                  key={obra.id}
                  className="BKTT-ObraListCard"
                >
                  <div className="BKTT-ObraListCard__content">
                    <span className="BKTT-ObraListCard__category">
                      {obra.category}
                    </span>

                    <h3 className="BKTT-ObraListCard__title">
                      <a href={obra.link}>
                        {obra.title}
                      </a>
                    </h3>

                    <div className="BKTT-ObraListCard__information">
                      <div className="BKTT-ObraListCard__date">
                        <span
                          className="BKTT-Icon fa-light fa-calendar"
                          aria-hidden="true"
                        />

                        <span>{obra.date}</span>
                      </div>

                      <strong className="BKTT-ObraListCard__price">
                        {obra.price}
                      </strong>
                    </div>

                    <p className="BKTT-ObraListCard__description">
                      {obra.description}
                    </p>

                    {obra.reservable && (
                      <div className="BKTT-ObraListCard__actions">
                        <a
                          href={`${obra.link}/reservar`}
                          className="BKTT-ObraListCard__button"
                        >
                          <span
                            className="BKTT-Icon fa-light fa-link"
                            aria-hidden="true"
                          />

                          <span>Reservar</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <a
                    href={obra.link}
                    className="BKTT-ObraListCard__imageLink"
                    aria-label={`Ver ${obra.title}`}
                  >
                    <img
                      src={obra.image}
                      alt={obra.imageAlt}
                      className="BKTT-ObraListCard__image"
                    />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>

    {/* =====================================================
        WPZB-HTML
        Zona inferior opcional antes del footer
        ===================================================== */}

    {/*
    <section className="WPZB-HTML">
      <div className="container">
        <div className="row">
          <div className="BKTT-WebPartZone-fullWidth--Bottom col-12">
            Contenido inferior opcional
          </div>
        </div>
      </div>
    </section>
    */}
  </>
);
}

export default ObrasListado;