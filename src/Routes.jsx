import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Distribuicao } from "./pages/Distribuicao";
import { Conteudos } from "./pages/Conteudos";
import { VistoPorUltimo } from "./pages/VistoPorUltimo";
import { Perfil } from "./pages/Perfil";
import { Conteudo } from "./pages/Conteudo";
import { Noticias } from "./pages/Noticias";
import { ConteudosFavoritados } from "./pages/ConteudosFavoritados";
import { HotSite } from "./pages/HotSite";

export function AppRoutes(props){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/distribuicoes" element={<Distribuicao />} />
                <Route path="/conteudos" element={<Conteudos id={props.idContent} />} />
                <Route path="/visto-por-ultimo" element={<VistoPorUltimo />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/conteudo" element={<Conteudo />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/conteudos-favoritados" element={<ConteudosFavoritados />} />
                <Route path="/hotsite" element={<HotSite/>}/>
            </Routes>
        </Router>
    )
}