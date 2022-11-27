import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Row
} from "reactstrap";
export function CNoticia2(props) {
return (
    <Row>
        <Card className="my-2" style={{backgroundColor:"#353333"}}>
            <CardImg
                alt={props.alt}
                src={props.imagem}
                style={{
                    height: 180
                }}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h4" style={{color:"#fff"}}>
                {props.titulo}
                </CardTitle>
                <CardText style={{color:"#fff"}}>
                {props.subTitulo}
                </CardText>
                <CardText>
                    <small className="text-muted">
                    {props.textoPostagem}
                    </small>
                </CardText>
            </CardBody>
        </Card>
    </Row>
)
}
export default CNoticia2;