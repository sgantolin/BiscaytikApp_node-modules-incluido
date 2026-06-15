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
   <footer className="BKTT-footer container-fluid">
    <div className="container">
     <div className="row d-flex">
      <div className="col-12 col-lg-6 text-center text-sm-start">
       <h3>Legal</h3>
       <ul className="column-list">
        <li><Link to="">Accesibilidad</Link></li>
        <li><Link to="">Cookies</Link></li>
        <li><Link to="">Entidades</Link></li>
        <li><Link to="">Mapa Web</Link></li>
        <li><Link to="">Aviso Legal</Link></li>
       </ul>
      </div>
      <div className="col-12 col-lg-3 mt-4 mt-sm-0 text-center text-sm-start">
       <h3>Ayuda</h3>
       <ul>
        <li><Link to="">Preguntas frecuentes</Link></li>
       </ul>
      </div>
      <div className="contact-block col-12 col-lg-3 mt-4 mt-sm-0 text-center text-sm-start">
        <ul className="BKTT-RRSS list-group list-group-horizontal mb-5">
        <li>
         <a href="#" target="_blank" rel="">
          <span class="BKTT-Icon fa-brands fa-facebook fs-3 me-3"></span>
         </a>
         </li>
        <li>
         <a href="#" target="_blank" rel="">
          <span class="BKTT-Icon fa-brands fa-instagram fs-3 me-3"></span>
         </a>
         </li>
        <li>
         <a href="#" target="_blank" rel="">
          <span class="BKTT-Icon fa-brands fa-whatsapp fs-3 me-3"></span>
         </a>
        </li>
        <li>
         <a href="#" target="_blank" rel="">
          <span class="BKTT-Icon fa-sharp fa-light fa-messages fs-3"></span>
         </a>
         </li>
      </ul>
       <h3>Contacto</h3>
       <ul>
        <li>
         <p>
          <span className="BKTT-Icon fa-light fa-phone me-2"></span>
          <a href="tel:+34946000022"><span>94 600 00 22</span></a>
         </p>
        </li>
        <li>
         <p>
          <span className="BKTT-Icon fa-light fa-envelope me-2"></span>
          <a href="mailto:udalak@biscaytik.eus">udalak@biscaytik.eus</a>
         </p>
        </li>
       </ul>
      </div>
     </div>
     <div className="row d-flex">
      <div class="col-12 d-flex justify-content-end mt-3 ">
       <img src={logoHERRIZ} alt="Biscaytik" className="BKTT-Icon logo-biscaytik me-3" />
       <img src={logoHERRIZ} alt="Biscaytik" className="BKTT-Icon logo-biscaytik" />
      </div>
      
     </div>
     <div className="row mt-4 d-flex justify-content-between align-items-center">
      <div className="col-md-6">
       <small className="mt-2 mt-md-0 order-1 order-md-0">
        ©2026 Theme Portales turismo Biscaytik. <span>Todos los derechos reservados</span>
       </small>
      </div>
      <div className="col-md-6">
       <ul className="list-group list-group-horizontal justify-content-center justify-content-md-end">
        <li class="me-2"><a href="#" target="_blank" rel="">Contacto</a></li>
        <li class="me-2"><a href="#" target="_blank" rel="">Ayuda</a></li>
        <li class="me-2"><a href="#" target="_blank" rel="">Sitemap</a></li>
        <li><a href="#" target="_blank" rel="">Accesibilidad</a></li>
       </ul>
      </div>
     </div>
    </div>
    <button type="button" className="BKTT-BackTop btn btn-primary btn-floating btn-lg" id="btn-back-to-top" ref={backToTopRef}>
     <span className="fas fa-arrow-up"></span>
    </button>
   </footer>
  </>
 );
}

export default Footer;
