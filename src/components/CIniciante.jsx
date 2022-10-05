import { Button } from 'reactstrap';
import maoHome from '../assets/maoHome.png';
import trending  from '../assets/trending-up.svg';

export function CIniciante () {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-sm-4 col-md-6 CIniciante">
                    <p className="fs-2" style={{color: "#9400D3"}}>É novo na área? <br /> Temos um plano pra você!</p>
                    <p className="text-light">Aqui você vai sair do 0 ao avançado em <br /> questão de tempo.</p>
                    <Button className='CButtonHome' style={{backgroundColor: "#9400D3"}}>
                    Quero conhecer!
                        <img src={trending}/>
                    </Button> 
                </div>
                <div className="col-sm-4 col-md-6 mt-5">
                    <img src={maoHome} width={320} height={320} alt="" />
                </div>
            </div>
        </div>
    )
}