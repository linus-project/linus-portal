import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useState } from "react";
// import foto from '../assets/login.png';
import logoGit from "../assets/github.svg";
import { IconButton } from "@mui/material";
import api from "../api";
import logoFacebook from "../assets/facebook1.png";
import logoGoogle from "../assets/google.png";
import { useNavigate } from "react-router-dom";

function ModalLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(false);
  const navigate = useNavigate();

  async function userLogin(login) {
    var success = false;
    var result = null;
    try {
      result = await api.post("/login/username", {
        username: username,
        password: password,
      });
      success = true;
    } catch (error) {
      console.log("[ERROR] - userLogin: ", error);
      success = false;
    }
    if (success === true) {
      sessionStorage.USERNAME = result.data.username;
      sessionStorage.IMAGE_CODE = result.data.imageCode;
      sessionStorage.LEVEL = result.data.fkLevel;
      navigate("/distribuicoes")
    } else {
      window.alert("Usuário ou senha senha incorretos!");
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
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: "85%",
          background: "#303030",
          boxShadow: 24,
          color: "white",
          pt: 2,
          px: 4,
          pb: 3,
          borderRadius: 10,
        }}
      >
        <h1 style={{ marginTop: 18 }}>Login</h1>

        <Form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormGroup floating style={{ marginTop: 20 }}>
            USUÁRIO
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
                boxShadow: "none"
              }}
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail"></Label>
          </FormGroup>

          <FormGroup floating>
            SENHA
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
                  boxShadow: "none"
              }}
              id="examplePassword"
              name="password"
              placeholder="Password"
              marginTop="100"
              type="password"
            />
            <Label for="examplePassword"></Label>
          </FormGroup>

          <Button
            disabled={!filled}
            onClick={userLogin}
            style={{
              marginTop: 20,
              width: 150,
              backgroundColor: "#5ce1e6",
              borderRadius: 10,
            }}
          >
            Entrar
          </Button>

          <div style={{ marginTop: 10 }}>Entrar com:</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton style={{ height: 40, marginTop: 20 }}>
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
            </IconButton>
            <IconButton style={{ height: 40, marginTop: 20 }}>
              <img
                style={{ fontSize: "0", height: 40 }}
                alt="github"
                src={logoGoogle}
              />
            </IconButton>
          </div>

          <div style={{ marginTop: 10 }}>Cadastre-se</div>
        </Form>
      </div>
    </>
  );
}

export default ModalLogin;
