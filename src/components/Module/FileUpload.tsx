import React from "react";
import "../../styles/FileUpload.css";
import UploadIcon from "../../icons/UploadIcon";
interface FileUploadProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  return (
    <div className="file-upload">
      <input
        type="file"
        id="fileInput"
        className="import-button"
        onChange={onChange}
      />
      <label htmlFor="fileInput" className="custom-button">
        <UploadIcon />
      </label>
    </div>
  );
};

export default FileUpload;
