import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export function CConteudo(props) {
  return (
    <>
      <Card className="mx-auto" style={{ width: "18rem", backgroundColor: "#9400D3"}} >
        <img src={props.image} width={286} height={160} />
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
