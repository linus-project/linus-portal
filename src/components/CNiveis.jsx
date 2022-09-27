import { Nav, NavItem, NavLink } from 'reactstrap';
export function CNiveis () {
    return (
        <div> 
            <div className="row">
                <Nav className='mt-2'>
                    <NavItem>
                        <NavLink className='text-light fs-3' href="#1" nivel='iniciante'>
                        Iniciante
                        </NavLink>
                        <div className="barra-iniciante"></div>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-light fs-3' href="#2" nivel='intermediario'>
                        Intermediario
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-light fs-3' href="#3" nivel='avancado'>
                        Avançado
                        </NavLink>
                    </NavItem>
                </Nav>
                <hr className='text-light' />
            </div>
        </div>

    )
}