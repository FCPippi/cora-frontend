import CircleHeartIcon from "../../icons/Coração";

type Props = {
  title: string;
  setTitle: (v: string) => void;
  synopsis: string;
  setSynopsis: (v: string) => void;
  readOnly?: boolean; 
};

export default function ModuleHeader({ title, setTitle, synopsis, setSynopsis }: Props) {
  return (
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
      <input
        type="text"
        className="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Digite aqui a sinopse"
        className="textarea"
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
      />
    </div>
  );
}
