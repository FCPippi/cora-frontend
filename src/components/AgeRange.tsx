import "../styles/AgeRangeStyle.css";

function AgeRange() {
  return (
    <div className="age-range-container">
      <div className="age-range-item">
        <span className="age-text">9-12 anos</span>
        <div className="checkbox-container">
          <input className="checkbox" type="checkbox" id="filtro1" defaultChecked />
        </div>
      </div>

      <div className="age-range-item">
        <span className="age-text">13-15 anos</span>
        <div className="checkbox-container">
          <input className="checkbox" type="checkbox" id="filtro2" defaultChecked />
        </div>
      </div>
    </div>
  );
}

export default AgeRange;
