import { useState } from "react";

import ModuleHeader from "../components/Module/ModuleHeader";
import ModuleAge from "../components/Module/ModuleAge";
import ModuleThumb from "../components/Module/ModuleThumb";
import ModuleText from "../components/Module/ModuleText";

import "../styles/Module.css";

import FatCircleIcon from "../icons/FatCircleIcon";
import CircleIcon from "../icons/CircleIcon";
import RedHeartIcon from "../icons/RedHeartIcon";
import CircleGreenHeartIcon from "../icons/CircleGreenHeart";
import PlusIcon from "../icons/PlusIcon";

import { IconButton } from "@mui/material";
import ArrowIcon from "../icons/ArrowIcon";
import { useNavigate } from "react-router-dom";

export default function Module() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("TÍTULO");
  const [synopsis, setSynopsis] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [step, setStep] = useState(1);
  

  const [ageGroups, setAgeGroups] = useState({
    "até 3 anos": false,
    "4 a 6 anos": false,
    "7 a 12 anos": false,
    "13 a 17 anos": false,
  });

  const [contents, setContents] = useState([{ id_content: Date.now(), text: "" }]);

  const handleAddContent = () => {
    setContents([...contents, { id_content: Date.now(), text: "" }]);
  };

  const handleRemoveContent = (id_content: number) => {
    const updatedContents = contents.filter(content => content.id_content !== id_content);
    setContents(updatedContents);
  };

  const handleSave = () => {
    const moduleWithContents = {
      id_module: null,
      title,
      sinopsys: synopsis,
      thumbnail: thumbnail || null,
      creation_date: new Date().toISOString(),
      views: 0,
      age_group: ageGroups,
      user_id: 1,
      contents,
    };

    console.log(moduleWithContents);
    alert("Módulo salvo! Veja o console para detalhes.");
  };

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
        <ModuleHeader title={title} setTitle={setTitle} synopsis={synopsis} setSynopsis={setSynopsis} />
        <ModuleAge ageGroups={ageGroups} setAgeGroups={setAgeGroups} />
        <ModuleThumb thumbnail={thumbnail} setThumbnail={setThumbnail} />

        {contents.map((content, index) => (
          <div key={content.id_content} style={{ position: "relative", marginBottom: "16px" }}>
            <ModuleText
              text={content.text}
              setText={(newText: string) => {
                const updatedContents = [...contents];
                updatedContents[index].text = newText;
                setContents(updatedContents);
              }}
            />
            <button
              className="remove-btn"
              style={{ position: "absolute", top: 5, right: 5 }}
              onClick={() => handleRemoveContent(content.id_content)}
            >
              ✕
            </button>
          </div>
        ))}

        <IconButton className="plus-btn" onClick={handleAddContent}>
          <PlusIcon color="#76BCD7" width={30} height={30} />
        </IconButton>

        <button className="save-btn" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
}
