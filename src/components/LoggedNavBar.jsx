import React from "react";
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";


function LoggedNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container fluid className="justify-content-center">
                <Row className="w-100 justify-content-between" sm={1} lg={4}>
                    <Col lg={1} className="mt-1">
                        <Navbar.Brand href="#home">LINUS</Navbar.Brand>
                    </Col>
                    <Col lg={7}>
                        <Form className="d-flex">
                            <Form.Control
                                type="Search"
                                placeholder="Search"
                                aria-controls="Search"
                                className="me-3"
                            />
                            <Button variant="outline-success">Procurar</Button>
                        </Form>
                    </Col>
                    <Col lg={1}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="my-3" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item>
                                    <NavDropdown title="Perfil" id="collapsible-nav-dropdown" className="mb-1 me-1">
                                        <NavDropdown.Item href="#acao1.1">acao 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#acao1.2">acao 2</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#acao1.3">acao 3</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button variant="outline-danger">Sair</Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col lg={1} className="mt-1">
                        <Navbar.Brand href="#home">FOTO</Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default LoggedNavBar;