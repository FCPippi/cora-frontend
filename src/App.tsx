import { Navbar } from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Module from "./pages/Module";
import ViewModule from "./pages/ViewModule";
import CardModule from "./components/CardModule";
import Contents from "./pages/Contents";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/create-module" element={<Module />} />
        <Route path="/module" element={<ViewModule />} />
        <Route
          path="/card-module"
          element={
            <CardModule
              title={"teste"}
              sinopsys={"teste"}
              thumbnail={"teste"}
              ageGroup={"teste"}
            />
          }
        />

        <Route element={<Layout />}>
          <Route
            path="/account"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                Página da Conta
              </div>
            }
          />
          <Route path="/contents" element={<Contents />} />
          <Route
            path="/forum"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                Página do Fórum
              </div>
            }
          />
          <Route
            path="/specialists"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                Página dos Especialistas
              </div>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Página não encontrada
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
