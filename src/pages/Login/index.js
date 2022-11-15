import "./login.css";

import Logo from "./../../components/Logo";
import Input from "./../../components/Input";

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

      <section className="texto-links" >
        <p className="texto-senha" >Esqueceu sua senha?</p>
        <p className="texto-conta" >Ainda não possuí uma conta?</p>
      </section>
    </div>
  );
}
