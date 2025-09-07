import FileUpload from "../FileUpload";

type Props = {
  thumbnail: File | null;
  setThumbnail: (file: File | null) => void;
};

export default function ModuleThumb({ thumbnail, setThumbnail }: Props) {
  return (
    <div className="thumb">
      <label className="thumb-title">THUMBNAIL:</label>
      <FileUpload
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setThumbnail(e.target.files[0]);
          }
        }}
      />
      {/* preview opcional */}
      {thumbnail && (
        <img
          src={URL.createObjectURL(thumbnail)}
          alt="preview"
          className="thumb-preview"
        />
      )}
    </div>
  );
}
