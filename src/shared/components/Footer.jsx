import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoHERRIZ from "../../assets/images/biscaytik-logo-small.svg";

function Footer() {
 const backToTopRef = useRef(null);

 useEffect(() => {
  const btn = backToTopRef.current;
  if (!btn) return;

  const scrollFunction = () => {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
   } else {
    btn.style.display = "none";
   }
  };

  const backToTop = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
  };

  // initial state
  btn.style.display = "none";

  window.addEventListener("scroll", scrollFunction);
  btn.addEventListener("click", backToTop);

  return () => {
   window.removeEventListener("scroll", scrollFunction);
   btn.removeEventListener("click", backToTop);
  };
 }, []);

 return (
  <>
   <footer className="BKTT-footer container-fluid main-footer">
    <div className="container">
     <div class="row">
      <ul className="list-group list-group-horizontal">
        <li><a href="#" target="_blank" rel="">Contacto</a></li>
        <li><a href="#" target="_blank" rel="">Ayuda</a></li>
        <li><a href="#" target="_blank" rel="">Mapa del sitio</a></li>
        <li><a href="#" target="_blank" rel="">Accesibilidad</a></li>
       </ul>
     </div>
     <div className="row d-flex">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center text-sm-start">
       <h4>Legal</h4>
       <ul className="column-list">
        <li><Link to="">Accesibilidad</Link></li>
        <li><Link to="">Cookies</Link></li>
        <li><Link to="">Entidades</Link></li>
        <li><Link to="">Mapa Web</Link></li>
        <li><Link to="">Aviso Legal</Link></li>
       </ul>
      </div>
      <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mt-4 mt-sm-0 text-center text-sm-start">
       <h4>Ayuda</h4>
       <ul>
        <li><Link to="">Preguntas frecuentes</Link></li>
       </ul>
      </div>
      <div className="contact-block col-xs-12 col-sm-3 col-md-3 col-lg-2 mt-4 mt-sm-0 text-center text-sm-start">
       <h4>Contacto</h4>
       <ul>
        <li>
         <p>
          <i className="fa-light fa-phone"></i>
          <a href="tel:+34946000022"><span>94 600 00 22</span></a>
         </p>
        </li>
        <li>
         <p>
          <i className="fa-light fa-envelope"></i>
          <a href="mailto:udalak@biscaytik.eus">udalak@biscaytik.eus</a>
         </p>
        </li>
       </ul>
      </div>
     </div>
     <div className="row mt-3 text-center">
      <div className="col-md-6">
       <img src={logoHERRIZ} alt="Biscaytik" className="logo-biscaytik" />
       <small className="mt-2 mt-md-0 order-1 order-md-0">
        ©2026 Theme Portales turismo Biscaytik. <span>Todos los derechos reservados</span>
       </small>
      </div>
      <div className="col-md-6">
       <ul className="list-group list-group-horizontal">
        <li><a href="#" target="_blank" rel="">Contacto</a></li>
        <li><a href="#" target="_blank" rel="">Ayuda</a></li>
        <li><a href="#" target="_blank" rel="">Mapa del sitio</a></li>
        <li><a href="#" target="_blank" rel="">Accesibilidad</a></li>
       </ul>
      </div>
     </div>
    </div>
    <button type="button" className="BKTT-BackTop btn btn-primary btn-floating btn-lg" id="btn-back-to-top" ref={backToTopRef}>
     <i className="fas fa-arrow-up"></i>
    </button>
   </footer>
  </>
 );
}

export default Footer;
