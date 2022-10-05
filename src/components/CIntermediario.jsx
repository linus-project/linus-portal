import { Button } from 'reactstrap';
import computadorHome from '../assets/computadorHome.png';
import trending  from '../assets/trending-up.svg';

export function CIntermediario () {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-sm-4 col-md-6 CIniciante">
                    <p className="fs-2" style={{color: "#52BCBF"}}>Já tem algum<br /> conhecimento?</p>
                    <p className="text-light">Temos lugar para você também!</p>
                    <Button className='CButtonHome' style={{backgroundColor: "#52BCBF"}}>
                    Quero conhecer!
                        <img src={trending}/>
                    </Button> 
                </div>
                <div className="col-sm-4 col-md-6 mt-5">
                    <img src={computadorHome} width={320} height={320} alt="" />
                </div>
            </div>
        </div>
    )
}