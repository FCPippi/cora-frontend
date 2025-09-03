import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarContainer}>
      <span className={styles.icon}>
        {/* SVG de lupa */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="13" cy="13" r="9.5" stroke="#757575" strokeWidth="2" />
          <line
            x1="21.0607"
            y1="21.3536"
            x2="18"
            y2="18.2929"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="Pesquise"
        aria-label="Pesquisar"
      />
    </div>
  );
};

export default SearchBar;
