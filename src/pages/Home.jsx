import '../styles/Home.css';
import '../styles/main.css';
import { CNiveis } from '../components/CNiveis';
import api from '../api';
import ModalLogin from '../components/CModalLogin';
import Footer from '../components/CFooter';
import Header from '../components/CHeader';

function Home() {

  // Requisição ao serviço de listar usuários - Inicio

  async function getUsers() {
    var response = null;
    try {
      response = await api.get("/users/list", { headers: { "secretKey": "grupo6" } })
      console.log("getUsers: ", response.data)
      return response.data

    }
    catch (error) {
      console.log("[ERROR] - getUsers: ", error)
    }
  }

  // Chamando a função de requisição ao iniciar a página
  getUsers();

  // Requisição ao serviço de listar usuários - Fim

  return (
    <>
      <Header/>

      <div id="banner">
        <p>Democratizar, facilitar e transformar</p>
      </div>

      <div className="nuvem-palavras">
        <img src={"../assets/Educação.gif"} className="img-fluid" />
      </div>

      <div id="niveis">
        <CNiveis />
      </div>

      <div className="missao">
        <h1>Nossa Missão</h1>
        <p>O principal objetivo da LinUS é, além de democratizar o ensino, facilitar o entendimento sobre o sistema
          operacional Linux, transformando a visão que pessoas comuns têm sobre ele e suas distribuições</p>
      </div>

      <Footer />
    </>
  );
}

export default Home;


