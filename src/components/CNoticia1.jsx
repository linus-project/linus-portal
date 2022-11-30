import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Row
} from "reactstrap";
export function CNoticia1(props) {
    return (
        <Row>
            <Card className="my-2" style={{backgroundColor:"#353333"}}>
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
                <CardImg
                    alt={props.alt}
                    bottom
                    src={props.imagem}
                    style={{
                        height: 130,
                        width: '99%',
                        marginLeft: 6,
                        marginBottom: "2vh"
                    }}
                    width="100%"
                />
            </Card>
        </Row>
    )
}
export default CNoticia1;