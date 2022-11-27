import { useNavigate } from "react-router-dom";

export function CDistribuicao(props) {
  const navigate = useNavigate();

  function sortContentByDistro() {
    sessionStorage.ID_DISTRO = props.idDistro;
    navigate("/conteudos");
  }

  return (
    <>
      <img
        onClick={() => sortContentByDistro()}
        className="text-left mb-2 me-5 position-relative"
        style={{ cursor: "pointer" }}
        src={`${props.image}`}
        width={100}
        height={100}
      />
      <h4
        style={{ color: "#52BCBF", cursor: "pointer" }}
      >
        {props.titulo}
      </h4>
      <p className="text-light">{props.texto}</p>
    </>
  );
}
