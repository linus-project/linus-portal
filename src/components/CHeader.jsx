import { React, useState } from "react";
import ModalLogin from "./CModalLogin";
import ModalCadastro from "./CModalCadastro";
import LinusLogo from "../assets/logo-svg.svg";

function Header(props) {
  const [modalLogin, setModalLogin] = useState([]);
  const [modalCadastro, setModalCadastro] = useState([]);

  function showModalLogin() {
    setModalLogin(
      <>
        <ModalLogin />
        <button
          onClick={closeModalLogin}
          className="btn-close btn-close-white shadow-none"
          style={{
            position: "absolute",
            marginLeft: "60vw",
            marginTop: "13vh",
          }}
          aria-label="Close"
        ></button>
      </>
    );
    closeModalCadastro();
    document.getElementsByClassName("banner")[0].style.setProperty(
      "background",
      "url('../assets/BannerBorrado.png') no-repeat center center/cover"
      );
    document.getElementsByClassName("slogan")[0].style.setProperty("display","none");
  }

  function showModalCadastro() {
    setModalCadastro(
      <>
        <ModalCadastro />
        <button
          onClick={closeModalCadastro}
          className="btn-close btn-close-white shadow-none"
          style={{
            position: "absolute",
            marginLeft: "63vw",
            marginTop: "11vh"
          }}
          aria-label="Close"
        ></button>
      </>
    );
    closeModalLogin();
    document.getElementsByClassName("banner")[0].style.setProperty(
      "background",
      "url('../assets/BannerBorrado.png') no-repeat center center/cover"
      );
    document.getElementsByClassName("slogan")[0].style.setProperty("display","none");
  }

  function closeModalLogin() {
    document.getElementsByClassName("banner")[0].style.setProperty(
      "background",
      "url('../assets/Banner.png') no-repeat center center/cover"
      );
      
    document.getElementsByClassName("slogan")[0].style.setProperty("display","block");
    setModalLogin();
  }

  function closeModalCadastro() {
    document.getElementsByClassName("banner")[0].style.setProperty(
      "background",
      "url('../assets/Banner.png') no-repeat center center/cover"
      );
      
    document.getElementsByClassName("slogan")[0].style.setProperty("display","block");
    setModalCadastro();
  }

  return (
    <>
      <div id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <a className="navbar-brand" href="#">
              <img src={LinusLogo} alt="" className="img-fluid" />
            </a>
            <div id="expand">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" id="teste">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#secao-sobre-nos">
                    Sobre nós
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#niveis">
                    Níveis
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#secao-distribuicoes">
                    Principais distribuições
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#secao-contatos">
                    Contatos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={showModalLogin}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={showModalCadastro}>
                    Cadastre-se
                  </a>
                </li>
              </ul>
            </div>
            {/* <div id="buttons-navbar">
                            <button className="btn-navbar-login" onClick={showModalLogin}>Login</button>
                            <button className="btn-navbar-cadastrar">Cadastre-se</button>
                        </div> */}
          </nav>
        </div>
      </div>

      {modalLogin}

      {modalCadastro}
    </>
  );
}

export default Header;
