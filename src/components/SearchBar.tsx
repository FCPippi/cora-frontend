import React from "react";
import styles from "../styles/SearchBar.module.css";
import SearchIcon from "../icons/SearchIcon";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarContainer}>
      <span className={styles.icon}>
        <SearchIcon width="3.5rem" height="3rem" />
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
