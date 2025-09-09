import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CardModule from "../components/CardModule";
import CircleGreenHeartIcon from "../icons/CircleGreenHeart";
import "../styles/PesquisaModulos.css";
import CoraGroupImg from "../assets/CoraGroup.png";
import ClaraImg from "../assets/Clara.png";
import RafaImg from "../assets/Rafa.png";
import CoraImg from "../assets/Cora.png";

const mockModules = [
  {
    id: 1,
    title: "Segredos Bons e Ruins",
    age: "9-12\nanos",
    description:
      "Nesta seção, ajudamos as crianças a identificar e diferenciar suas emoções, fortalecendo a autoconfiança. Com atividades divertidas que eles gostam, eles aprendem a lidar com sentimentos de forma saudável, promovendo segurança emocional.",
    image: CoraGroupImg,
    borderColor: "#7ABBD7",
    titleColor: "#3A8DAD",
  },
  {
    id: 2,
    title: "CORPO E CONSENTIMENTO",
    age: "9-12\nanos",
    description:
      'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
    image: ClaraImg,
    borderColor: "#E91E63",
    titleColor: "#E91E63",
  },
  {
    id: 3,
    title: "Prevenção de Abusos",
    age: "9-12\nanos",
    description:
      "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
    image: RafaImg,
    borderColor: "#FF5722",
    titleColor: "#DF3841",
  },
  {
    id: 4,
    title: "Respeita começa com o corpo",
    age: "13-15\nanos",
    description:
      "Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer e aprender sobre as mudanças do corpo que ocorrem no período da puberdade.",
    image: CoraImg,
    borderColor: "#FDC647",
    titleColor: "#FDC647",
  },
];

function TestePesquisa() {
  const [search, setSearch] = useState("");

  const filteredModules = mockModules.filter(
    (mod) =>
      mod.title.toLowerCase().includes(search.toLowerCase()) ||
      mod.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="pesquisa-container">
      <div className="pesquisa-content">
        <div className="pesquisa-header">
          <h2 className="pesquisa-title">Resultado da pesquisa</h2>
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>

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
          {filteredModules.slice(0, 4).map((mod) => (
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

      {/* Elementos decorativos */}
      <div className="decoration-circle yellow-circle"></div>
      <div className="decoration-heart red-heart"></div>
      <div className="decoration-icon green-icon">
        <CircleGreenHeartIcon width="50px" height="50px" direction="right" />
      </div>
    </div>
  );
}

export default TestePesquisa;
