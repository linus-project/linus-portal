import "../styles/Home.css";
import "../styles/main.css";
import Ellipse from "../assets/Ellipse.png";
import edit from "../assets/edit.svg";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import LoggedNavBar from "../components/CLoggedNavBar";
import profileImage from "../assets/users/avatar.png";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../api";
import { useNavigate } from "react-router-dom";

export function Perfil() {
  sessionStorage.removeItem("ID_CONTENT");

  const rawPhoneNumber = sessionStorage.PHONE_NUMBER;
  const navigate = useNavigate();
  const formatedPhoneNumber = `(${rawPhoneNumber.substring(
    0,
    2
  )}) ${rawPhoneNumber.substring(2, 7)}-${rawPhoneNumber.substring(7, 15)}`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(sessionStorage.EMAIL);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [bornDate, setBornDate] = useState(sessionStorage.BORN_DATE);
  const [editing, setEditing] = useState(false);
  const [editButtons, setEditButtons] = useState("");
  const level = { STARTER: 1, INTERMEDIARY: 2, ADVANCED: 3 };

  useEffect(() => {
    if (sessionStorage.PHONE_NUMBER != "") {
      setPhoneNumber(formatedPhoneNumber);
    } else {
      setPhoneNumber("ex: (11) 99999-9999");
    }
    if (sessionStorage.BORN_DATE == null) {
      setBornDate(null);
    }
  }, []);

  function getLevel() {
    if (sessionStorage.LEVEL == level.STARTER) {
      return "Iniciante";
    } else if (sessionStorage.LEVEL === level.INTERMEDIARY) {
      return "Intermediário";
    } else {
      return "Avançado";
    }
  }

  async function saveEdit() {
    const { value: password } = await Swal.fire({
      showCloseButton: true,
      showCancelButton: true,
      background:"#353333",
      color:"#fff",
      title: "Tem certeza?",
      input: "password",
      inputLabel: "Digite sua senha para confirmar",
      showCancelButton: true,
      confirmButtonColor: "#52bcbf",
      confirmButtonText: "Salvar Alterações",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#C42A2A",
      inputPlaceholder: "Digite sua senha",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    if (password) {
      var success = false;
      try {
        await api.post('/users/edit', {
          name: document.getElementById("nome").value,
          username: sessionStorage.USERNAME,
          newUsername: document.getElementById("usuario").value,
          email: document.getElementById("email").value,
          password: password,
          newPassword: document.getElementById("senha").value,
          phoneNumber: document.getElementById("telefone").value,
          bornDate: document.getElementById("nascimento").value
        });
        setEditing(false);
        setEditButtons("");
        success = true;
      } catch (error) {
        // window.alert(error.response.data.message)
        Swal.fire({
          showCloseButton: true,
          showCancelButton: true,
          background:"#353333",
          color:"#fff",
          iconColor:"#C42A2A",
          icon: 'error',
          title: 'Senha incorreta!',
          text: 'Tente novamente.',
          confirmButtonColor: "#52bcbf"
        })
      }
    }
    if (success) {
      // window.alert("Alterações salvas com sucesso")
      Swal.fire({
        showCloseButton: true,
        showCancelButton: true,
        background:"#353333",
        howCancelButton: true,
        color:"#fff",
        confirmButtonColor: "#52bcbf",
        title:'Deu tudo certo!',
        text:'Alterações salvas com sucesso',
        icon:'success'
      })
      sessionStorage.NAME = document.getElementById("nome").value;
      sessionStorage.USERNAME = document.getElementById("usuario").value;
      sessionStorage.EMAIL = document.getElementById("email").value;
      sessionStorage.BORN_DATE = document.getElementById("nascimento").value;
      if (document.getElementById("telefone").value != "ex: (11) 99999-9999") {
        sessionStorage.PHONE_NUMBER = document.getElementById("telefone").value;
      }
      navigate(0);
    }
  }

  function cancelEdit() {
    setEditing(false);
    setEditButtons("");
    document.getElementById("nome").value = sessionStorage.NAME;
    document.getElementById("usuario").value = sessionStorage.USERNAME;
    document.getElementById("email").value = sessionStorage.EMAIL;
    document.getElementById("senha").value = "default";

    if (sessionStorage.PHONE_NUMBER != "") {
      document.getElementById("telefone").value = formatedPhoneNumber;
    } else {
      document.getElementById("telefone").value = "ex: (11) 99999-9999";
    }
    if (sessionStorage.BORN_DATE != null) {
      document.getElementById("nascimento").value = sessionStorage.BORN_DATE;
    } else {
      document.getElementById("nascimento").value = undefined;
    }
  }

  function editProfile() {
    setEditing(true);
    setEditButtons(
      <>
        <Button
          onClick={() => cancelEdit()}
          style={{
            marginTop: 20,
            width: 150,
            backgroundColor: "#707172",
            borderRadius: 10,
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={() => saveEdit()}
          style={{
            marginTop: 20,
            marginLeft: 5,
            width: 150,
            backgroundColor: "#5ce1e6",
            borderRadius: 10,
          }}
        >
          Salvar
        </Button>
      </>
    );
    return;
  }

  return (
    <>
      <LoggedNavBar title={"Seu Perfil"} />
      <CTextoGrande text="Seu perfil" class="pl-5 fw-bold pt-5" />
      <CTextoPequeno
        text="Dados do usuário"
        subtext={<img onClick={() => editProfile()} src={edit} alt="" />}
        class="edit-image pl-5 fw-lighter"
      />
      <div className="container mb-5">
        <Row>
          <Col md="4" className="mt-5">
            <Form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
                style={{ marginTop: 20 }}
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Nome</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(username) => setUsername(username.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="nome"
                  defaultValue={sessionStorage.NAME}
                  name="nome"
                  placeholder="Nome completo"
                  type="text"
                />
                <Label for="exampleEmail"></Label>
              </FormGroup>

              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Email</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(password) => setPassword(password.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="email"
                  name="email"
                  defaultValue={email}
                  placeholder="ex: nome@linus.com"
                  marginTop="100"
                  type="email"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>

              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Data de Nascimento</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(password) => setPassword(password.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="nascimento"
                  name="nascimento"
                  defaultValue={bornDate}
                  placeholder="ex: 11/11/2000"
                  marginTop="100"
                  type="date"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>
            </Form>
          </Col>
          <Col md="4" className="mt-5">
            <Form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
                style={{ marginTop: 20 }}
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Usuário</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(username) => setUsername(username.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  defaultValue={sessionStorage.USERNAME}
                  id="usuario"
                  name="usuario"
                  placeholder="Nome do usuário"
                  type="text"
                ></Input>
                <Label for="exampleEmail"></Label>
              </FormGroup>

              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Senha</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(password) => setPassword(password.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="senha"
                  name="senha"
                  defaultValue="default"
                  placeholder="*********"
                  marginTop="100"
                  type="password"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>

              <FormGroup
                floating
                className="d-flex flex-wrap align-items-start"
              >
                <p style={{ color: "#5ce1e6" }}>
                  <b>Telefone</b>
                </p>
                <img src={edit} style={{ marginLeft: 10, opacity: 0 }} alt="" />
                <Input
                  disabled={!editing}
                  onChange={(password) => setPassword(password.target.value)}
                  style={{
                    width: 300,
                    height: 25,
                    paddingBottom: 18,
                    color: "white",
                    border: "none",
                    borderBottom: "solid 3px #cdcdcd",
                    borderColor: "#5ce1e6",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  id="telefone"
                  name="telefone"
                  defaultValue={phoneNumber}
                  placeholder="ex: (11) 99999-9999"
                  marginTop="100"
                  type="text"
                />
                <Label for="telefone"></Label>
                <span class="mt-1">{editButtons}</span>
              </FormGroup>
            </Form>
          </Col>
          <Col md="2">
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <img src={profileImage} alt="" style={{ width: "100%" }} />
                <CardTitle className="text-center pt-4" tag="h5">
                  {sessionStorage.NAME}
                </CardTitle>
                <CardText className="text-center" style={{ color: "#9400D3" }}>
                  {sessionStorage.USERNAME}
                </CardText>
                <CardText className="text-center" style={{ color: "#5ce1e6" }}>
                  {getLevel()}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
