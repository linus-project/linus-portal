import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Distribuicao } from "./pages/Distribuicao";
import { Conteudos } from "./pages/Conteudos";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/distribuicao" element={<Distribuicao />} />
                <Route path="/conteudos" element={<Conteudos />} />
            </Routes>
        </Router>
    )
}