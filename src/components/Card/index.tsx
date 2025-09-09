import {
  CardModuleAgeRange,
  CardModuleBody,
  CardModuleContainer,
  CardModuleDescription,
  CardModuleHeader,
  CardModuleImageColumn,
  CardModuleImageFrame,
  CardModuleTitle,
} from "./style";

type CardProps = {
  img: string;
  title: string;
  content: string;
  ageRange: string;
};

const Card = ({ img, title, content, ageRange }: CardProps) => {
  return (
    <CardModuleContainer>
      <CardModuleImageColumn>
        <CardModuleImageFrame>
          <img src={img} alt={title} />
        </CardModuleImageFrame>
      </CardModuleImageColumn>

      <CardModuleBody>
        <CardModuleHeader>
          <CardModuleTitle>{title}</CardModuleTitle>
          <CardModuleAgeRange>{ageRange}</CardModuleAgeRange>
        </CardModuleHeader>

        <CardModuleDescription>{content}</CardModuleDescription>
      </CardModuleBody>
    </CardModuleContainer>
  );
};

export default Card;
