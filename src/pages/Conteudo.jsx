import "../styles/Home.css";
import "../styles/main.css";
import LoggedNavBar from "../components/CLoggedNavBar";
import CConteudo1 from "../components/CConteudo1";
import CConteudo2 from "../components/CConteudo2";
import CComentario from "../components/CComentario";
import favoritoVazio from "../assets/favoritar-vazio.svg";
import curtir from "../assets/curtir.svg";
import descurtir from "../assets/descurtir.svg";
import discord from "../assets/discord-icon.svg";

export function Conteudo(props) {
    return(
        <>
        <LoggedNavBar title={"Conteúdo"}/>
        <div className="container">
            <div className="titulo">
                <h1>Conteúdo 1</h1>
                <img src={favoritoVazio} alt="" />
            </div>
        </div>
        <div className="texto">
            <CConteudo1 textoParte1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat iaculis elit vel
                        porta.
                        Vestibulum consequat mollis hendrerit. Integer lacinia molestie felis, a elementum nisi ultrices
                        non.
                        Praesent sed quam ut justo tincidunt ullamcorper. Vivamus cursus, arcu eu pellentesque
                        sollicitudin,
                        nisl dolor fermentum ipsum, non suscipit risus nulla eu lectus. Sed a bibendum libero. Ut
                        eleifend
                        ac
                        orci vitae varius. Nulla efficitur felis elit, sit amet varius mi placerat eu."/>
            <CConteudo2 textoParte1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat iaculis elit vel
                        porta.
                        Vestibulum consequat mollis hendrerit. Integer lacinia molestie felis, a elementum nisi ultrices
                        non.
                        Praesent sed quam ut justo tincidunt ullamcorper. Vivamus cursus, arcu eu pellentesque
                        sollicitudin,
                        nisl dolor fermentum ipsum, non suscipit risus nulla eu lectus. Sed a bibendum libero. Ut
                        eleifend
                        ac
                        orci vitae varius. Nulla efficitur felis elit, sit amet varius mi placerat eu." />
        </div>
        <div class="reacoes">
            <img src={curtir} alt="" />
            <img src={descurtir} alt="" />
        </div>
        <div class="header-comentarios">
            <h2>Comentar:</h2>
            <img src={discord} alt="" />
        </div>
        <div class="ipt_comentar">
            <input type="text" placeholder=" Escreva seu comentario aqui..." />
            <button>Enviar</button>
        </div>
        <div class="header-comentarios">
            <div className="comentarios">
            <h2>Comentários:</h2>
            <CComentario />
            <CComentario />
            </div>


        </div>

        </>
    )
}
export default Conteudo;