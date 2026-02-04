import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./componentes/tema";

import Home from './componentes/home';
import Clima from './componentes/clima';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clima/:cidade" element={<Clima />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
