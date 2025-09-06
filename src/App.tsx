import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Navbar/>
      {/* <CoraLogoIcon /> */}
       <Routes>
        <Route path="/conta" element={<div>Página da Conta</div>} />
        <Route path="/conteudos" element={<div>Página de Conteúdos</div>} />
        <Route path="/forum" element={<div>Página do Fórum</div>} />
        <Route path="/especialistas" element={<div>Página dos Especialistas</div>} />
        <Route path="*" element={<div>Página Inicial</div>} />
      </Routes>
    </Router>
  )
}

export default App
