import '../styles/Home.css';
import '../styles/main.css';
import maoHome from '../assets/maoHome.png';
import { CButtonHome } from '../components/CButtonHome';
import { CNiveis } from '../components/CNiveis';
import { CTextoGrande } from '../components/CTextoGrande';
import { CTextoPequeno } from '../components/CTextoPequeno';

function Home() {
  return (
    <div className="Home ms-5 me-5">
      <CNiveis />
      <br />
      <div className="row">
          <div className="col-sm-4 col-md-6">
            <CTextoGrande color="#9400D3" />
            <CTextoPequeno/>
            <CButtonHome color="#9400D3" text="Quero conhecer"/>
          </div>
          <div className="col-sm-4 col-md-6 mt-5">
            <img className="" src={maoHome} width={320} height={320} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Home;
