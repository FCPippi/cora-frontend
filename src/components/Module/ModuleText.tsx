type Props = {
  text: string;
  setText?: (v: string) => void; // agora opcional
  readOnly?: boolean;            // controla modo visualização
};

export default function ModuleText({ text, setText, readOnly = false }: Props) {
  if (readOnly || !setText) {
    return (
      <div className="textarea-container">
        <p className="text-display">{text || "Sem conteúdo disponível."}</p>
      </div>
    );
  }

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
