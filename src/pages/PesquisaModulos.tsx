import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CardModule from "../components/CardModule";
import "../styles/PesquisaModulos.css";
import CoraImg from "../assets/Cora.png";
import RafaImg from "../assets/Rafa.png";
import VitorImg from "../assets/Vitor.png";

const mockModules = [
  {
    id: 1,
    title: "Segredos Bons e Ruins",
    age: "9-12 anos",
    description:
      "Nesta seção, ajudamos as crianças a identificar e diferenciar segredos bons e ruins...",
    image: CoraImg,
    borderColor: "#7ABBD7",
    titleColor: "#3A8DAD",
  },
  {
    id: 2,
    title: "Prevenção de Abusos",
    age: "9-12 anos",
    description:
      "Aqui ensinamos de forma clara para crianças a entender e evitar situações de abuso...",
    image: RafaImg,
    borderColor: "#FDC647",
    titleColor: "#DF3841",
  },
  {
    id: 3,
    title: "Emoções e Autoconfiança",
    age: "13-15 anos",
    description:
      "Ajudamos crianças e adolescentes a identificar emoções e fortalecer autoconfiança...",
    image: VitorImg,
    borderColor: "#61BC55",
    titleColor: "#61BC55",
  },
];

function PesquisaModulos() {
  const [search, setSearch] = useState("");

  const filteredModules = mockModules.filter(
    (mod) =>
      mod.title.toLowerCase().includes(search.toLowerCase()) ||
      mod.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pesquisa-container">
      <div className="pesquisa-content">
        <h2 className="pesquisa-title">Resultado da pesquisa</h2>
        <div className="pesquisa-searchbar">
          <SearchBar
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Pesquise"
          />
        </div>
        <div className="pesquisa-modules">
          {filteredModules.map((mod) => (
            <CardModule
              key={mod.id}
              title={mod.title}
              age={mod.age}
              description={mod.description}
              image={mod.image}
              borderColor={mod.borderColor}
              titleColor={mod.titleColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PesquisaModulos;
