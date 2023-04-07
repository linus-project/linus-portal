import "../styles/Home.css";
import "../styles/main.css";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import { CConteudo } from "../components/CConteudo";
import LoggedNavBar from "../components/CLoggedNavBar";
import api from "../api";
import { useEffect, useState } from "react";
// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';

export function VistoPorUltimo() {
  const [historyContentList, setHistoryContentList] = useState([]);
  const idUser = sessionStorage.ID_USER;

  async function getHistoryContent() {
    var result = await api.get(`/content/history?idUser=${idUser}`);
    setHistoryContentList(result.data);
  }

  useEffect(() => {
    getHistoryContent();
  }, [setHistoryContentList]);

  return (
    <>
      <LoggedNavBar title={"Visto por Último"} />
      <CTextoGrande
        text="Conteúdos Visto por Último"
        class="pl-5 fw-bold pt-5"
      />
      <CTextoPequeno
        text="Acompanhe abaixo o conteúdo sugerido, de acordo com o nivel de dificuldade"
        class="pl-5 fw-lighter mb-20"
      />

      <div className="container text-left">
        <div className="row">
          {historyContentList.map((content) => {
            return (
              <>
                <div className="col pb-4 ">
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
    </>
  );
}
