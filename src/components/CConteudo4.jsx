import React from "react";
import "../styles/comentario.css";
import "../styles/conteudo.css";
import img4 from "../assets/parte-4.svg";
export function CConteudo4(props) {
  return (
    <>
      <div class="txt-img">
        <img src={img4} alt="" style={{ opacity: 0 }} class="img-parte-2-4" />
        <div class="texto-conteudo">
          <p> {props.textoParte1} </p>
          <p> {props.textoParte2} </p>
          <p> {props.textoParte3} </p>
          <p> {props.textoParte4} </p>
          <p> {props.textoParte5}</p>
        </div>
        <img src={img4} alt="" class="img-parte-2-4" />
      </div>
    </>
  );
}
export default CConteudo4;
