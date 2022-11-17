import CNoticia1 from "../components/CNoticia1";
import LoggedNavBar from "../components/CLoggedNavBar";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import { Row } from "reactstrap";
export function Noticias() {
    return (
        <>
            <LoggedNavBar title={"Notícias"} />
            <CTextoGrande text="Notícias" class="pl-5 fw-bold pt-5" />
            <CTextoPequeno
                text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fu."
                class="pl-5 fw-lighter mb-20"
            />
            <Row>
                <CNoticia1 />
            </Row>
        </>
    )
}