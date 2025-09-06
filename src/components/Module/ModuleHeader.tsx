type Props = {
  title: string;
  setTitle: (v: string) => void;
  synopsis: string;
  setSynopsis: (v: string) => void;
};

export default function ModuleHeader({ title, setTitle, synopsis, setSynopsis }: Props) {
  return (
    <div className="container-title">
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
