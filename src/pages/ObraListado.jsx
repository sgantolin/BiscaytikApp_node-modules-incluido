import { useEffect, useState } from 'react';

import BKTTBreadcrumb from '../shared/components/Breadcrumb';
import AgendaFilters from '../shared/components/BKTT-Filters';
import CardContainer from '../shared/components/CardContainer';

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
      note: 'Patrimonio',
      title: 'Todo está conectado',
      date: '12/01/2026',
      price: '10€',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraEscalerasMuro,
      link: '/obras/todo-esta-conectado',
      footerLabel: 'Reservar',
      footerIcon: 'fa-light fa-link',
    },
    {
      note: 'Historia',
      title: 'Arte, los orígenes',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraEscaleraInterior,
      link: '/obras/arte-los-origenes',
    },
    {
      note: 'Historia',
      title: 'Mar, planos y marineros',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraTejidoMetalico,
      link: '/obras/mar-planos-marineros',
    },
    {
      note: 'Patrimonio',
      title: 'Instalación, "Respira"',
      date: 'PERMANENTE',
      price: 'GRATUITO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel.',
      image: obraSalaExposicion,
      link: '/obras/instalacion-respira',
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
            <h2 className="visually-hidden">
              Listado de obras
            </h2>

            <CardContainer
              cards={Obras}
              layout="horizontal"
              direction="column"
              imagePosition="right"
            />
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
