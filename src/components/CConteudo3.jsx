import React from "react";
import "../styles/comentario.css";
import "../styles/conteudo.css";
import img3 from "../assets/parte-.svg";
export function CConteudo1(props) {
    return(
        <>
            <div class="txt-img">
                <img src={img3} alt="" class="img-parte-1-3" />
                <div class="texto-conteudo">
                    <p> {props.textoParte1} </p>
                    <p> {props.textoParte2} </p>
                    <p> {props.textoParte3} </p>
                    <p> {props.textoParte4} </p>
                    <p> {props.textoParte5}</p>
                </div>
            </div>
        </>
    )
}
export default CConteudo1;