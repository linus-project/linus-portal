import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Distribuicao } from "./pages/Distribuicao";
import { Conteudos } from "./pages/Conteudos";
import { VistoPorUltimo } from "./pages/VistoPorUltimo";


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/distribuicoes" element={<Distribuicao />} />
                <Route path="/conteudos" element={<Conteudos />} />
                <Route path="/visto-por-ultimo" element={<VistoPorUltimo />} />
            </Routes>
        </Router>
    )
}