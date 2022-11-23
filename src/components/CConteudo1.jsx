import React from "react";
import "../styles/comentario.css";
import "../styles/conteudo.css";
import img1 from "../assets/parte-1.svg";
export function CConteudo1(props) {
    return(
        <>
            <div class="txt-img">
                <img src={img1} alt="" class="img-parte" />
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