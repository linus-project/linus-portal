function CTextoGrande (props) {
    return (
        <div>
            <p className="fs-2" style={{color: props.color}}>{props.text}</p>
        </div>
    )
}

export default CTextoGrande;