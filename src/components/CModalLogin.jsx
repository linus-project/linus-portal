import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";
// import foto from '../assets/login.png';
// import logoGit from "../assets/github.svg";
import { IconButton } from "@mui/material";
import api from "../api";
// import logoFacebook from "../assets/facebook1.png";
import logoGoogle from "../assets/continuar-google.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ModalLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(false);
  const navigate = useNavigate();

  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  
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
      sessionStorage.ID_USER = result.data.idUser;
      sessionStorage.NAME = result.data.name;
      sessionStorage.EMAIL = result.data.email;
      sessionStorage.USERNAME = result.data.username;
      sessionStorage.IMAGE_CODE = result.data.imageCode;
      sessionStorage.LEVEL = result.data.fkLevel;
      sessionStorage.PHONE_NUMBER = result.data.phoneNumber;
      sessionStorage.BORN_DATE = result.data.bornDate;
      if (result.data.adminKey != null) {
        sessionStorage.IS_ADMIN = true;
      }
      try {
        var hasHistory = await api.get(
          `/content/history?idUser=${result.data.idUser}`
        );
        if (hasHistory.data.length === 0) {
          navigate("/distribuicoes");
        } else {
          navigate("visto-por-ultimo")
        }
      } catch (error) {
        console.log("[ERROR] - userLogin: ", error);
      }
    } else {
      // window.alert("Usuário ou senha senha incorretos!");
      Swal.fire({
        showCloseButton: true,
        showCancelButton: true,
        background: "#353333",
        color: "#fff",
        iconColor: "#C42A2A",
        icon: "error",
        title: "Usuário ou senha senha incorretos!",
        text: "Tente novamente.",
        confirmButtonColor: "#52bcbf",
      });
    }
  }

  const keyHandler = (event) => {
    if (event.keyCode === 13 && filled) {
      userLogin();
    }
  };

  function isFilled() {
    if (username === "" || password === "") {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }

  if (!signed) {
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
                onKeyDown={(event) => keyHandler(event)}
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
                onKeyDown={(event) => keyHandler(event)}
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

            {/* <div style={{ marginTop: 10 }}>Entrar com:</div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <IconButton style={{ height: 40, marginTop: 20 }}>
                <img
                  style={{ fontSize: "0", height: 40 }}
                  alt="github"
                  src={logoGit}
                />
              </IconButton> */}

              {/* <IconButton style={{ height: 40, marginTop: 20 }}>
                <img
                  style={{ fontSize: "0", height: 40 }}
                  alt="logoFacebook"
                  src={logoFacebook}
                />
              </IconButton> */}
              <IconButton
                onClick={handleLoginFromGoogle}
                style={{ height: 40, marginTop: 20 }}
              >
                <img
                  style={{ fontSize: "0", height: 40 }}
                  alt="gogle"
                  src={logoGoogle}
                />
              </IconButton>
            </div>

            {/* <div style={{ marginTop: 10 }}>Cadastre-se</div> */}
          </Form>
        </div>
      </>
    );
  } else {
    return <Navigate to="/visto-por-ultimo" />;
  }
}

export default ModalLogin;
