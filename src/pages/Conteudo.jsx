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
import { useState, useEffect, useRef } from "react";
import api from "../api";
import textToAudioApi from "../textToAudioApi";
import { useSpeechSynthesis } from "react-speech-kit";
import { Button } from "reactstrap";

export function Conteudo() {
  // const { speak } = useSpeechSynthesis();

  var idContent = sessionStorage.ID_CONTENT;
  var idUser = sessionStorage.ID_USER;

  // const audio = new Audio(`../assets/audio/${idContent}.mp3`)
  const [playMessage, setPlayMessage] = useState("Aperte para ouvir");
  const [content, setContent] = useState([]);
  const [commentaryList, setCommentaryList] = useState([]);
  const [commentary, setCommentary] = useState([]);
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

  async function getContentCommentary() {
    var result = await api.get(`/commentary?idContent=${idContent}`);
    setCommentaryList(result.data);
  }

  async function createCommentary() {
    try {
      await api.post("/commentary", {
        fkUser: idUser,
        fkContent: idContent,
        commentaryContent: commentary
      });
      getContentCommentary();
    } catch (error) {
      console.log(`[ERROR] - createCommentary`, error);
    }
  }

  function playAudio() {
    //  speak({ text: content.content?.substring(0, 500) });
    if (!audioStatus) {
      myRef.current.play();
      changeAudioStatus(true);
      setPlayMessage("Aperte para parar");
    } else {
      myRef.current.pause();
      changeAudioStatus(false);
      setPlayMessage("Aperte para ouvir");
    }
  }

  useEffect(() => {
    getContent();
    getContentCommentary();
    isFavorite();
  }, []);

  function sortContent() {
    if (content.content?.length < 1000) {
      return (
        <>
          <CConteudo1 textoParte1={content.content?.substring(0, 1000)} />
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

  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

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
        <audio ref={myRef} src={`../assets/audio/${idContent}.mp3`} />
        <Button className="btn_play" onClick={() => playAudio()}>
          {playMessage}
        </Button>
      </div>
      <div className="texto mt-4">{sortContent()}</div>
      <div className="reacoes">
        <img src={curtir} alt="" />
        <img src={descurtir} alt="" />
      </div>
      <div className="header-comentarios">
        <h2>Comentar:</h2>
        <a href="https://discord.gg/J3kMDRYXbA">
          <img src={discord} alt="" />
        </a>
      </div>
      <div className="ipt_comentar">
        <input
          type="text"
          className="mr-2"
          placeholder=" Escreva seu comentario aqui..."
          onKeyUp={(it) => setCommentary(it.target.value)}
        />
        <button onClick={() => createCommentary()} className="btn-enviar">Enviar</button>
      </div>
      <div className="header-comentarios">
        <div className="comentarios">
          <h2>Comentários:</h2>
          {commentaryList.map((it) => {
            return (
              <>
                <CComentario username={it.username} commentaryContent={it.commentaryContent} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Conteudo;
