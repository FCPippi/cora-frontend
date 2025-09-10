import React, { useState } from "react";
import "../../styles/Categories.css";

export const Categories: React.FC = () => {
  const [abaSelecionada, setAbaSelecionada] = useState("Populares");

  const abas = ["Para você", "Recentes", "Populares"];

  return (
    <div className="categories-container">
      <h1 className="categories-title">Categorias</h1>

      <div className="categories-tabs">
        {abas.map((aba) => (
          <div
            key={aba}
            className={`category-tab ${
              abaSelecionada === aba ? "active" : "inactive"
            }`}
            onClick={() => setAbaSelecionada(aba)}
          >
            {aba}
          </div>
        ))}
      </div>
    </div>
  );
};
