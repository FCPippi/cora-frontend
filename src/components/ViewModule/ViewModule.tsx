import { useState } from "react";
import ModuleText from "../Module/ModuleText";
import "../../styles/Module.css";

export default function ViewModule() {
  const [text, setText] = useState("");
  const user = "responsavel";

  const getModules = () => {
    return {
      id_module: null,
      title: "Teste",
      sinopsys: "Super teste",
      thumbnail: "balblasdfk.jpg",
      creation_date: new Date().toISOString(),
      views: 0,
      age_group: "até 3 anos",
      user_id: 1,
      contents: [
        {
          id_content: null,
          text: "teste",
          image: null,
          template: null,
          video_link: null,
        },
      ],
    };
  };

  const blocks = getModules().contents

  return (
    <>
      <div className="container">
        {blocks.map((block) => {
            return <ModuleText text={block.text} setText={setText} readOnly/>
        })}
      </div>
    </>
  );
}
