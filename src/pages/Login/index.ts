import "./login.css";

import Logo from "./../../components/Logo";
import Input from "./../../components/Input";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <Logo />
      <form className="form">
        <label>Email</label>
        <Input type="email" placeholder="seuemail@email.com" />

        <label>Senha</label>
        <Input type="password" placeholder="************" autoComplete="on" />
        <button type="submit"> Login </button>
      </form>

      <section className="texto-links">
        <p className="texto-senha">Esqueceu sua senha?</p>
        <Link to={"/cadastro"}>
          <p className="texto-conta">Ainda não possuí uma conta?</p>
        </Link>
      </section>
    </div>
  );
}
