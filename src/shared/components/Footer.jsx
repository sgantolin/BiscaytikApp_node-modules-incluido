import { Link } from "react-router-dom";
import logoBiscaytik from "../../assets/images/biscaytik-logo-small.svg";

function Footer() {

  return (
    <>
      <footer className="container-fluid main-footer">
        <div className="container">
          <div className="row d-flex">
            <div className="first-block col-lg-3 order-5 order-lg-0 mt-4 mt-lg-0 text-center text-lg-start">
              <img src={logoBiscaytik} alt="Biscaytik" className="logo-biscaytik" />
              <p className="mt-2 mt-md-0 order-1 order-md-0">
                ©2023 Biscaytik. <span>Todos los derechos reservados</span>
              </p>
            </div>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
