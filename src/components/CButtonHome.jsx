import { Button } from 'reactstrap';
import '../styles/Home.css'
import trending  from '../assets/trending-up.svg';

export function CButtonHome (props) {
   return (
    <Button className='CButtonHome' style={{backgroundColor: props.color}}>
        {props.text}!
        <img src={trending}/>
        </Button> 
   ); 
}

 