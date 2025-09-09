import React from "react";
import styles from "../styles/SearchBar.module.css";
import SearchIcon from "../icons/SearchIcon";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Pesquise",
}) => {
  return (
    <div className={styles.searchBarContainer}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Pesquisar"
      />
    </div>
  );
};

export default SearchBar;
