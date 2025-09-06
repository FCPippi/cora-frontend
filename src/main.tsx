import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Module from './components/Module/Module.tsx'
import ViewModule from './components/ViewModule/ViewModule.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Tela de módulo !!!!*/}
        <Route path="/create-module" element={<Module />} />
        <Route path="/module" element={<ViewModule />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)