import { CDistribuicao } from '../components/CDistribuicao';
import CTextoGrande from '../components/CTextoGrande';
import CTextoPequeno from '../components/CTextoPequeno';
import '../styles/Home.css';
import '../styles/main.css';

export function Distribuicao() {
  return (
    <>
        <CTextoGrande text="olá mundo" class="pl-5 fw-bold" />
        <CTextoPequeno text="mundinho" class="pl-5 fw-lighter mb-20"/>
        
        <div className="container text-left">
            <div className="row">
                <div className="col">
                    <CDistribuicao image="../assets/computadorHome.png" titulo="Distribuição 1" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CDistribuicao image="../assets/computadorHome.png" titulo="Distribuição 2" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CDistribuicao image="../assets/computadorHome.png" titulo="Distribuição 3" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
            </div>
        </div>
    </>
  );
}


