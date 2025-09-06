type Props = {
  text: string;
  setText: (v: string) => void;
};

export default function ModuleText({ text, setText }: Props) {
  return (
    <div className="textarea-container">
      <textarea
        placeholder="Digite aqui o texto inicial"
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
