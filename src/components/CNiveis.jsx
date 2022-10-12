import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { CAvancado } from './CAvancado';
import { CIniciante } from './CIniciante';
import { CIntermediario } from './CIntermediario';
export function CNiveis () {

    const [activeTab, setActiveTab] = useState("CIniciante");

    const handleTab1 = () => {
        setActiveTab("CIniciante");
      };
    const handleTab2 = () => {
        setActiveTab("CIntermediario");
      };

    const handleTab3 = () => {
        setActiveTab("CAvancado");
    };

    return (
        <div> 
            <div className="row Tabs">
                <Nav className='mt-2 nav'>
                    <NavItem>
                        <NavLink className={`text-light fs-2 ${activeTab === "CIniciante" ? "active" : ""}`} onClick={handleTab1} href="#1">
                        Iniciante
                        </NavLink>
                        {activeTab === "CIniciante" ? <div className="barra-iniciante"></div> : ""}
                    </NavItem>
                    <NavItem>
                        <NavLink className={`text-light fs-2 ${activeTab === "CIntermediario" ? "active" : ""}`} onClick={handleTab2} href="#2">
                        Intermediário
                        </NavLink>
                        {activeTab === "CIntermediario" ? <div className="barra-iniciante"></div> : ""}
                    </NavItem>
                    <NavItem>
                        <NavLink className={`text-light fs-2 ${activeTab === "CAvancado" ? "active" : ""}`} onClick={handleTab3} href="#3">
                        Avançado
                        </NavLink>
                        {activeTab === "CAvancado" ? <div className="barra-iniciante"></div> : ""}
                    </NavItem>
                </Nav>
                <hr className='text-light' />
                {activeTab === "CIniciante" ? <CIniciante/> : activeTab === "CIntermediario" ? <CIntermediario/> : <CAvancado/>}
            </div>
        </div>
    )
}