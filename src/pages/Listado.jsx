import { useEffect, useState } from 'react';
import CardContainer from '../shared/components/CardContainer';
import Wrapper from '../shared/components/BKTT-Wrapper';
import AgendaFilters from '../shared/components/Filters';
import BreadCrumbComponent from '../shared/components/Breadcrumb';


import barca from '../assets/themes/default/media/barca.jpg';
import canoa from '../assets/themes/default/media/canoa.jpg';
import iglesia from '../assets/themes/default/media/iglesia.jpg';
import puente from '../assets/themes/default/media/puente.jpg';
import summerFest from '../assets/themes/default/media/summerFest.jpg';
import teatro from '../assets/themes/default/media/teatro.jpg';
import playa from '../assets/themes/default/media/playa.png';
import titleDatepicker from '../assets/themes/default/title & datepicker.png';

function AgendaListado() {
 const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
 const [draftRange, setDraftRange] = useState({ start: '', end: '' });
 const [appliedRange, setAppliedRange] = useState({ start: '', end: '' });

 const formatDateLabel = (value) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
 };

 const openDatePicker = (event) => {
  event.preventDefault();
  setDraftRange(appliedRange);
  setIsDatePickerOpen((current) => !current);
 };

 const updateDraftRange = (field, value) => {
  setDraftRange((current) => ({ ...current, [field]: value }));
 };

 const handleToday = (event) => {
  event.preventDefault();
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  const value = `${year}-${month}-${day}`;
  setDraftRange({ start: value, end: value });
 };

 const handleClear = (event) => {
  event.preventDefault();
  setDraftRange({ start: '', end: '' });
  setAppliedRange({ start: '', end: '' });
  setIsDatePickerOpen(false);
 };

 const handleApply = (event) => {
  event.preventDefault();
  const start = draftRange.start;
  const end = draftRange.end;
  const normalizedRange = start && end && start > end
   ? { start: end, end: start }
   : { start, end };

  setAppliedRange(normalizedRange);
  setIsDatePickerOpen(false);
 };

 const rangeLabel = !appliedRange.start && !appliedRange.end
  ? 'DD / MM / YYYY - DD / MM / YYYY'
  : `${formatDateLabel(appliedRange.start || appliedRange.end)} - ${formatDateLabel(appliedRange.end || appliedRange.start)}`;

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


 const filters = [
  { id: 'musica', label: 'Música', icon: 'fa-light fa-music' },
  { id: 'arte', label: 'Arte', icon: 'fa-light fa-pen' },
  { id: 'teatro', label: 'Teatro', icon: 'fa-light fa-masks-theater' },
  { id: 'eventos', label: 'Eventos', icon: 'fa-light fa-wand-magic-sparkles' },
  { id: 'infantil', label: 'Infantil', icon: 'fa-light fa-child' },
  { id: 'precio', label: 'Precio', icon: 'fa-light fa-coins' },
 ];
 const AgendaCards = [
  {
   badgeIcon: 'fa-solid fa-masks-theater',
   badgeText: 'Teatro',
   image: teatro,
   title: 'Teatro en la calle',
   date: '12/01/2026',
   price: 'GRATUITO',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [
    { label: 'Teatro', icon: 'fa-solid fa-masks-theater' },
    { label: 'Familia', icon: 'fa-solid fa-children' },
   ],
   link: '/teatro-en-la-calle',
  },
  {
   badgeIcon: 'fa-solid fa-person-running',
   badgeText: 'Deporte',
   image: barca,
   title: 'Berdel eguna',
   date: '12/05/2026',
   price: 'GRATUITO',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [
    { label: 'Gastronomía', icon: 'fa-solid fa-martini-glass' },
   ],
   link: '/berdel-eguna',
  },
  {
   badgeIcon: 'fa-solid fa-wand-magic-sparkles',
   badgeText: 'Música',
   image: summerFest,
   title: 'SummerFest',
   date: '12/01/2026',
   price: '15€',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [
    { label: 'Música', icon: 'fa-solid fa-music' },
    { label: 'Mar', icon: 'fa-solid fa-water' },
   ],
   link: '/summerfest',
   footerIcon: 'fa-solid fa-link',
   footerLabel: 'Reservar',
  },
  {
   badgeIcon: 'fa-solid fa-person-running',
   badgeText: 'Deporte',
   image: canoa,
   title: 'Ruta acuática por el río Butrón',
   date: '12/01/2026',
   price: '10€',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [],
   link: '/ruta-acuatica-rio-butron',
   footerIcon: 'fa-solid fa-link',
   footerLabel: 'Reservar',
  },
  {
   badgeIcon: 'fa-solid fa-masks-theater',
   badgeText: 'Cultura',
   image: iglesia,
   title: 'Plan cultural de un día',
   date: '12/01/2026',
   price: 'FREETOUR',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [
    { label: 'Gastronomía', icon: 'fa-solid fa-martini-glass' },
    { label: 'Patrimonio', icon: 'fa-solid fa-landmark' },
   ],
   link: '/plan-cultural-un-dia',
  },
  {
   badgeIcon: 'fa-solid fa-wand-magic-sparkles',
   badgeText: 'Ocio',
   image: puente,
   title: 'Inauguración iluminación',
   date: '12/01/2026',
   price: 'GRATUITO',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   tags: [],
   link: '/inauguracion-iluminacion',
  },
 ];

 const BannerData = {
  layout: 'text-image',
  title: 'Visita Plentzia en 1, 2 días 1 semana o quédate aquí...',
  subtitle: '',
  description: '',
  backgroundColor: 'linear-gradient(90deg, #1e5b90 0%, #2f92e5 100%)',
  image: playa,
  backgroundImage: '',
  button: {
   label: 'Planificar viaje',
   icon: 'fa-light fa-calendar',
   link: '/planificar',
  },
 };

 const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agenda de eventos en Plentzia',
  description: 'Listado de eventos, actividades y propuestas culturales para visitar Plentzia.',
  url: 'https://example.com/listado',
  mainEntity: {
   '@type': 'ItemList',
   numberOfItems: AgendaCards.length,
   itemListElement: AgendaCards.map((event, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
     '@type': 'Event',
     name: event.title,
     description: event.description,
     image: event.image,
     startDate: event.date ? event.date.split('/').reverse().join('-') : undefined,
     eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
     eventStatus: 'https://schema.org/EventScheduled',
     location: {
      '@type': 'Place',
      name: 'Plentzia',
     },
     offers: {
      '@type': 'Offer',
      price: event.price === 'GRATUITO' || event.price === 'FREETOUR' ? '0' : '15',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: event.link,
     },
     url: event.link,
    },
   })),
  },
 };

 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
   />
   {/* =====================================================
        PL-LIST--T
        Breadcrumb + cabecera del listado
        ===================================================== */}
   <div className="row">
    <div className="PL-List--T BKTT-WebPartZone-fullWidth--TopContainer col-12">
     <BreadCrumbComponent />

     <section className="BKTT-ListadoHero">
      <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
       <h1 className="mb-0">Agenda</h1>
       <div className="BKTT-Filters__dateWrapper">
        <button className="BKTT-Filters__date" type="button" onClick={openDatePicker}>
         <span className="BKTT-Icon fa-light fa-calendar" />
         <span>{rangeLabel}</span>
        </button>

        {isDatePickerOpen && (
         <div className="BKTT-Filters__datePopover" role="dialog" aria-label="Selector de fechas">
          <div className="BKTT-Filters__dateInputs">
           <label>
            <span>Inicio</span>
            <input
             type="date"
             value={draftRange.start}
             onChange={(event) => updateDraftRange('start', event.target.value)}
            />
           </label>
           <label>
            <span>Fin</span>
            <input
             type="date"
             value={draftRange.end}
             onChange={(event) => updateDraftRange('end', event.target.value)}
            />
           </label>
          </div>

          <div className="BKTT-Filters__dateFooter">
           <button type="button" className="btn btn-link btn-sm" onClick={handleToday}>Hoy</button>
           <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleClear}>Limpiar</button>
           <button type="button" className="btn btn-primary btn-sm" onClick={handleApply}>Aplicar</button>
          </div>
         </div>
        )}
       </div>
      </div>
     </section>
    </div>
   </div>

   {/* =====================================================
        WPZT-HTML
        Zona HTML superior opcional
        ===================================================== */}

   <div className="container">
    <div className="row">
     <div className="WPZT-HTML col-12">
      {/*
            Esta zona queda preparada para texto introductorio,
            avisos, contenido HTML o cualquier bloque superior.

            Si la página no tiene contenido aquí, puede mantenerse
            vacía o eliminarse temporalmente.
          */}
     </div>
    </div>
   </div>

   {/* =====================================================
        WPZT-LISTCONT--DEFAULT
        Filtros + listado + mapa
        ===================================================== */}

   <div className="container">
    <div className="row">
     <div className="WPZT-ListCont--Default col-12">

      {/* FILTROS */}

      <div className="BKTT-AgendaListado__filters">
       <AgendaFilters
        filters={filters}
        selectedFilters={['musica']}
        onToggleFilter={(id) => console.log(id)}
       />
      </div>

      {/* LISTADO Y MAPA */}

      <div className="row g-4 BKTT-AgendaListado__content">

       {/* LISTA */}

       <div className="BKTT-WebPartZone-H50--L col-md-6">
        <h2>15 de Agosto</h2>

        <CardContainer
         cards={AgendaCards}
         direction="column"
         layout="horizontal"
         scroll
        />
       </div>

       {/* MAPA */}

       <div className="BKTT-WebPartZone-H50--R col-md-6">
        <div
         id="map"
         className="BKTT-Map BKTT-AgendaListado__map"
        />
       </div>
      </div>
     </div>
    </div>
   </div>

   {/* =====================================================
        WPZB-HTML
        Bloque inferior antes del footer
        ===================================================== */}

    <div className="WPZB-HTML BKTT-WebPartZone-fullWidth--Bottom">
      <Wrapper
        layout={BannerData.layout}
        backgroundColor={BannerData.backgroundColor}
        title={BannerData.title}
        image={BannerData.image}
        button={BannerData.button}
      />
    </div>
  </>
 );
}

export default AgendaListado;