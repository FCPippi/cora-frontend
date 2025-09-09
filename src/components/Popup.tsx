import { useState } from "react";
import "../styles/popup.css"
import AgeRange from "./AgeRange";
import HamburguerIcon from "../icons/HamburguerIcon";


function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className = "popup-icon" onClick={() => setIsOpen(true)}>
        <HamburguerIcon/>
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
