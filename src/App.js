import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './componentes/home';
import Clima from './componentes/clima';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clima/cidade" element={<Clima />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
