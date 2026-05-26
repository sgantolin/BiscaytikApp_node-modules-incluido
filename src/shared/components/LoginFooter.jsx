function LoginFooter() {

  return (
    <>
      <footer className="login-footer d-flex flex-column flex-md-row">
        <p className="mt-2 mt-md-0 order-1 order-md-0">
          ©2023 Biscaytik. Todos los derechos reservados.
        </p>
        <div className="contacto d-flex">
          <p>
            <i className="fa-regular fa-phone"></i>
            <a href="tel:+34946000022"><span>94 600 00 22</span></a>
          </p>
          <p>
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:udalak@biscaytik.eus">udalak@biscaytik.eus</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default LoginFooter;
