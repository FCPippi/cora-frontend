import "../styles/CardModule.css";
import type { FC } from "react";

interface CardModuleProps {
  title: string;
  description?: string;
  sinopsys?: string;
  thumbnail?: string;
  image?: string;
  ageGroup?: string;
  age?: string;
  borderColor?: string;
  titleColor?: string;
}

const CardModule: FC<CardModuleProps> = ({
  title,
  description,
  sinopsys,
  thumbnail,
  image,
  ageGroup,
  age,
  borderColor = "#ccc",
  titleColor = "#333",
}) => {
  const content = description || sinopsys || "";
  const imageSource = image || thumbnail || "";
  const ageInfo = age || ageGroup || "";

  return (
    <div className="Card" style={{ borderColor: borderColor }}>
      <div className="Card-inner">
        <div className="Card-thumbnail">
          <img src={imageSource} alt={title} />
        </div>

        <div className="Card-content">
          <div className="Card-header">
            <h2 style={{ color: titleColor }}>{title}</h2>
            <span className="AgeRange">{ageInfo}</span>
          </div>

          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModule;
