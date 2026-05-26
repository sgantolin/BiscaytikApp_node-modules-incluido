import logoBiscaytik from "../../assets/images/biscaytik-logo.svg";

function LoginHeader() {

  return (
      <header className="login-header">
        <img className="logo" src={logoBiscaytik} alt="Biscaytik logo" />
      </header>
  );
}

export default LoginHeader;
