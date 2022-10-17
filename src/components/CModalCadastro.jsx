import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
// import foto from '../assets/login.png';
import logoGit from '../assets/github.svg';
import { IconButton } from '@mui/material';
import api from '../api';
import { useState } from 'react';
// import logoFacebook from '../assets/facebook1.png';
// import logoGoogle from '../assets/google.png'


function ModalCadastro() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [genre, setGenre] = useState(null)
    const [bornDate, setBornDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [adminKey, setAdminKey] = useState(null)
    const [imageCode, setImageCode] = useState('')
    const [fkLevel, setFkLevel] = useState(1)

    async function addUser() {
        try {
            await api.post("/users/add",
                {
                    "name": name,
                    "username": username,
                    "email": email,
                    "password": password,
                    "genre": genre,
                    "bornDate": bornDate,
                    "phoneNumber": phoneNumber,
                    "adminKey": adminKey,
                    "imageCode": imageCode,
                    "fkLevel": fkLevel
                });
        }
        catch (error) {
            console.log("[ERROR] - addUser: ", error)
        }
    }

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                transform: 'translate(-50%, -50%)',
                width: '300',
                height: '85%',
                background: '#353333',
                boxShadow: 24,
                color: 'white',
                pt: 2,
                px: 4,
                pb: 3,
                borderRadius: 10
            }}>


                <h1 style={{ marginTop: '10' }}>Cadastro</h1>




                <Form style={{
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >


                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>




                        <FormGroup >

                            Nome

                            <Input onChange={name => setName(name.target.value)}
                                style={{
                                    width: '90%',
                                    height: 25,
                                    border: 'none',
                                    borderBottom: 'solid 3px #cdcdcd',
                                    borderColor: '#5CE1E6',
                                    backgroundColor: 'transparent'
                                }}
                                id="exampleName"
                                name="nome"
                                placeholder="Nome"
                                type="nome"
                            />

                            <Label for="exampleNAme">

                            </Label>
                        </FormGroup>

                        <FormGroup >
                            Usuário
                            <Input onChange={username => setUsername(username.target.value)}
                                style={{
                                    width: '90%',
                                    height: 25,
                                    border: 'none',
                                    borderBottom: 'solid 3px #cdcdcd',
                                    borderColor: '#5CE1E6',
                                    backgroundColor: 'transparent'
                                }}

                                id="exampleUsuario"
                                name="usuario"
                                placeholder="Usuario"
                            />
                            <Label for="exampleUsuario">

                            </Label>
                        </FormGroup>

                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>




                        <FormGroup >

                            E-mail

                            <Input onChange={email => setEmail(email.target.value)}
                                style={{
                                    width: '170%',
                                    height: 25,
                                    border: 'none',
                                    borderBottom: 'solid 3px #cdcdcd',
                                    borderColor: '#5CE1E6',
                                    backgroundColor: 'transparent'
                                }}
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <Label for="exampleEmail">

                            </Label>
                        </FormGroup>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>




                        <FormGroup >

                            Senha

                            <Input onChange={password => setPassword(password.target.value)}
                                style={{
                                    width: '90%',
                                    height: 25,
                                    border: 'none',
                                    borderBottom: 'solid 3px #cdcdcd',
                                    borderColor: '#5CE1E6',
                                    backgroundColor: 'transparent'
                                }}
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                            />
                            <Label for="examplePassword"></Label>
                        </FormGroup>





                        <FormGroup >
                            Confirmação Senha
                            <Input
                                style={{
                                    width: '90%',
                                    height: 25,
                                    border: 'none',
                                    borderBottom: 'solid 3px #cdcdcd',
                                    borderColor: '#5CE1E6',
                                    backgroundColor: 'transparent'
                                }}

                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                            />
                            <Label for="examplePassword">

                            </Label>


                        </FormGroup>

                    </div>






                    <Button
                        onClick={addUser}
                        style={{ marginTop: 20, width: 150, backgroundColor: '#5CE1E6', borderRadius: 10 }}>
                        Cadastrar
                    </Button>

                    <div style={{ marginTop: 10 }}>Cadastrar com:</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>



                        <IconButton style={{ height: 40, marginTop: 20 }}>

                            <img style={{ fontSize: '0', height: 40 }} alt="github" src={logoGit} />

                        </IconButton>
                        <IconButton style={{ height: 40, marginTop: 20 }}>

                            {/* <img style={{ fontSize: '0', height: 40 }} alt="logoFacebook" src={logoFacebook} /> */}

                        </IconButton>
                        <IconButton style={{ height: 40, marginTop: 20 }}>

                            {/* <img style={{ fontSize: '0', height: 40 }} alt="github" src={logoGoogle} /> */}

                        </IconButton>


                    </div>

                </Form>

            </div>

        </>
    )
}

export default ModalCadastro;