import React from "react";
import ImgPerfil from "./assets/perfil.svg"

function Comentario(props) {
    return(
        <>
        <div className="container">
            <div className="background-comentario">
                <div className="comentario-content">
                    <div className="lado-esquerdo">
                        <img src={ImgPerfil} alt=""/>
                    </div>
                    <div className="lado-direito">
                        <span>Nome do usuário</span>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Comentario;