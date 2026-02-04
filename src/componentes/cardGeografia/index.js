import './cardGeografia.css';
import { useState } from 'react';
import {MapPin, Users, Mountain, Globe, Clock} from "lucide-react";


function CardGeografia({ dados }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="geoWrapper">
      
      {/* CARD DO TÍTULO */}
      <div className="geoTitleCard" onClick={() => setAberto(!aberto)}>
        <span className="chevron">{aberto ? "▲" : "▼"}</span>
        <MapPin className="geo-icon-title" />
        <h2>Informações Geográficas</h2>
      </div>

      {/* CARD DE CONTEÚDO */}
      {aberto && (
        <div className="geoContentCard">
          <div className="geo-grid">
            <Info label="Área: " value={dados.area} icone={Mountain} />
            <Info label="População: " value={dados.populacao} icone={Users} />
            <Info label="Altitude: " value={dados.altitude} icone={Globe} />
            <Info label="Coordenadas: " value={dados.coordenadas} icone={MapPin} />
            <Info label="Região: " value={dados.regiao} icone={Globe} />
            <Info label="Fuso Horário: " value={dados.fuso} icone={Clock} />
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value, icone: Icon }) {
  return (
    <div className="geo-item">
      <Icon className="geo-icon" />
      <span className="geo-label">{label}</span>
      <strong className="geo-value">{value}</strong>
    </div>
  );
}

export default CardGeografia;