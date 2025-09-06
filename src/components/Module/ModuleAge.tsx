type AgeGroup = "até 3 anos" | "4 a 6 anos" | "7 a 12 anos" | "13 a 17 anos";

type Props = {
  ageGroups: Record<AgeGroup, boolean>;
  setAgeGroups: React.Dispatch<React.SetStateAction<Record<AgeGroup, boolean>>>;
};

export default function ModuleAge({ ageGroups, setAgeGroups }: Props) {
  const toggleAge = (key: AgeGroup) => {
    setAgeGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="age-box">
      <label className="title-age-group">Faixa etária:</label>
      <div className="checkboxes">
        {(Object.keys(ageGroups) as AgeGroup[]).map((age) => (
          <label className="label-age-group" key={age}>
            <input
              type="checkbox"
              className="checkbox-age-group"
              checked={ageGroups[age]}
              onChange={() => toggleAge(age)}
            />
            <span className="custom-check"></span>
            {age}
          </label>
        ))}
      </div>
    </div>
  );
}
