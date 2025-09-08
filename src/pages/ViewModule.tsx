import { useState, useEffect } from "react";
import ModuleText from "../components/Module/ModuleText";

import "../styles/Module.css";

import FatCircleIcon from "../icons/FatCircleIcon";
import CircleIcon from "../icons/CircleIcon";
import RedHeartIcon from "../icons/RedHeartIcon";
import CircleGreenHeartIcon from "../icons/CircleGreenHeart";
import ArrowIcon from "../icons/ArrowIcon";

import { useNavigate } from "react-router-dom";
import CircleHeartIcon from "../icons/Coração";

export default function ViewModule() {
  const navigate = useNavigate();
  const [moduleData, setModuleData] = useState<any | null>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const fetchModule = () => {
      const module = {
        id_module: 1,
        title: "Módulo Exemplo",
        sinopsys: "Esta é uma sinopse do módulo exemplo.",
        thumbnail: "balblasdfk.jpg",
        creation_date: new Date().toISOString(),
        views: 12,
        age_group: {
          "até 3 anos": true,
          "4 a 6 anos": false,
          "7 a 12 anos": true,
          "13 a 17 anos": false,
        },
        user_id: 1,
        contents: [
          { id_content: 1, text: "Conteúdo 1", image: null, template: null, video_link: null },
          { id_content: 2, text: "Conteúdo 2", image: null, template: null, video_link: null },
          { id_content: 3, text: "Conteúdo 3", image: null, template: null, video_link: null },
        ],
      };
      setModuleData(module);
    };

    fetchModule();
  }, []);

  const handleVoltar = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/conteudos');
    }
  };


  return (
    <div className="container">
      <div className="top-bar">
        <button className="voltar-button" onClick={handleVoltar}>
          <ArrowIcon className="voltar-icon" color="#FFFFFF" circleColor="transparent" /> Voltar
        </button>
      </div>

      <div className="background-elements">
        <FatCircleIcon className="bg-circle top-left" color="#7ABBD7" width={400} height={400} />
        <CircleIcon className="bg-circle top-right" color="#FDC647" width={300} height={300} />
        <RedHeartIcon className="bg-heart bottom-left" color="#DF3841" width={350} height={350} />
        <CircleGreenHeartIcon className="bg-circle bottom-right" color="#61BC55" width={350} height={350} />
      </div>

      <div className="content-section">
        {moduleData ? (
          <>
            <div className="container-title">
              <div className="heart-icon">
                <CircleHeartIcon
                  width={70}
                  height={70}
                  circleColor="#fff"
                  heartColor="red"
                  rotate={0}
                  direction="right"
                />
              </div>
              <h2 className="title">{moduleData.title}</h2>
              <p className="textarea">{moduleData.contents[0].text}</p>
            </div>

            {moduleData.contents.slice(1).map((content: any) => (
                <ModuleText
                  key={content.id_content}
                  text={content.text}
                  readOnly={true}
                />
            ))}                
          </> 
        ) : null}
      </div>
    </div>
  );
}
