import React from "react";
import "../styles/comentario.css";
import "../styles/conteudo.css";
import img2 from "../assets/parte-2.svg";
export function CConteudo2(props) {
    return(
        <>
            <div class="txt-img">
            <img src={img2} alt="" style={{opacity: 0}} class="img-parte-2-4" />
                <div class="texto-conteudo">
                <p> {props.textoParte1} </p>
                    <p> {props.textoParte2} </p>
                    <p> {props.textoParte3} </p>
                    <p> {props.textoParte4} </p>
                    <p> {props.textoParte5}</p>
                </div>
                <img src={img2} alt="" class="img-parte-2-4" />
            </div>
        </>
    )
}
export default CConteudo2;