function CTextoGrande (props) {
    return (
        <div>
            <p className={`fs-1 ${props.class}`} style={ props.color ? {color: props.color} : {color: "#9400D3"}}>{props.text}</p>
        </div>
    )
}

export default CTextoGrande;