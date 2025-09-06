import React from "react";
import "../styles/FileUpload.css";

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
        {/* SVG do botão */}
        {/* <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M12 2L12 16M5 9L12 2L19 9"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="4" y="16" width="16" height="6" rx="2" fill="#555" />
        </svg> */}
        <span>Escolher arquivo</span>
      </label>
    </div>
  );
};

export default FileUpload;
