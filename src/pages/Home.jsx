import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardGrid from '../shared/components/CardGrid';

import destacado1 from '../assets/themes/default/media/destacados1.png';
import destacado2 from '../assets/themes/default/media/destacados2.png';
import destacado3 from '../assets/themes/default/media/destacados3.png';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'bootstrap';
import CardContainer from '../shared/components/CardContainer';


function Home() {

 const [visible, setVisible] = useState(true);
 const [loading, setLoading] = useState(true);
 const [grupoPermisos, setGrupoPermisos] = useState(null);
 const [listaGruposPermisos, setListaGruposPermisos] = useState([
  { name: 'Administradores', code: 'admin' },
  { name: 'Usuarios estándar', code: 'user' },
  { name: 'Auditores', code: 'audit' },
 ]);
 const [mostrarContainer, setMostrarContainer] = useState(true);

 useEffect(() => {

  const shouldShowModal = !localStorage.getItem('modalClosed');
  setVisible(shouldShowModal);
  setLoading(false);

  // Agregar la clase al body
  document.body.classList.add('home-page');

  // Eliminar la clase cuando se desmonte el componente
  return () => {
   document.body.classList.remove('home-page');
  };
 }, []);

 const onHide = () => {
  localStorage.setItem('modalClosed', true);
  setVisible(false);
 };

 const footerContent = (
  <div>
   <Button label="Entendido" onClick={() => onHide()} className="p-button-primary" />
  </div>
 );

 const navigate = useNavigate();

 const AgendaCards = [
  {
  
   badgeIcon: 'fa-solid fa-globe',
   badgeText: 'Casco',
   image: destacado1,
   headerBadge: { icon: 'fa-solid fa-star', text: 'Destacado' },
   title: 'Casco histórico',
   date: '15/03/2026',
   price: '29.99',
   description: 'Recorre las calles del casco histórico y descubre su patrimonio y oferta gastronómica.',
   tags: [{ label: 'Gastronomía', icon: 'fa-solid fa-utensils' }, { label: 'Cultura' }],
   progress: 65,
   progressLabel: 'Popularidad',
   progressClass: 'bg-success',
   link: '/casco-historico',
   footerIcon: 'fa-regular fa-circle-arrow-right',
   footerLabel: 'Ver',
  },
  {

   badgeIcon: 'fa-solid fa-video',
   badgeText: 'En vivo',
   image: destacado2,
   headerBadge: { icon: 'fa-solid fa-tv', text: 'Directo' },
   title: 'La bahía en directo',
   date: '20/06/2026',
   description: 'Stream en tiempo real desde la bahía para ver el estado del mar y eventos.',
   tags: [{ label: 'Naturaleza' }, { label: 'Eventos' }],
   progress: 45,
   progressLabel: 'Visitas hoy',
   progressClass: 'bg-info',
   link: '/bahia-en-directo',
  },
  {
   badgeIcon: 'fa-solid fa-file-lines',
   badgeText: 'Documentos',
   image: destacado3,
   headerBadge: { icon: 'fa-solid fa-download', text: 'Folletos' },
   title: 'Folletos y planos',
   price: 'GRATUITO $',
   description: 'Descarga folletos y planos turísticos actualizados de la localidad.',
   tags: [{ label: 'Turismo' }, { label: 'Descargas' }],
   progressLabel: 'Descargas',
   progressClass: 'bg-warning',
   link: '/folletos-planos',
  },
 ];

 const bottomCards = [
  {
   image: destacado1,
   title: 'Cómo llegar',
   link: '/catalogo-aplicaciones'
  },
  {
   image: destacado2,
   title: 'La bahía en directo',
   link: '/catalogo-entidades'
  },
  {
   image: destacado3,
   title: 'Folletos y planos',
   link: '/gestion-de-usuarios'
  },
 ];

 const SimpleCards = [
  {
   badgeIcon: 'fa-solid fa-utensils',
   badgeText: 'Gastronomía',
   title: 'Menú degustación',
   price: '45.00',
  },
  {
   badgeIcon: 'fa-solid fa-ship',
   badgeText: 'Paseo marítimo',
   title: 'Ruta en barco',
   price: '25.00',
  },
  {
   badgeIcon: 'fa-solid fa-person-hiking',
   badgeText: 'Senderismo',
   title: 'Ruta por los acantilados',
   price: '0.00',
  },
 ];

 return (
  <>
   <div class="row">
    <div class="BKTT-WebPartZone-fullWidth--Top col-12">
     <figure id="carouselExampleDark" class="BKTT-FigureSlider carousel carousel-dark slide">
      <div class="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <ul class="carousel-inner">
       <li class="carousel-item active" data-bs-interval="10000">
        <img src="./src/assets/themes/default/media/slider1.jpg" class="d-block w-100" alt="..." />
        <figcaption class="carousel-caption d-none d-md-block">
         <h5>First slide label</h5>
         <p>Some representative placeholder content for the first slide.</p>
        </figcaption>
       </li>
       <li class="carousel-item" data-bs-interval="2000">
        <img src="./src/assets/themes/default/media/slider2.jpg" class="d-block w-100" alt="..." />
        <figcaption class="carousel-caption d-none d-md-block">
         <h5>Second slide label</h5>
         <p>Some representative placeholder content for the second slide.</p>
        </figcaption>
       </li>
       <li class="carousel-item">
        <img src="..." class="d-block w-100" alt="..." />
        <figcaption class="carousel-caption d-none d-md-block">
         <h5>Third slide label</h5>
         <p>Some representative placeholder content for the third slide.</p>
        </figcaption>
       </li>
      </ul>
      <div class="BKTT-CarrouselControl">
       <button type="button" class="" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        <span class="BKTT-Icon fa-sharp fa-light fa-circle-info"></span>
       </button>
       <div >
        <button class="BKTT-Button carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
        </button>
        <button class="BKTT-Button carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
        </button>
       </div>
      </div>
     </figure>
     {/* código sharepoint */}
     <div class="BKTT-FigureSlider--container tp-banner-container">
      <div class="BKTT-FigureSlider tp-banner revslider-initialised tp-simpleresponsive hovered" >
       <ul>
        <li class="carousel-item active">
         <div class="slotholder">
          <div id="BKTT-slider1" class="d-block w-100 tp-bgimg defaultimg"></div>
         </div>
        </li>
        <li class="carousel-item">
         <div className="slotholder">
          <div id="BKTT-slider2" className="d-block w-100 tp-bgimg defaultimg"></div>
         </div>
        </li>
       </ul>
       <div className="tp-loader"></div>
       <div className="tp-bannertimer"></div>
      </div>
      <div class="tp-leftarrow tparrows default hidearrows"></div>
      <div class="tp-rightarrow tparrows default hidearrows"></div>
     </div>
     {/* end código sharepoint */}
    </div>

    {/* TÍTULO Y "DESTACADOS" */}
    <div class="features_sec29">
     <div class="container">
      <div class="ms-webpart-zone ms-fullWidth">
       <div id="MSOZoneCell_WebPartWPQ6" class="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth ">
        <div class="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
         {/*<div webpartid="35fbbb64-a2ac-488a-bebd-86ef9a932dfd" haspers="false" id="WebPartWPQ6" width="100%" class="ms-WPBody " allowdelete="false" style="">
            <div class="ms-rtestate-field">
             <h2 class="section_title_drakgray">destacADOS</h2>
            </div>
            <div class="ms-clear"></div>
           </div>*/}
        </div>
       </div>
      </div>
      {/* <div class="one_third">
         <div class="ms-webpart-zone ms-fullWidth">
          <div id="MSOZoneCell_WebPartWPQ3" class="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth ">
           <div class="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
            <div webpartid="65287b3e-0960-46d7-9059-acccc7d965ab" haspers="false" id="WebPartWPQ3" width="100%" class="ms-WPBody " allowdelete="false" style="">
             <div class="ms-rtestate-field">
              <div class="box">
               <a href="/es-es/surf">
                <img alt="Surf" src="/PublishingImages/HOME/DESTACADOS/destacado1.png"/>
                <h3>Surf</h3>
               </a>
               <p align="left">Mundaka presume con orgullo de su ola izquierda, y no es para menos ya que está considerada como la mejor ola de Europa en esta categoría.</p><br/>
               <a class="readmore_but11" href="/es-es/surf">
                <i class="fa fa-location-arrow"></i>MÁS INFO</a>
              </div>
             </div>
             <div class="ms-clear"></div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="one_third">
         <div class="ms-webpart-zone ms-fullWidth">
          <div id="MSOZoneCell_WebPartWPQ4" class="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth ">
           <div class="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
            <div webpartid="2f37ed18-024d-4c3a-87e7-2d48dfa6b02e" haspers="false" id="WebPartWPQ4" width="100%" class="ms-WPBody " allowdelete="false" style="">
             <div class="ms-rtestate-field">
              <div class="box"> 
               <a href="/es-es/quehacer/agenda">
                <img alt="Agenda" src="/PublishingImages/HOME/DESTACADOS/destacado2.png"/>
                <h3>Mundaka Cultural</h3>
               </a>
               <p align="left">Mundaka&nbsp;tiene un amplio programa de actividades culturales, deportivas y de ocio dirigidas &ZeroWidthSpace;a todos los públicos. Consulta aquí los eventos programados.</p>
               <br/>
               <a class="readmore_but11" href="/es-es/quehacer/agenda">
                <i class="fa fa-location-arrow"></i>MÁS INFO
               </a>
              </div>
             </div>
             <div class="ms-clear"></div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="one_third last">
         <div class="ms-webpart-zone ms-fullWidth">
          <div id="MSOZoneCell_WebPartWPQ5" class="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth ">
           <div class="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
            <div webpartid="a8048dc2-8573-41e7-87b0-2821ed8ebf53" haspers="false" id="WebPartWPQ5" width="100%" class="ms-WPBody " allowdelete="false" style="">
             <div class="ms-rtestate-field">
              <div class="box"> 
               <a href="/es-es/dormir"> 
                <img alt="Hoteles" src="/PublishingImages/HOME/DESTACADOS/destacado3.png"/>
                <h3>Historia en ruta</h3>
               </a> 
               <p align="left">Mundaka cuenta con una oferta hotelera que se adapta a todas las necesidades y bolsillos. Consulta aquí nuestra oferta de alojamiento.</p>
               <br/>
               <a class="readmore_but11" href="/es-es/dormir">
                <i class="fa fa-location-arrow"></i>MÁS INFO
               </a> 
              </div>
             </div>
             <div class="ms-clear"></div>
            </div>
           </div>
          </div>
         </div>
        </div> */}
     </div>
    </div>
   </div>

   {/* Layout 25-75 */}
   <div className="row" style={{ border: '2px dashed #ccc', margin: '1rem 0', padding: '0.5rem' }}>
    <div className="BKTT-WebPartZone-H25--L col-md-3 col-sm-6 col-xs-12" style={{ border: '1px solid red' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer 
      cards={AgendaCards} 
      direction="column"
      layout="horizontal"
      cardWidth="100%"
      cardHeight="250px"
      />

    </div>
    <div className="BKTT-WebPartZone-H75--R col-md-9 col-sm-6 col-xs-12" style={{ border: '1px solid blue' }}>
     <h6 className="text-muted">75%</h6>
     <CardContainer 
      cards={AgendaCards} 
      direction="row"
      layout="vertical"
      cardWidth="300px"
      cardHeight="400px"
      />
    </div>
   </div>

   {/* Layout 75-25 */}
   <div className="row" style={{ border: '2px dashed #ccc', margin: '1rem 0', padding: '0.5rem' }}>
    <div className="BKTT-WebPartZone-H75--L col-md-9 col-sm-6 col-xs-12" style={{ border: '1px solid blue' }}>
     <h6 className="text-muted">75%</h6>
     <CardContainer cards={AgendaCards} />
    </div>
    <div className="BKTT-WebPartZone-H25--R col-md-3 col-sm-6 col-xs-12" style={{ border: '1px solid red' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer cards={AgendaCards} direction="column" />
    </div>
   </div>

   <div class="container">
    <div class="row">
     <div class="BKTT-WebPartZone-H50--L col-md-6">
      {/*inicio auto-layout*/}
      <section id="BKTT-carousel" class="BKTT-carousel carousel ">
       <h2>Título</h2>
       <ul class="carousel-inner ps-0">
        <li class="carousel-item active" data-bs-interval="10000">
         <CardContainer cards={AgendaCards} />
        </li>
        <li class="carousel-item" data-bs-interval="2000">
         <div class="row">
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
         </div>
        </li>
        <li class="carousel-item">
         <div class="row">
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
          <div class="col">
           <article class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
             <h3 class="card-title">Card title</h3>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </article>
          </div>
         </div>
        </li>
       </ul>
       <div class="BKTT-CarrouselControl">

        <button class="BKTT-Button carousel-control-prev" type="button" data-bs-target="#BKTT-carousel" data-bs-slide="prev">
         <span class="BKTT-Icon fa-light fa-angle-left" aria-hidden="true" aria-label="anterior"></span>
        </button>
        <button class="BKTT-Button carousel-control-next" type="button" data-bs-target="#BKTT-carousel" data-bs-slide="next">
         <span class="BKTT-Icon fa-light fa-angle-right" aria-hidden="true" aria-label="posterior"></span>
        </button>
       </div>
      </section>
      {/*end auto-layout*/}
     </div>
     <div className="BKTT-WebPartZone-H50--R col-md-6" style={{ border: '1px solid green' }}>
      <h6 className="text-muted">50%</h6>
      <CardContainer cards={AgendaCards} />
     </div>
    </div>
   </div>


   {/* Layout fullWidth */}
   <div className="row" style={{ border: '2px dashed #ccc', margin: '1rem 0', padding: '0.5rem' }}>
    <div className="BKTT-WebPartZone-fullWidth--Middle col-12" style={{ border: '1px solid purple' }}>
     <h6 className="text-muted">100%</h6>
     <CardContainer cards={AgendaCards} />
    </div>
   </div>

   {/* Layout 33-33-33 */}
   <div className="row" style={{ border: '2px dashed #ccc', margin: '1rem 0', padding: '0.5rem' }}>
    <div className="BKTT-WebPartZone-H33--L col-md-4" style={{ border: '1px solid orange' }}>
     <h6 className="text-muted">33%</h6>
     <CardContainer cards={AgendaCards} />
    </div>
    <div className="BKTT-WebPartZone-H33--M col-md-4" style={{ border: '1px solid orange' }}>
     <h6 className="text-muted">33%</h6>
     <CardContainer cards={AgendaCards} />
    </div>
    <div className="BKTT-WebPartZone-H33--R col-md-4" style={{ border: '1px solid orange' }}>
     <h6 className="text-muted">33%</h6>
     <CardContainer cards={AgendaCards} />
    </div>
   </div>

   {/* Layout 25-25-25-25 */}
   <div className="row" style={{ border: '2px dashed #ccc', margin: '1rem 0', padding: '0.5rem' }}>
    <div className="BKTT-WebPartZone-H25--1 col-md-3 col-xs-6" style={{ border: '1px solid teal' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer cards={AgendaCards} direction="column" />
    </div>
    <div className="BKTT-WebPartZone-H25--2 col-md-3 col-xs-6" style={{ border: '1px solid teal' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer cards={AgendaCards} direction="column" />
    </div>
    <div className="BKTT-WebPartZone-H25--3 col-md-3 col-xs-6" style={{ border: '1px solid teal' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer cards={AgendaCards} direction="column" />
    </div>
    <div className="BKTT-WebPartZone-H25--4 col-md-3 col-xs-6" style={{ border: '1px solid teal' }}>
     <h6 className="text-muted">25%</h6>
     <CardContainer cards={AgendaCards} direction="column" />
    </div>
   </div>

   <section className="py-4 py-md-5" style={{ backgroundColor: '#f5f5f5' }}>
    <div className="container">
     <h2 className="section-title" style={{ fontWeight: 'bold' }}>Destacados</h2>
     <CardGrid cards={AgendaCards} />
    </div>
   </section>

   <section className="container py-4 py-md-5">
    <h1>H1 Bienvenido a la aplicación</h1>
    <h2>H2 Explora las funcionalidades disponibles</h2>
    <h3>H3 Cabecera de nivel</h3>
    <h4>H4 Cabecera de nivel</h4>
    <h5>H5 Cabecera de nivel</h5>
    <h6>H6 Cabecera de nivel</h6>
    <p>Este es un párrafo de ejemplo para demostrar el estilo de texto en la página de inicio.</p>
    <p>Lorem ipsum dolor <a href="#">sit amet</a>, consectetur <strong>adipiscing elit</strong>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>Iconos BKTT-Icon</h2>
    <h2>BKTT-LinkList</h2>
    <ul>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
    </ul>
    <ol>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
    </ol>
    <h3>BKTT-Nav</h3>
    <nav class="BKTT-Nav header-menu">
     <div class="p-menubar p-component" activeitem="/">
      <ul class="p-menubar-root-list" role="menubar">
       <li role="none" class="p-menuitem BKTT-Link">
        <a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-text">Layouts</span>
        </a>
       </li>
       <li role="none" class="p-menuitem BKTT-Link"><a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-text">Temas</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-submenu-icon" aria-hidden="true"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg></a>
       </li><li role="none" class="p-menuitem BKTT-Link"><a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-icon BKTT-Icon fa-light fa-newspaper"></span><span class="p-menuitem-text">Design System</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-submenu-icon" aria-hidden="true"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg></a></li></ul></div></nav>
    <h2>BKTT-Badge</h2>
    <h3>Simple</h3>
    <h4>Sin icono</h4>
    <span class="BKTT-Badge badge bg-primary me-2">Ejemplo</span>
    <span class="BKTT-Badge badge bg-info">Ejemplo</span>
    <h4>Con icono</h4>
    <span class="BKTT-Badge badge bg-info">
     <span class="BKTT-Icon fa-light fa-lightbulb me-1"></span>
     Ejemplo
    </span>
    <h3>Filtros</h3>
    <h4>Default</h4>
    <div class="BKTT-Badge_chip chip chip-outline btn-outline-primary" data-mdb-chip-init="" data-mdb-chip-initialized="true">
     <span class="BKTT-Icon fa-light fa-lightbulb me-1"></span>
     Filtro
     <span class="BKTT-Icon fas fa-times ms-1"></span>
    </div>
    <h4>Seleccionado</h4>
    <h2>BKTT-Card</h2>
    <h2>BKTT-Progress</h2>
    <h2>BKTT-Wrapper</h2>
    <h2>Form</h2>
    <form action="">
     <h3>BKTT-Input</h3>
     <div className="row">
      <div className="col-md-3 mb-3">
       <div className="d-flex flex-column">
        <label htmlFor="grupoPermisos" className="BKTT-Input">Label input</label>
        <InputText keyfilter="int" placeholder="Valor del campo" />
       </div>
      </div>
     </div>
     <h3>BKTT-Select</h3>
     <h3>BKTT-Dropdown</h3>
     <div className="row">
      <div className="col-md-3 mb-3">
      </div>
     </div>
    </form>
   </section>
   <section className="container py-4 py-md-5">
    <h2 className="section-title">Tablas maestras</h2>
    <p className="section-subtitle">
     Agrupación de los diferentes catálogos de la aplicación.
    </p>
    <div className="row">
     <div className="col-md-6 col-lg-4 mb-4">
      <Card className="home-card h-100"
       onClick={() => { navigate('/catalogo-aplicaciones') }}>
       <h3 className="card-title">Catálogo de aplicaciones</h3>
       <p>
        Permite gestionar para qué aplicaciones se puede configurar el control de acceso y la seguridad mediante los diferentes niveles de acceso.
       </p>
       <i className="fa-regular fa-circle-arrow-right"></i>
      </Card>
     </div>
     <div className="col-md-6 col-lg-4 mb-4">
      <Card className="home-card h-100"
       onClick={() => { navigate('/catalogo-entidades') }}>
       <h3 className="card-title">Catálogo de entidades</h3>
       <p>
        El catálogo de entidades permite gestionar las entidades que aparecen en los mantenimientos de control de acceso y seguridad.
       </p>
       <i className="fa-regular fa-circle-arrow-right"></i>
      </Card>
     </div>
     <div className="col-md-6 col-lg-4 mb-4">
      <Card className="home-card h-100"
       onClick={() => { navigate('/relacion-aplicacion-entidad') }}>
       <h3 className="card-title">Relación entre aplicaciones y entidades</h3>
       <p>
        Gestiona qué entidades se van a controlar dentro de cada aplicación.
       </p>
       <i className="fa-regular fa-circle-arrow-right"></i>
      </Card>
     </div>
    </div>
   </section>
   <section className="py-4 py-md-5">
    <div className="container">
     <h2 className="section-title">Introducir listado cards con autolayout</h2>
     <p className="section-subtitle">
      Creación de usuarios, asignación de estos a las aplicaciones para las que deban tener acceso, y la gestión de los permisos, grupos, perfiles y entidades que se le otorgan a cada uno.
     </p>
     <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
       <Card className="home-card h-100"
        onClick={() => { navigate('/gestion-de-usuarios') }}>
        <h3 className="card-title">Gestión de usuarios</h3>
        <p>
         Permite visualizar, gestionar y crear los usuarios del sistema. A estos usuarios se les podrá asignar los diferentes niveles de elementos para la gestión de la seguridad en las aplicaciones.
        </p>
        <i className="fa-regular fa-circle-arrow-right"></i>
       </Card>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
       <Card className="home-card h-100"
        onClick={() => { navigate('/asignacion-de-permisos') }}>
        <h3 className="card-title">Asignación de permisos</h3>
        <p>
         Permite crear, gestionar o eliminar los diferentes permisos, grupos, perfiles y entidades que se le otorgan a cada usuario para cada una de las aplicaciones dadas de alta en el sistema.
        </p>
        <i className="fa-regular fa-circle-arrow-right"></i>
       </Card>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
       <Card className="home-card h-100"
        onClick={() => { navigate('/usuarios-administradores') }}>
        <h3 className="card-title">Usuarios administradores</h3>
        <p>
         Permite seleccionar los usuarios que tienen el perfil de administrador en el sistema, así como quitar ese perfil a un usuario.
        </p>
        <i className="fa-regular fa-circle-arrow-right"></i>
       </Card>
      </div>
     </div>
    </div>

   </section>



   {loading ? (
    ""
   ) : (
    <Dialog visible={visible} onHide={onHide} className='BKTT-ModalAlert system-dialog' footer={footerContent}>
     <div className="dialog-advise d-flex align-items-center mb-4">
      <i className="fa-regular fa-circle-info me-3"></i>
      Aviso a los usuarios del sistema
     </div>
     <p className='px-3'>
      {
       `El uso de este sistema sólo está permitido a los usuarios autorizados. El acceso no autorizado está terminantemente prohibido y podrá ser objeto de acciones disciplinarias, sin perjuicio de las restantes acciones de naturaleza legal a las que hubiere lugar. Toda la actividad de este sistema se registra y es revisada periódicamente por el personal designado por la dirección del <<ORGANISMO>>.`
      }
     </p>
     <p className='px-3'>
      {
       `Cualquier usuario que acceda al sistema lo hace declarando conocer y aceptar íntegramente estas reglas y la Normativa General de Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>, accesibles en <<URL>> y <<localización física>>.`
      }
     </p>
    </Dialog>
   )}
  </>
 )
}

export default Home