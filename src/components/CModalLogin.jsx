import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useState } from 'react';
// import foto from '../assets/login.png';
import logoGit from '../assets/github.svg';
import { IconButton } from '@mui/material';
import api from '../api';
// import logoFacebook from '../assets/facebook.png';
// import logoGoogle from '../assets/google.png'

function ModalLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function userLogin(login) {
        try {
            await api.post("/login/username",
                {
                    "username": username,
                    "password": password
                });
        }
        catch (error) {
            console.log("[ERROR] - userLogin: ", error)
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
                width: 400,
                height: '85%',
                background: '#353333',
                boxShadow: 24,
                color: 'white',
                pt: 2,
                px: 4,
                pb: 3,
                borderRadius: 10
            }}>


                <h1 style={{ marginTop: 18 }}>Login</h1>




                <Form style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <FormGroup floating style={{ marginTop: 20 }}>

                        USUÁRIO

                        <Input onChange={username => setUsername(username.target.value)}
                            style={{
                                width: 300,
                                height: 25,
                                color: 'white',
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





                    <FormGroup floating>
                        SENHA
                        <Input onChange={password => setPassword(password.target.value)}
                            style={{
                                width: 300,
                                height: 25,
                                color: 'white',
                                border: 'none',
                                borderBottom: 'solid 3px #cdcdcd',
                                borderColor: '#5CE1E6',
                                backgroundColor: 'transparent'
                            }}

                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            marginTop="100"
                            type="password"
                        />
                        <Label for="examplePassword">

                        </Label>
                    </FormGroup>

                    <Button onClick={userLogin} style={{ marginTop: 20, width: 150, backgroundColor: '#5CE1E6', borderRadius: 10 }}>
                        Entrar
                    </Button>

                    <div style={{ marginTop: 10 }}>Entrar com:</div>

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



                    <div style={{ marginTop: 10 }}>Cadastre-se</div>

                </Form>

            </div>


        </>
    )
}

export default ModalLogin;