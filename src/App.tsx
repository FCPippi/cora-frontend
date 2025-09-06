import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";

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
        
        <Route element={<Layout />}>
          <Route path="/conta" element={<div style={{ padding: "2rem", textAlign: "center" }}>Página da Conta</div>} />
          <Route path="/conteudos" element={<div style={{ padding: "2rem", textAlign: "center" }}>Página de Conteúdos</div>} />
          <Route path="/forum" element={<div style={{ padding: "2rem", textAlign: "center" }}>Página do Fórum</div>} />
          <Route path="/especialistas" element={<div style={{ padding: "2rem", textAlign: "center" }}>Página dos Especialistas</div>} />
        </Route>
        
        <Route path="*" element={<div style={{ padding: "2rem", textAlign: "center" }}>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App
