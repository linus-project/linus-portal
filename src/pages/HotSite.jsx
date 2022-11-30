import "../styles/Home.css";
import "../styles/main.css";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import LoggedNavBar from "../components/CLoggedNavBar";
import { Importacao } from "../components/CImport.jsx";
// import { Export } from '../components/CExport';
import { ExportTeste } from "../components/CExportTeste";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function HotSite() {
  const navigate = useNavigate();

  function isLogged() {
    if (sessionStorage.IS_ADMIN === undefined) {
      navigate(-1);
      return window.alert(
        "Você não tem permissão para acessar esta página"
      );
    }
  }

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <>
      <LoggedNavBar title={"Mais Serviços"} />
      <div>
        <div>
          <CTextoGrande
            text="Serviços especiais"
            class="fs-1 pl-5 fw-bold pt-5"
          />
          <CTextoPequeno
            text="Aqui, você consegue utilizar ferramentas exclusivas que visam facilitar sua vida, confira as funcionalidades:"
            class="pl-5 fw-lighter mb-20"
          />
        </div>
        <div>
          <CTextoGrande
            text="Importar Conteúdo"
            class="fs-1 pl-5 fw-bold pt-5"
            color="#52BCBF"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <CTextoPequeno
              text="Importe o conteúdo desejado para cadastrar:"
              class="pl-5 fw-lighter mb-20"
            />
            <Importacao />
          </div>

          <CTextoGrande
            text="Exportar Conteúdo"
            class="fs-1 pl-5 fw-bold pt-5"
            color="#52BCBF"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <CTextoPequeno
              text="Escolha o conteúdo desejado para baixar:"
              class="pl-5 fw-lighter mb-20"
            />
            <ExportTeste />
          </div>
        </div>
      </div>
    </>
  );
}
