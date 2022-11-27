import "../styles/Home.css";
import "../styles/main.css";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import { CConteudo } from "../components/CConteudo";
import LoggedNavBar from "../components/CLoggedNavBar";
import { useState, useEffect } from "react";
import api from "../api";

export function Conteudos() {
  
  const idDistro = sessionStorage.ID_DISTRO;

  sessionStorage.removeItem("ID_DISTRO");

  const [starterContentList, setStarterContentList] = useState([]);
  const [intermediaryContentList, setIntermediaryContentList] = useState([]);
  const [advancedContentList, setAdvancedContentList] = useState([]);

  const level = { STARTER: 1, INTERMEDIARY: 2, ADVANCED: 3 };

  async function getStarterContent() {
    var result = null;
    if (idDistro != undefined) {
      result = await api.get(
        `/content/distro/${idDistro}/level/${level.STARTER}`
      );
    } else {
      result = await api.get(`/content/level/${level.STARTER}`);
    }
    setStarterContentList(result.data);
  }

  async function getIntermediaryContent() {
    var result = null;
    if (idDistro != undefined) {
      result = await api.get(
        `/content/distro/${idDistro}/level/${level.INTERMEDIARY}`
      );
    } else {
      result = await api.get(`/content/level/${level.INTERMEDIARY}`);
    }
    setIntermediaryContentList(result.data);
  }

  async function getAdvancedContent() {
    var result = null;
    var success = false;
    try {
      if (idDistro != undefined) {
        result = await api.get(
          `/content/distro/${idDistro}/level/${level.ADVANCED}`
        );
      } else {
        result = await api.get(`/content/level/${level.ADVANCED}`);
      }
      success = true;
    } catch (error) {
      console.log("[ERROR] - getAdvancedContend: ", error)
    }
    if(success == true){
      setAdvancedContentList(result.data);      
    }
  }

  useEffect(
    () => {
      getStarterContent();
      getIntermediaryContent();
      getAdvancedContent();
    },
    [setStarterContentList],
    [setIntermediaryContentList],
    [setAdvancedContentList]
  );

  return (
    <>
      <LoggedNavBar title={"Conteúdos"} style={{ zindex: 1 }} />

      <CTextoGrande text="Conteúdos" class="pl-5 fw-bold pt-5" />

      <CTextoPequeno
        text="Acompanhe abaixo o conteúdo sugerido, de acordo com o nivel de dificuldade"
        class="pl-5 fw-lighter mb-20"
      />

      <CTextoGrande
        text="Iniciante"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />

      <div className="container text-left">
        <div className="row">
          {starterContentList.map((content) => {
            return (
              <>
                <div className="col pb-3 ">
                    <CConteudo
                      key={content.idContent}
                      idContent={content.idContent}
                      image="../assets/basico.png"
                      titulo={content.contentTitle}
                      texto={content.content}
                    />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <CTextoGrande
        text="Intermediário"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />

      <div className="container text-left">
        <div className="row">
          {intermediaryContentList.map((content) => {
            return (
              <>
                <div className="col pb-4 ">
                  <CConteudo
                    key={content.idContent}
                    idContent={content.idContent}
                    image="../assets/intermediario.png"
                    titulo={content.contentTitle}
                    texto={content.content?.substring(0, 20) + "..."}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <CTextoGrande text="Avançado" class="pl-5 fw-bold pt-5" color="#52BCBF" />

      <div className="container text-left">
        <div className="row">
          {advancedContentList.map((content) => {
            return (
              <>
                <div className="col pb-4 ">
                  <CConteudo
                    key={content.idContent}
                    idContent={content.idContent}
                    image="../assets/avancado.png"
                    titulo={content.contentTitle}
                    texto={content.content?.substring(0, 20) + "..."}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
