import "../styles/AgeRangeStyle.css";
import { Link } from "react-router-dom";


function AgeRange() {

  return (
    <div className="FaixaEtaria">


      <div className="filtro">
        <label className="texto" htmlFor="filtro1">
          9 - 12 anos
          <input className="checkbox" type="checkbox" id="filtro1" />
        </label>
      </div>


      <div className="filtro">
        <label className="texto" htmlFor="filtro2">
          13 - 15 anos
          <input className="checkbox" type="checkbox" id="filtro2" />
        </label>
      </div>

      <Link to="/module">
        <button style={{
          padding: "1rem 2rem",
          fontSize: "1.6rem",
          background: "#03a9f4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Ir para o Módulo
        </button>
      </Link>

    </div>
  )
}

export default AgeRange