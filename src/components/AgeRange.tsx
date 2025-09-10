import "../styles/AgeRangeStyle.css";

interface AgeRangeProps {
  ageFilters: { [key: string]: boolean };
  onAgeFilterChange: (ageGroup: string, checked: boolean) => void;
}

function AgeRange({ ageFilters, onAgeFilterChange }: AgeRangeProps) {
  const ageGroups = ["9-12 anos", "13-15 anos"];

  return (
    <div className="age-range-container">
      {ageGroups.map((ageGroup) => (
        <div key={ageGroup} className="age-range-item">
          <span className="age-text">{ageGroup}</span>
          <div className="checkbox-container">
            <input 
              className="checkbox" 
              type="checkbox" 
              id={`filtro-${ageGroup}`}
              checked={ageFilters[ageGroup] || false}
              onChange={(e) => onAgeFilterChange(ageGroup, e.target.checked)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AgeRange;
