import { display } from "@mui/system";
import { React, useState }from "react";
import ModalLogin from "./CModalLogin";

function Header(props) {

    const [modalLogin, setModalLogin] = useState([]);
    var isActive = false;

    function showModalLogin() {
        if(isActive == false){
            setModalLogin(<ModalLogin/>);
            isActive = true;
        } else {
            setModalLogin();
            isActive = false;
        }
    }

    return (
        <>
            <div id="header">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                        <a class="navbar-brand" href="#">
                            {/* <img src="../src/assets/logo-svg.svg" alt="" class="img-fluid"> */}
                        </a>
                        <div id="expand"><button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" id="teste">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Sobre nós</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Em alta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Principais distribuições</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contatos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Cadastre-se</a>
                                </li>
                            </ul>
                        </div>
                        <div id="buttons-navbar">
                            <button class="btn-navbar-login" onClick={showModalLogin}>Login</button>
                            <button class="btn-navbar-cadastrar">Cadastre-se</button>
                        </div>
                    </nav>
                </div>
            </div>

            {modalLogin}

        </>
    )
}

export default Header;