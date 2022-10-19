import '../styles/Home.css';
import '../styles/main.css';
import CTextoGrande from '../components/CTextoGrande';
import CTextoPequeno from '../components/CTextoPequeno';
import { CConteudo } from '../components/CConteudo';
import LoggedNavBar from '../components/CLoggedNavBar';

export function VistoPorUltimo() {
  return (
    <>
    <LoggedNavBar />
       <CTextoGrande text="Visto por Último" class="pl-5 fw-bold pt-5"/>
       <CTextoPequeno text="Acompanhe abaixo o conteúdo sugerido, de acordo com o nivel de dificuldade" class="pl-5 fw-lighter mb-20"/>

       <div className="container text-left">
            <div className="row">
                <div className="col">
                    <CConteudo image="../assets/basico.png" titulo="Conteúdo 1" texto="Descrição sobre o conteúdo"/>
                </div>
                <div className="col">
                    <CConteudo image="../assets/intermediario.png" titulo="Conteúdo 2" texto="Descrição sobre o conteúdo"/>
                </div>
                <div className="col">
                    <CConteudo image="../assets/avancado.png" titulo="Conteúdo 3" texto="Descrição sobre o conteúdo"/>
                </div>
            </div>
        </div>

    </>
  );
}
