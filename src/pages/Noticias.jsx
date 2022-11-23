import CNoticia1 from "../components/CNoticia1";
import CNoticia2 from "../components/CNoticia2";
import LoggedNavBar from "../components/CLoggedNavBar";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
export function Noticias() {
    return (
        <>
            <LoggedNavBar title={"Notícias"} />
            <CTextoGrande text="Notícias" class="pl-5 fw-bold pt-5" />
            <CTextoPequeno
                text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fu."
                class="pl-5 fw-lighter mb-20"
            />
            <div className="container">
                <CNoticia1 titulo="xxxxxx" subTitulo="xxx" textoPostagem="postado a 2 horas átras" />
                <CNoticia2 titulo="xxxxxx" subTitulo="xxx" textoPostagem="postado a 2 horas átras" />
            </div>
        </>
    )
}