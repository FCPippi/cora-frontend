import React, { useState } from "react";
import "../styles/Contents.css";
import SearchBar from "../components/SearchBar";
import { Categories } from "../components/Categories/Categories";
import FilterIcon from "../icons/FilterIcon";
import AgeRange from "../components/AgeRange";
import CardModule from "../components/CardModule";
import CircleIcon from '../icons/CircleIcon';
import FatCircleIcon from '../icons/FatCircleIcon';
import RedHeartIcon from '../icons/RedHeartIcon';
import CircleGreenHeartIcon from '../icons/CircleGreenHeartIcon';

// Importação das imagens
import VitoImg from "../assets/Vitor.png";
import ClaraImg from "../assets/Clara.png";
import RafaImg from "../assets/Rafa.png";
import CoraGroupImg from "../assets/CoraGroup.png";

interface ModuleData {
  module_id: string;
  title: string;
  sinopsys: string;
  thumbnail: string;
  ageGroup: string;
}

const Contents: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  // Dados de exemplo para os cards, com base no modelo Module
  const moduleData: ModuleData[] = [
    {
      module_id: "1",
      title: "Prevenção de Abusos",
      ageGroup: "9-12 anos",
      sinopsys: 'Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.',
      thumbnail: VitoImg
    },
    {
      module_id: "2",
      title: "CORPO E CONSENTIMENTO",
      ageGroup: "9-12 anos",
      sinopsys: 'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
      thumbnail: ClaraImg
    },
    {
      module_id: "3",
      title: "CORPO E CONSENTIMENTO",
      ageGroup: "9-12 anos",
      sinopsys: 'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
      thumbnail: RafaImg
    },
    {
      module_id: "4",
      title: "Respeito começa com o corpo",
      ageGroup: "13-15 anos",
      sinopsys: 'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer e aprender sobre as mudanças do corpo que ocorrem no período da puberdade.',
      thumbnail: CoraGroupImg
    }
  ];

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="background-elements">
        <FatCircleIcon className="bg-circle top-left" color="#7ABBD7" width="30rem" height="30rem" />
        <CircleIcon className="bg-circle top-right" color="#FDC647" width="25rem" height="25rem" />
        <RedHeartIcon className="bg-heart red-heart bottom-left" color="#DF3841" width="25rem" height="25rem" />
        <CircleGreenHeartIcon className="bg-circle bottom-right" color="#61BC55" width="25rem" height="25rem" />
      </div>
      
      <div className="contents-page">
        <div className="header-search-section">
          <div className="header-row">
            <h1 className="contents-greeting">Olá, Maria!</h1>
            <div className="filter-icon" onClick={toggleFilter}>
              <FilterIcon width="36" height="36" />
            </div>
            
            {showFilter && (
              <div className="filter-popup">
                <AgeRange />
              </div>
            )}
          </div>
          
          <p className="contents-question">O que você gostaria de aprender hoje?</p>
          
          <div className="search-container">
            <SearchBar />
          </div>
        </div>

        <div className="categories-wrapper">
          <Categories />
        </div>

        <div className="card-grid">
          {moduleData.map((module) => (
            <CardModule
              key={module.module_id}
              title={module.title}
              sinopsys={module.sinopsys}
              thumbnail={module.thumbnail}
              ageGroup={module.ageGroup}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Contents;
