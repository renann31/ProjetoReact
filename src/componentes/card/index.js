import "./card.css";
import { Link } from "react-router-dom";


function Card({ nome, texto, imagem }) {
  const caminho = `/clima/${encodeURIComponent(nome)}`;

  return (
    <Link to={caminho} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card">
        <img src={imagem} alt={nome} className="imagemCard" />
        <div className="cardInfo">
          <h3 className="cardNome">{nome}</h3>
          <p className="cardTexto">{texto}</p>
        </div>
      </div>
    </Link>
  )};

export default Card