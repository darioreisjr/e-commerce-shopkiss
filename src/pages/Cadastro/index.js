import "./cadastro.css";
import Logo from "./../../components/Logo";
import Input from "./../../components/Input";

import { useNavigate } from 'react-router-dom'


export default function Cadastro() {

  const navigate = useNavigate();


  function hadleCancel() {
    navigate("/login");
  }

  return (
    <main className="cadastro-container">
      <section>
        <Logo />
      </section>

      <section className="form-container">
        <h2>Cadastrar</h2>
        <form className="form">
          <label>Nome</label>
          <Input type="text" placeholder="Nome Completo" />
          <label>Email</label>
          <Input type="email" placeholder="seuemail@email.com" />
          <label>Senha</label>
          <Input type="password" placeholder="********" />
          <label>Confirma Senha</label>
          <Input type="password" placeholder="********" />
          <div className="container-botao">
            <button style={{ backgroundColor: "#38B6FF" }} type="submit">
              Cadastrar
            </button>
              <button onClick={hadleCancel} >Cancelar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
