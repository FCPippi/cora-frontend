import { useState } from "react";

import ModuleHeader from "./ModuleHeader";
import ModuleAge from "./ModuleAge";
import ModuleThumb from "./ModuleThumb";
import ModuleText from "./ModuleText";

import "../../styles/Module.css";

import FatCircleIcon from "../../icons/FatCircleIcon";
import CircleIcon from "../../icons/CircleIcon";
import RedHeartIcon from "../../icons/RedHeartIcon";
import CircleGreenHeartIcon from "../../icons/CircleGreenHeart";
import PlusIcon from "../../icons/PlusIcon";

import { IconButton } from "@mui/material";

export default function Module() {
  const [title, setTitle] = useState("TÍTULO");
  const [synopsis, setSynopsis] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [ageGroups, setAgeGroups] = useState({
    "até 3 anos": false,
    "4 a 6 anos": false,
    "7 a 12 anos": false,
    "13 a 17 anos": false,
  });

  // Estado de conteúdos (array de textos)
  const [contents, setContents] = useState([{ id_content: Date.now(), text: "" }]);

  // Adicionar novo conteúdo
  const handleAddContent = () => {
    setContents([...contents, { id_content: Date.now(), text: "" }]);
  };

  // Remover conteúdo
  const handleRemoveContent = (id_content: number) => {
    const updatedContents = contents.filter(content => content.id_content !== id_content);
    setContents(updatedContents);
  };

  // Salvar módulo
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

  return (
    <div className="container">
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

        {/* Renderiza cada ModuleText com botão de remover */}
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

        {/* Botão para adicionar novo ModuleText */}
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
