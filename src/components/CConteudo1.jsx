import React from "react";
import "../styles/comentario.css";
import "../styles/conteudo.css";
import img1 from "../assets/parte-1.svg";
// import img2 from "../assets/parte-2.svg";
export function CConteudo1(props) {
    return(
        <>
            <div class="txt-img">
                <img src={img1} alt="" class="img-parte-1-3" />
                <div class="texto-conteudo">
                    <p> {props.textoParte1} </p>
                    <p> {props.textoParte2} </p>
                    <p> {props.textoParte3} </p>
                    <p> {props.textoParte4} </p>
                    <p> {props.textoParte5}</p>
                </div>
                {/* <img src={img2} alt="" class="img-parte-2-4" /> */}
            </div>
        </>
    )
}
export default CConteudo1;