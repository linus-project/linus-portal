import { Button } from 'reactstrap';
import meninoHome from '../assets/meninoHome.png';
import trending  from '../assets/trending-up.svg';

export function CAvancado () {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-sm-4 col-md-6 CIniciante">
                    <p className="fs-1" style={{color: "#9400D3"}}>Você já sabe muito né?<br /> Mas sempre temos mais a aprender!</p>
                    <p className="text-light fs-4">Temos um espaço perfeito para mais desafios!</p>
                    <Button className='CButtonHome' style={{backgroundColor: "#9400D3"}}>
                    Quero conhecer!
                        <img src={trending}/>
                    </Button> 
                </div>
                <div className="col-sm-4 col-md-6 mt-5">
                    <img className='float-right' src={meninoHome} width={540} height={500} alt="" />
                </div>
            </div>
        </div>
    )
}