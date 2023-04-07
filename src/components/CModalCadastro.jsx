import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// import foto from '../assets/login.png';
import logoGit from "../assets/github.svg";
import { IconButton } from "@mui/material";
import api from "../api";
import { useContext, useState } from "react";
import logoFacebook from "../assets/facebook1.png";
import logoGoogle from "../assets/continuar-google.svg";
import { useNavigate } from "react-router-dom";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";

function ModalCadastro() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function handleLoginFromGoogle() {
    await signInGoogle();
  }

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [genre, setGenre] = useState(null);
  const [bornDate, setBornDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adminKey, setAdminKey] = useState(null);
  const [imageCode, setImageCode] = useState("");
  const [fkLevel, setFkLevel] = useState(1);
  const [filled, setFilled] = useState(false);

  const keyHandler = (event) => {
    if (event.keyCode === 13 && filled) {
      addUser();
    }
  };

  async function addUser() {
    var result = null;
    var success = false;
    try {
      result = await api.post("/users/add", {
        name: name,
        username: username,
        email: email,
        password: password,
        genre: genre,
        bornDate: bornDate,
        phoneNumber: phoneNumber,
        adminKey: adminKey,
        imageCode: imageCode,
        fkLevel: fkLevel,
      });
      // window.alert("Cadastrado com sucesso!");
      Swal.fire({
        showCloseButton: true,
        // showCancelButton: true,
        background: "#353333",
        color: "#fff",
        confirmButtonColor: "#52bcbf",
        title: "Deu tudo certo!",
        text: "Cadastrado com sucesso",
        icon: "success",
      });
      success = true;
    } catch (error) {
      console.log("[ERROR] - addUser: ", error);
      // window.alert("Erro ao realizar o cadastro!");
      Swal.fire({
        showCloseButton: true,
        // showCancelButton: false,
        background: "#353333",
        color: "#fff",
        iconColor: "#C42A2A",
        icon: "error",
        title: "Erro ao realizar o cadastro",
        text: "Tente novamente.",
        confirmButtonColor: "#52bcbf",
      });
    }
    if (success == true) {
      sessionStorage.ID_USER = result.data.idUser;
      sessionStorage.NAME = result.data.name;
      sessionStorage.EMAIL = result.data.email;
      sessionStorage.USERNAME = result.data.username;
      sessionStorage.IMAGE_CODE = result.data.imageCode;
      sessionStorage.LEVEL = result.data.fkLevel;
      sessionStorage.PHONE_NUMBER = result.data.phoneNumber;
      sessionStorage.BORN_DATE = result.data.bornDate;
      navigate("/perfil");
      // window.alert("")
      Swal.fire({
        title: 'Seja bem-vindo!',
        text: 'Você esta preparado para aprender cada vez mais? Complete seu cadastro e comece a navegar!',
        confirmButtonColor: "#52bcbf",
        confirmButtonText: "Vamos lá!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      // window.alert("Preencha os campos corretamente!");
      Swal.fire({
        showCloseButton: true,
        showCancelButton: true,
        background: "#353333",
        color: "#fff",
        iconColor: "#C42A2A",
        icon: "error",
        title: "Erro ao realizar o cadastro",
        text: "Preencha os campos corretamente!",
        confirmButtonColor: "#52bcbf",
      });
    }
  }

  function isFilled() {
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }

  if (!signed) {
    return (
      <>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transform: "translate(-50%, -50%)",
            width: "300",
            height: "85%",
            background: "#353333",
            boxShadow: 24,
            color: "white",
            pt: 2,
            px: 4,
            pb: 3,
            borderRadius: 10,
          }}
        >
          <h1 style={{ marginTop: "10" }}>Cadastro</h1>

          <Form
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FormGroup>
                Nome
                <Input
                  onKeyUp={isFilled}
                  onChange={(name) => setName(name.target.value)}
                  onKeyDown={(event) => keyHandler(event)}
                  style={{
                    width: "90%",
                    height: 25,
                    paddingBottom: 18,
                    border: "none",
                    color: "white",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="exampleName"
                  name="nome"
                  placeholder="Nome"
                  type="nome"
                />
                <Label for="exampleNAme"></Label>
              </FormGroup>

              <FormGroup>
                Usuário
                <Input
                  onKeyUp={isFilled}
                  onChange={(username) => setUsername(username.target.value)}
                  onKeyDown={(event) => keyHandler(event)}
                  style={{
                    width: "90%",
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="exampleUsuario"
                  name="usuario"
                  placeholder="Usuario"
                />
                <Label for="exampleUsuario"></Label>
              </FormGroup>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <FormGroup>
                E-mail
                <Input
                  onKeyUp={isFilled}
                  onChange={(email) => setEmail(email.target.value)}
                  onKeyDown={(event) => keyHandler(event)}
                  style={{
                    width: "170%",
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <Label for="exampleEmail"></Label>
              </FormGroup>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FormGroup>
                Senha
                <Input
                  onKeyUp={isFilled}
                  onChange={(password) => setPassword(password.target.value)}
                  onKeyDown={(event) => keyHandler(event)}
                  style={{
                    width: "90%",
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="examplePassword"
                  name="password"
                  placeholder="Senha"
                  type="password"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>

              <FormGroup>
                Confirmação Senha
                <Input
                  onKeyUp={isFilled}
                  onChange={(password) =>
                    setConfirmPassword(password.target.value)
                  }
                  onKeyDown={(event) => keyHandler(event)}
                  style={{
                    width: "90%",
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="examplePassword"
                  placeholder="Senha"
                  name="password"
                  type="password"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>
            </div>

            <Button
              disabled={!filled}
              onClick={addUser}
              style={{
                marginTop: 20,
                width: 150,
                backgroundColor: "#5ce1e6",
                borderRadius: 10,
              }}
            >
              Cadastrar
            </Button>

            {/* <div style={{ marginTop: 10 }}>Cadastrar com:</div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <IconButton style={{ height: 40, marginTop: 20 }}>
              <img
                style={{ fontSize: "0", height: 40 }}
                alt="github"
                src={logoGit}
              />
            </IconButton>
            <IconButton style={{ height: 40, marginTop: 20 }}>
              <img
                style={{ fontSize: "0", height: 40 }}
                alt="logoFacebook"
                src={logoFacebook}
              />
            </IconButton> */}
              <IconButton
                onClick={handleLoginFromGoogle}
                style={{ height: 40, marginTop: 20 }}
              >
                <img
                  style={{ fontSize: "0", height: 40 }}
                  alt="google"
                  src={logoGoogle}
                />
              </IconButton>
            </div>
          </Form>
        </div>
      </>
    );
  } else {
    return <Navigate to="/visto-por-ultimo" />;
  }
}

export default ModalCadastro;
