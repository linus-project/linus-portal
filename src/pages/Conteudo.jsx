import "../styles/Home.css";
import "../styles/main.css";
import LoggedNavBar from "../components/CLoggedNavBar";
import CConteudo1 from "../components/CConteudo1";
import CConteudo2 from "../components/CConteudo2";
import CConteudo3 from "../components/CConteudo3";
import CConteudo4 from "../components/CConteudo4";
import CComentario from "../components/CComentario";
import favoritoVazio from "../assets/favoritar-vazio.svg";
import favoritoCheio from "../assets/favoritar-cheio.svg";
import curtir from "../assets/curtir.svg";
import descurtir from "../assets/descurtir.svg";
import discord from "../assets/discord-icon.svg";
import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export function Conteudo() {

  const navigate = useNavigate();

  var idContent = sessionStorage.ID_CONTENT;
  var idUser = sessionStorage.ID_USER;

  const [content, setContent] = useState([]);
  const [favorite, setFavorite] = useState(false);

  async function isFavorite() {
    var result = false;
    try {
      result = await api.get(
        `/content/favorite?idUser=${idUser}&idContent=${idContent}`
      );
    } catch (error) {
      console.log(`[ERROR] - isFavorited`, error);
    }
    setFavorite(result.data);
  }

  async function favoriteContent() {
    try {
      await api.post("/content/favorite", {
        fkUser: idUser,
        fkContent: idContent,
      });
    } catch (error) {
      console.log(`[ERROR] - favoriteContent`, error);
    }
    isFavorite();
  }

  async function getContent() {
    var result = await api.get(`/content/${idContent}`);
    setContent(result.data);
  }

  useEffect(() => {
    getContent();
    isFavorite();
  }, []);

  function sortContent() {
    if (content.content?.length < 1000) {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 500)} />
        </>
      );
    } else if (content.content?.length < 2000) {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 1000)} />
          <CConteudo2 textoParte1={content.content?.substring(1000, 2000)} />
        </>
      );
    } else if (content.content?.length < 3000) {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 1000)} />
          <CConteudo2 textoParte1={content.content?.substring(1000, 2000)} />
          <CConteudo3 textoParte1={content.content?.substring(2000, 3000)} />
        </>
      );
    } else {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 1000)} />
          <CConteudo2 textoParte1={content.content?.substring(1000, 2000)} />
          <CConteudo3 textoParte1={content.content?.substring(2000, 3000)} />
          <CConteudo4 textoParte1={content.content?.substring(3000, 4000)} />
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
          <img
            className="favoritar"
            onClick={() => favoriteContent()}
            src={favorite ? favoritoCheio : favoritoVazio}
            alt=""
          />
        </div>
      </div>
      <div className="texto">{sortContent()}</div>
      <div className="reacoes">
        <img src={curtir} alt="" />
        <img src={descurtir} alt="" />
      </div>
      <div className="header-comentarios">
        <h2>Comentar:</h2>
        <a href="#####">
          <img src={discord} alt="" />
        </a>
      </div>
      <div className="ipt_comentar">
        <input
          type="text"
          className="mr-2"
          placeholder=" Escreva seu comentario aqui..."
        />
        <button className="btn-enviar">Enviar</button>
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
