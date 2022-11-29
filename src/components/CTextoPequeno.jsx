function CTextoPequeno (props) {
    return (
        <div>
            <p className={`text-light fs-4 ${props.class}`}>{props.text} {props.subtext}</p>
        </div>
    )
}

export default CTextoPequeno;