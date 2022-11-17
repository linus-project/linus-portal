import "../styles/Home.css";
import "../styles/main.css";
import Ellipse from "../assets/Ellipse.png";
import edit from "../assets/edit.svg";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import LoggedNavBar from "../components/CLoggedNavBar";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(false);

  function isFilled() {
    if (username === "" || password === "") {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }

  return (
    <>
      <LoggedNavBar title={"Seu perfil"} />
      <CTextoGrande text="Seu perfil" class="pl-5 fw-bold pt-5" />
      <CTextoPequeno
        text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fu."
        class="pl-5 fw-lighter mb-20"
      />
      <div className="container">
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
              <FormGroup floating className="d-flex flex-wrap align-items-start"style={{ marginTop: 20 }}>
                <p style={{ color: "#5ce1e6" }}><b>Nome</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
                  name="nome"
                  placeholder="Nome completo"
                  type="text"
                />
                <Label for="exampleEmail"></Label>
              </FormGroup>

             <FormGroup floating className="d-flex flex-wrap align-items-start">
                <p style={{ color: "#5ce1e6" }}><b>Email</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
                  placeholder="ex: nome@linus.com"
                  marginTop="100"
                  type="email"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>

             <FormGroup floating className="d-flex flex-wrap align-items-start">
                <p style={{ color: "#5ce1e6" }}><b>Data de Nascimento</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
              <FormGroup floating className="d-flex flex-wrap align-items-start"style={{ marginTop: 20 }}>
                <p style={{ color: "#5ce1e6" }}><b>Usuário</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
                  id="usuario"
                  name="usuario"
                  placeholder="Nome do usuário"
                  type="text"
                >
                </Input>
                <Label for="exampleEmail"></Label>
              </FormGroup>

             <FormGroup floating className="d-flex flex-wrap align-items-start">
                <p style={{ color: "#5ce1e6" }}><b>Senha</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
                  placeholder="*********"
                  marginTop="100"
                  type="password"
                />
                <Label for="examplePassword"></Label>
              </FormGroup>

             <FormGroup floating className="d-flex flex-wrap align-items-start">
                <p style={{ color: "#5ce1e6"}}><b>Telefone</b></p>
                <img src={edit} style={{marginLeft: 10}}alt="" />
                <Input
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
                <img src={Ellipse} alt="" style={{ width: "100%" }} />
                <CardTitle className="text-center pt-4" tag="h5">Nome Sobrenome</CardTitle>
                <CardText className="text-center" style={{color: "#9400D3",}}>
                  Usuário
                </CardText>
                <CardText className="text-center" style={{color: "#5ce1e6"}}>
                  Nivel do perfil
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
