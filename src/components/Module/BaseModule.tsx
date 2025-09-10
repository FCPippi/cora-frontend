import "../../styles/BaseModule.css";
import ModuleNavbar from "./ModuleNavbar";

export default function BaseModule() {
  return (
    <div className="container">
      <div className="navbar">
        <ModuleNavbar />
      </div>
    </div>
  );
}
