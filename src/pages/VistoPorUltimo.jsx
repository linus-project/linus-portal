import '../styles/Home.css';
import '../styles/main.css';
import CTextoGrande from '../components/CTextoGrande';
import CTextoPequeno from '../components/CTextoPequeno';
import { CConteudo } from '../components/CConteudo';

export function VistoPorUltimo() {
  return (
    <>
       <CTextoGrande text="Visto por Último" class="pl-5 fw-bold pt-5"/>
       <CTextoPequeno text="Acompanhe abaixo o conteúdo sugerido, de acordo com o nivel de dificuldade" class="pl-5 fw-lighter mb-20"/>

       <div className="container text-left">
            <div className="row">
                <div className="col">
                    <CConteudo image="../assets/basico.png" titulo="Distribuição 1" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CConteudo image="../assets/intermediario.png" titulo="Distribuição 2" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
                <div className="col">
                    <CConteudo image="../assets/avancado.png" titulo="Distribuição 3" texto="Texto de texto para ver se está funcionando perfeitamente"/>
                </div>
            </div>
        </div>

    </>
  );
}
