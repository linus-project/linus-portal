import React from "react";
import imgPerfil from "../assets/users/avatar.png";

function CComentario(props) {
  return (
    <>
      <div className="container-comentario">
        <div className="background-comentario">
          <div className="comentario-content">
            <div className="lado-direito">
              <img className="mr-3 mb-2" src={imgPerfil} alt="" />
              <span style={{fontSize:18}}>{props.username}</span>
              <p>{props.commentaryContent}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CComentario;
