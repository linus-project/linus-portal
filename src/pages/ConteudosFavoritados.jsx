import '../styles/Home.css';
import '../styles/main.css';
import CTextoGrande from '../components/CTextoGrande';
import CTextoPequeno from '../components/CTextoPequeno';
import { CConteudo } from '../components/CConteudo';
import LoggedNavBar from '../components/CLoggedNavBar';

export function ConteudosFavoritados() {
  return (
    <>
    <LoggedNavBar title={"Favoritados"}/>
       <CTextoGrande text="Conteúdos Favoritados" class="pl-5 fw-bold pt-5"/>
       <CTextoPequeno text="Acompanhe abaixo o conteúdo sugerido, de acordo com o nivel de dificuldade" class="pl-5 fw-lighter mb-20"/>

       <CTextoGrande
        text="Iniciante"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />
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

        <CTextoGrande
        text="Intermediário"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />
        <CTextoGrande
        text="Avançado"
        class="pl-5 fw-bold pt-5"
        color="#52BCBF"
      />
       
    </>
  );
}