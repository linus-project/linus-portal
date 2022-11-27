import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";

export function CConteudo(props) {

  const navigate = useNavigate();

  function redirectToContent() {
    sessionStorage.ID_CONTENT = props.idContent;
    return navigate(`/conteudo`);
  }

  return (
    <>
      <Card
        onClick={() => redirectToContent()}
        className="mx-auto"
        style={{ width: "18rem", backgroundColor: "#9400D3", cursor: "pointer" }}
      >
        <img src={props.image} width={286} height={200} />
        <CardBody  style={{backgroundColor: "#9400D3"}}  >
          <CardTitle tag="h4" style={{color: "#52BCBF"}}>{props.titulo}</CardTitle>
          <CardText>
            <p className="text-light">{props.texto}</p>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}
