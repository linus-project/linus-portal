import { CDistribuicao } from "../components/CDistribuicao";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import "../styles/Home.css";
import "../styles/main.css";
import LoggedNavBar from "../components/CLoggedNavBar";
import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export function Distribuicao() {
  sessionStorage.removeItem("ID_DISTRO");

  const [starterDistroList, setStarterDistroList] = useState([]);
  const [intermediaryDistroList, setIntermediaryDistroList] = useState([]);
  const [advancedDistroList, setAdvancedDistroList] = useState([]);
  const [loggedNavBar, setLoggedNavBar] = useState([]);

  const level = { STARTER: 1, INTERMEDIARY: 2, ADVANCED: 3 };

  function getDistroImage(distroName) {
    return `../assets/${distroName}.svg`;
  }

  async function getStarterDistro() {
    var result = await api.get(`/distro/level/${level.STARTER}`);
    setStarterDistroList(result.data);
  }

  async function getIntermediaryDistro() {
    var result = await api.get(`/distro/level/${level.INTERMEDIARY}`);
    setIntermediaryDistroList(result.data);
  }

  async function getAdvancedDistro() {
    var result = await api.get(`/distro/level/${level.ADVANCED}`);
    setAdvancedDistroList(result.data);
  }

  useEffect(
    () => {
      getStarterDistro();
      getIntermediaryDistro();
      getAdvancedDistro();
    },
    [setStarterDistroList],
    [setIntermediaryDistroList],
    [setAdvancedDistroList]
  );

  return (
    <>
      <LoggedNavBar title={"Distribuições"} />
      <CTextoGrande text="Distribuições" class="fs-1 pl-5 fw-bold pt-5" />
      <CTextoPequeno
        text="Selecione a distribuição e veja os planos de estudos disponíveis para você em cada uma delas:"
        class="pl-5 fw-lighter mb-20"
      />

      <CTextoGrande
        text="Iniciante"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />
      <div className="container text-left">
        <div className="row align-items-center">
          {starterDistroList.map((distro) => {
            return (
              <>
                <div className="col text-center">
                  <CDistribuicao
                    key={distro.idDistro}
                    idDistro={distro.idDistro}
                    image={getDistroImage(distro.distroName.toLowerCase())}
                    titulo={distro.distroName}
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
        <div className="row align-items-center">
          {intermediaryDistroList.map((distro) => {
            return (
              <>
                <div className="col text-center">
                  <CDistribuicao
                    key={distro.idDistro}
                    idDistro={distro.idDistro}
                    image={getDistroImage(distro.distroName.toLowerCase())}
                    titulo={distro.distroName}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <CTextoGrande text="Avançado" class="pl-5 fw-bold pt-5" color="#52BCBF" />
      <div className="container text-left">
        <div className="row align-items-center">
          {advancedDistroList.map((distro) => {
            return (
              <>
                <div className="col text-center">
                  <CDistribuicao
                    key={distro.idDistro}
                    idDistro={distro.idDistro}
                    image={getDistroImage(distro.distroName.toLowerCase())}
                    titulo={distro.distroName}
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
