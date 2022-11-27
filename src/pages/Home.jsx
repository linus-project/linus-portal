import '../styles/Home.css';
import '../styles/main.css';
import { CNiveis } from '../components/CNiveis';
import api from '../api';
import Footer from '../components/CFooter';
import Header from '../components/CHeader';

export function Home() {

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

      <div className='banner' id="banner">
        <p className='slogan'>Democratizar, facilitar e transformar</p>
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

      {/* <div class="em-alta" id="secao-em-alta">
        <h2>Notícias em alta</h2>
      </div> */}

      <div class="distribuicoes" id="secao-distribuicoes">
        <h2>Principais Distribuições</h2>
        <p>Confira as principais distribuições abordadas na nossa plataforma.</p>
        <div class="distros-img">
            <div class=" distro-img-style img-fedora"></div>
            <div class=" distro-img-style img-ubuntu"></div>
            <div class=" distro-img-style img-mint"></div>
            <div class=" distro-img-style img-debian"></div>
            <div class=" distro-img-style img-suse"></div>
            <div class=" distro-img-style img-arch"></div>
            <div class=" distro-img-style img-brasil"></div>
        </div>
    </div>

    <div class="redes-sociais" id="secao-contatos">
        <div class="sociais-esquerda">
            <div class="img-e-user">
                <div class="img-social img-insta"></div>
                <p><a href="">@linustecnologia</a></p>
            </div>
            <div class="img-e-user">
                <div class="img-social img-linkedin"></div>
                <p><a href="">www.linkedin.com/in/linustecnologia</a></p>
            </div>
            <div class="img-e-user">
                <div class="img-social img-discord"></div>
                <p><a href="">@linustecnologia</a></p>
            </div>
            <div class="img-e-user">
                <div class="img-social img-twitter"></div>
                <p><a href="">@linUS</a></p>
            </div>
            <div class="img-e-user">
                <div class="img-social img-git"></div>
                <p><a href="">https://github.com/linusrepositories</a></p>
            </div>
        </div>
        <div class="sociais-direita">
            <p>Quer ficar de olho em nossas redes sociais? <br/> Acompanhe-nos!</p>
        </div>
    </div>

      <Footer />
    </>
  );
}



