import "../styles/CardModule.css";
import { useMemo } from "react";
import type { FC } from "react";

// Definindo cores disponíveis
const COLORS = [
  "#FF5757", // vermelho
  "#4A90E2", // azul
  "#50C878", // verde
  "#FFD700", // amarelo/dourado
  "#9370DB", // roxo
];

interface CardModuleProps {
  title: string;
  sinopsys: string;
  thumbnail: string;
  ageGroup: string;
}

const CardModule: FC<CardModuleProps> = ({
  title,
  sinopsys,
  thumbnail,
  ageGroup,
}) => {
  // Dividir o texto da faixa etária em linhas separadas
  const ageParts = ageGroup.split(" ");

  // Gerar uma cor aleatória
  const randomColor = useMemo(() => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }, []);

  return (
    <div className="Card">
      {/* Conteúdo do card */}
      <div className="Card-inner">
        {/* Thumbnail colada à esquerda com altura do card */}
        <div
          className="Card-thumbnail"
          style={{
            borderLeft: `5px solid ${randomColor}`,
            borderTop: `5px solid ${randomColor}`,
            borderBottom: `5px solid ${randomColor}`,
            borderRight: `5px solid ${randomColor}`,
          }}
        >
          <img src={thumbnail} alt={title} />
        </div>

        <div className="Card-content">
          <div className="Card-header">
            <h2 style={{ color: randomColor }}>{title}</h2>
            <span className="AgeRange">
              {ageParts[0]} <br /> {ageParts[1]}
            </span>
          </div>

          <p>{sinopsys}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModule;
