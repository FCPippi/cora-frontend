import { useState } from "react";
import ModuleHeader from "./ModuleHeader";
import ModuleAge from "./ModuleAge";
import ModuleThumb from "./ModuleThumb";
import ModuleText from "./ModuleText";
import "../../styles/Module.css";

export default function Module() {
  const [title, setTitle] = useState("TÍTULO");
  const [synopsis, setSynopsis] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [text, setText] = useState("");

  const [ageGroups, setAgeGroups] = useState({
    "até 3 anos": false,
    "4 a 6 anos": false,
    "7 a 12 anos": false,
    "13 a 17 anos": false,
  });

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
      contents: [
        {
          id_content: null,
          text,
          image: null,
          template: null,
          video_link: null,
        }
      ]
    };

    console.log(moduleWithContents);
  };

  return (
    <div className="container">
      
      <ModuleHeader title={title} setTitle={setTitle} synopsis={synopsis} setSynopsis={setSynopsis} />
      <ModuleAge ageGroups={ageGroups} setAgeGroups={setAgeGroups} />
      <ModuleThumb thumbnail={thumbnail} setThumbnail={setThumbnail} />
      <ModuleText text={text} setText={setText} />

      <div className="button-container">
        <button className="save-btn" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
}
