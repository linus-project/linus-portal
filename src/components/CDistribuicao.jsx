

export function CDistribuicao (props) {

   return (
    <>
        <img className='text-left mb-2 me-5' src={`${props.image}`} width={100} height={100} />
        <h4 style={{color: "#52BCBF"}}>{props.titulo}</h4>
        <p className="text-light">
            {props.texto}
        </p>
    </>
   ); 
}

 