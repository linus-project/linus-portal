import { CDistribuicao } from '../components/CDistribuicao';
import CTextoGrande from '../components/CTextoGrande';
import CTextoPequeno from '../components/CTextoPequeno';
import '../styles/Home.css';
import '../styles/main.css';

export function Distribuicao() {
  return (
    <>
        <CTextoGrande text="Distribuições" class="fs-1 pl-5 fw-bold pt-5" />
        <CTextoPequeno text="Selecione a distribuição e veja os planos de estudos disponíveis para você em cada uma delas:" class="pl-5 fw-lighter mb-20"/>
        
        <div className="container text-left">
            <div className="row">
                <div className="col">
                    <CDistribuicao image="../assets/suse.svg" titulo="Distribuição 1" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CDistribuicao image="../assets/suse.svg" titulo="Distribuição 2" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CDistribuicao image="../assets/debian.svg" titulo="Distribuição 3" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
            </div>
        </div>
    </>
  );
}


