import '../styles/Home.css';
import '../styles/main.css';
import { CNiveis } from '../components/CNiveis';
import api from '../api';

function Home() {

  // Requisição ao serviço de listar usuários - Inicio

  async function getUsers(){
    var response = null;
    try {
      response = await api.get("/users/list", { headers: { "secretKey": "grupo6" } })
      console.log("getUsers: ", response.data)
      return response.data

    }
    catch(error) {
      console.log("[ERROR] - getUsers: ", error)
    }
  }

  // Chamando a função de requisição ao iniciar a página
  getUsers()

  // Requisição ao serviço de listar usuários - Inicio - fim

  return (
    <div className="Home ms-5 me-5">
      <CNiveis />
    </div>
  );
}

export default Home;
