import { Col, Container, Form, Row } from "react-bootstrap";
import LoggedNavBar from "../components/LoggedNavBar";


function UserProfile() {
    return (
        <>
            <LoggedNavBar />
            <Container fluid className="vh-100">
                <Row className="mt-4 ml-4 h-25 d-flex align-items-end bg-success">
                    <h1>Seu Perfil</h1>
                    <h4>Aqui voce pode ver e alterar as informações do seu perfil</h4>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label className="text-light">Nome</Form.Label>
                                <Form.Control type="name" placeholder="Digite seu nome completo" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="text-light">E-mail</Form.Label>
                                <Form.Control type="email" placeholder="ex:nome@exemplo.com" />
                            </Form.Group>
                            <Form.Label className="text-light">Data de Nascimento</Form.Label>
                            <Form.Control type="birthday" placeholder="ex: 01/01/2022git " />
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile;