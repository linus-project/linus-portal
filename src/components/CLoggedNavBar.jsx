import React from "react";
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

function LoggedNavBar() {

  if (sessionStorage.USERNAME === undefined) {
    window.location.href = "http://localhost:3000";
    return (window.alert("É necessário se autenticar para acessar esta página"))
  }

  function loggout() {
    sessionStorage.clear();
    window.location.href = "http://localhost:3000";
  }

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid className="justify-content-center">
        <Row className="navbar-row" sm={1} lg={4}>
          <Col lg={1} className="mt-1">
            <Navbar.Brand href="#">
              <img
                src={"../assets/logo-svg.svg"}
                width="108"
                alt="Logo linus"
              />
            </Navbar.Brand>
          </Col>
          <Col lg={7}>
            <Form className="d-flex">
              <Form.Control
                type="Search"
                placeholder="Search"
                aria-controls="Search"
                className="mt-1"
              />
            </Form>
          </Col>
          <Col lg={1}>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="my-3"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <NavDropdown
                    title="Perfil"
                    id="collapsible-nav-dropdown"
                    className="navbar-dropdown mt-1 mr-3"
                  >
                    <NavDropdown.Item href=".">Seu Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="./Distribuicoes">
                      Distribuições
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="./Conteudos">
                      Conteúdos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="./visto-por-ultimo">
                      Vistos por ultimo
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#acao1.3">
                      Favoritos
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
            <Navbar.Brand href="#home">
              <div className="div-imagem-perfil"></div>
              {/* <img 
                            src={"../assets/user.svg"}
                            width="30"
                            border-radius="50%"
                            alt="Logo linus"
                           /> */}
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default LoggedNavBar;
