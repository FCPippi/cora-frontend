import { useState, useEffect, useRef } from "react";
import "../styles/popup.css";
import AgeRange from "./AgeRange";
import FilterIcon from "../icons/FilterIcon";

interface PopupProps {
  ageFilters: { [key: string]: boolean };
  onAgeFilterChange: (ageGroup: string, checked: boolean) => void;
}

function Popup({ ageFilters, onAgeFilterChange }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="popup-container" ref={popupRef}>
      <button className="popup-icon" onClick={() => setIsOpen(!isOpen)}>
        <FilterIcon />
      </button>

      {isOpen && (
        <div className="popup-dropdown">
          <AgeRange 
            ageFilters={ageFilters}
            onAgeFilterChange={onAgeFilterChange}
          />
        </div>
      )}
    </div>
  );
}

export default Popup;
