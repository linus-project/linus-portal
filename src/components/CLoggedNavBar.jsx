import { React, useState, useRef, useEffect } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "../styles/navbar.css";
import "../assets/logo-svg.svg";
import "../assets/user.svg";
import { useNavigate } from "react-router-dom";
import api from "../api";

function LoggedNavBar(props) {
  const [searchListModal, setSearchListModal] = useState("");
  const [searchList, setSearchList] = useState("");

  const navigate = useNavigate();

  if (sessionStorage.USERNAME === undefined) {
    navigate("/");
    return window.alert("É necessário se autenticar para acessar esta página");
  }

  function redirectToContent(idContent) {
    if(sessionStorage.ID_CONTENT != undefined) {
      sessionStorage.ID_CONTENT = idContent;
      return navigate(0);
    }
    sessionStorage.ID_CONTENT = idContent;
    return navigate(`/conteudo`);
  }

  async function getContent(contentTitle) {
    try {
      var result = await api.get(`/content?contentTitle=${contentTitle}`);
      setSearchList(result.data);
      enableSearchList(contentTitle, result.data);
    } catch (error) {
      console.log("[ERROR] - getContent(): ", error);
    }
  }

  function enableSearchList(contentTitle, contentList) {
    if (contentTitle !== "" && contentList != "") {
      setSearchListModal(
        <>
          <Card
            className={"position-absolute"}
            style={{ marginLeft: "31vh", width: "60%" }}
          >
            <CardBody
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {searchList.slice(0, 5).map((content) => {
                return (
                  <>
                    <CardText
                      key={content.idContent}
                      onClick={() => redirectToContent(content.idContent)}
                      style={{ cursor: "pointer" }}
                    >
                      {content.contentTitle}
                    </CardText>
                  </>
                );
              })}
              <CardText style={{ color: "#9400d3", cursor: "pointer" }}>
                Ver mais...
              </CardText>
            </CardBody>
          </Card>
        </>
      );
    } else {
      setSearchListModal("");
    }
  }

  function loggout() {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Navbar className="navbar-logged" collapseOnSelect expand="lg">
        <Container fluid className="justify-content-center">
          <Row className="navbar-row" sm={1} lg={4}>
            <Col lg={1} className="mt-1">
              <Navbar.Brand href="#">
                <img
                  className="linus-logo"
                  src={"../assets/logo-svg.svg"}
                  width="108"
                  alt="Logo linus"
                />
              </Navbar.Brand>
            </Col>
            <Col lg={7}>
              <Form className="d-flex">
                <Form.Control
                  onKeyUp={(content) => getContent(content.target.value)}
                  type="input"
                  placeholder="Pesquisar"
                  aria-controls="Search"
                  className="mt-1"
                  style={{ boxShadowColor: "#ffffff" }}
                />
              </Form>
            </Col>
            <Col lg={1}>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="my-3"
              />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >
                  <Nav.Item >
                    <NavDropdown
                      title={props.title}
                      id="collapsible-nav-dropdown"
                      className="navbar-dropdown mt-1 mr-3"
                    >
                      <NavDropdown.Item onClick={() => navigate("/perfil")}>
                        Seu Perfil
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item 
                        onClick={() => navigate("/distribuicoes")}
                      >
                        Distribuições
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => navigate("/conteudos")}>
                        Conteúdos
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => navigate("/visto-por-ultimo")}
                      >
                        Vistos por Último
                      </NavDropdown.Item> */}

                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => navigate("/conteudos-favoritados")}
                      >
                        Favoritados
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => navigate("/noticias")}
                      >
                        Notícias
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => navigate("/hotsite")}
                      >
                        Mais Serviços
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Item>
                  <Nav.Item>
                    <Button
                      onClick={loggout}
                      className="exit-button mt-1"
                      variant="outline-danger"
                    >
                      Sair
                    </Button>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col lg={1} className="mt-1">
              {/* <Navbar.Brand href="#home">
              <div className="div-imagem-perfil"></div>
            </Navbar.Brand> */}
            </Col>
          </Row>
        </Container>
      </Navbar>

      {searchListModal}
    </>
  );
}

export default LoggedNavBar;
