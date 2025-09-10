import { useState } from "react";
import "../styles/popup.css"
import AgeRange from "./AgeRange";
import FilterIcon from "../icons/FilterIcon";


function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className = "popup-icon" onClick={() => setIsOpen(true)}>
        <FilterIcon/>
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <AgeRange/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup
