import { useNavigate } from "react-router-dom";

export function CDistribuicao(props) {
  const navigate = useNavigate();

  function redirectToContent() {
    return navigate(`/Conteudos`);
  }

  return (
    <>
      <img
        onClick={() => redirectToContent()}
        className="text-left mb-2 me-5 position-relative"
        style={{ cursor: "pointer" }}
        src={`${props.image}`}
        width={100}
        height={100}
      />
      <h4
        onClick={() => redirectToContent()}
        style={{ color: "#52BCBF", cursor: "pointer" }}
      >
        {props.titulo}
      </h4>
      <p className="text-light">{props.texto}</p>
    </>
  );
}
