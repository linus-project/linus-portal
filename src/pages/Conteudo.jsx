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
import { useState, useEffect } from "react";
import api from "../api";

export function Conteudo() {
  var idContent = sessionStorage.ID_CONTENT;

  const [content, setContent] = useState([]);

  async function getContent() {
    var result = await api.get(`/content/${idContent}`);
    setContent(result.data);
  }

  useEffect(() => {
    getContent();
  }, []);

  function sortContent() {
    if (content.content?.length < 1000) {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 500)} />
        </>
      );
    } else if (content.content?.length < 1500) {
        return (
            <>
              <CConteudo1 textoParte1={content.content?.substring(0, 500)} />
              <CConteudo2 textoParte1={content.content?.substring(500, 1000)} />
            </>
          );
    } else {
        return (
            <>
              <CConteudo1 textoParte1={content.content?.substring(0, 500)} />
              <CConteudo2 textoParte1={content.content?.substring(500, 1000)} />
              <CConteudo2 textoParte1={content.content?.substring(1000, 1500)} />
            </>
          );
    }
  }

  return (
    <>
      <LoggedNavBar title={"Conteúdo"} />
      <div className="container">
        <div className="titulo">
          <h1>{content.contentTitle}</h1>
          <img src={favoritoVazio} alt="" />
        </div>
      </div>
      <div className="texto">{sortContent()}</div>
      <div className="reacoes">
        <img src={curtir} alt="" />
        <img src={descurtir} alt="" />
      </div>
      <div className="header-comentarios">
        <h2>Comentar:</h2>
        <img src={discord} alt="" />
      </div>
      <div className="ipt_comentar">
        <input type="text" className="mr-2" placeholder=" Escreva seu comentario aqui..." />
        <button>Enviar</button>
      </div>
      <div className="header-comentarios">
        <div className="comentarios">
          <h2>Comentários:</h2>
          <CComentario />
          <CComentario />
        </div>
      </div>
    </>
  );
}
export default Conteudo;
