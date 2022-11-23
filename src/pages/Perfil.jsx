import "../styles/Home.css";
import "../styles/main.css";
import Ellipse from "../assets/Ellipse.png";
import edit from "../assets/edit.svg";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import LoggedNavBar from "../components/CLoggedNavBar";
import profileImage from "../assets/users/0.png";
import {
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
import { useState } from "react";

export function Perfil() {

  sessionStorage.removeItem('ID_CONTENT');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(false);

  const level = { STARTER: 1, INTERMEDIARY: 2, ADVANCED: 3 };

  function getLevel() {
    if (sessionStorage.LEVEL == level.STARTER) {
      return "Iniciante";
    } else if (sessionStorage.LEVEL === level.INTERMEDIARY) {
      return "Intermediário";
    } else {
      return "Avançado";
    }
  }

  function isFilled() {
    if (username === "" || password === "") {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }

  return (
    <>
      <LoggedNavBar title={"Seu Perfil"} />
      <CTextoGrande text="Meu perfil" class="pl-5 fw-bold pt-5" />
      <CTextoPequeno
        text="Dados do usuário"
        class="pl-5 fw-lighter mb-20"
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                  defaultValue={sessionStorage.EMAIL}
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                  defaultValue={sessionStorage.bornDate}
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                  defaultValue="*********"
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
                <img src={edit} style={{ marginLeft: 10 }} alt="" />
                <Input
                  disabled={true}
                  onKeyUp={isFilled}
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
                  defaultValue="ex: (11) 99999-9999"
                  placeholder="ex: (11) 99999-9999"
                  marginTop="100"
                  type="text"
                />
                <Label for="telefone"></Label>
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
