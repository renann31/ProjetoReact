import { useState } from "react";
import { BookOpen, Info, MapPin, Flag } from "lucide-react";
import "./cardHistoria.css";

const dadosHistoria = {
  Maceió: {
    fundacao:
      "Maceió surgiu a partir de engenhos de açúcar e tornou-se capital de Alagoas em 1839.",

    fatos: [
      "Crescimento impulsionado pela atividade portuária.",
      "Forte influência indígena, africana e portuguesa.",
      "Desenvolvimento urbano ligado ao litoral nordestino."
    ],

    pontos: [
      "Praia de Pajuçara e piscinas naturais",
      "Ponta Verde e Jatiúca",
      "Caminho de Moisés",
      "Mercado do Artesanato"
    ]
  },

  Salvador: {
    fundacao:
      "Fundada em 1549 por Tomé de Sousa, foi a primeira capital do Brasil.",

    fatos: [
      "Centro administrativo do Brasil colonial.",
      "Patrimônio Cultural da Humanidade pela UNESCO.",
      "Berço da cultura afro-brasileira."
    ],

    pontos: [
      "Pelourinho",
      "Elevador Lacerda",
      "Farol da Barra",
      "Forte de São Marcelo"
    ]
  },

  "Fernando de Noronha": {
    fundacao:
      "Descoberto em 1503, teve ocupação estratégica militar ao longo da história.",

    fatos: [
      "Utilizado como colônia penal no passado.",
      "Área de preservação ambiental rigorosa.",
      "Reconhecido como Patrimônio Mundial pela UNESCO."
    ],

    pontos: [
      "Baía do Sancho",
      "Baía dos Porcos",
      "Projeto Tamar",
      "Forte dos Remédios"
    ]
  },

  "Lençóis Maranhenses": {
    fundacao:
      "Região formada por dunas e lagoas naturais, protegida como Parque Nacional desde 1981.",

    fatos: [
      "Fenômeno natural único no mundo.",
      "Habitada por comunidades tradicionais.",
      "Destino turístico internacional."
    ],

    pontos: [
      "Lagoa Azul",
      "Lagoa Bonita",
      "Circuito das Lagoas",
      "Passeios de 4x4 pelo parque"
    ]
  }
};

function CardHistoria({ cidade }) {
  const [aberto, setAberto] = useState(false);
  const dados = dadosHistoria[cidade];

  if (!dados) return null;

  return (
    <div className="histWrapper">
      
      {/* CARD DO TÍTULO */}
      <div className="histTitleCard" onClick={() => setAberto(!aberto)}>
        <span className="chevron">{aberto ? "▲" : "▼"}</span>
        <BookOpen className="hist-icon-title" />
        <h2>História e Cultura</h2>
      </div>

      {/* CARD DE CONTEÚDO */}
      {aberto && (
        <div className="histContentCard">

          {/* FUNDAÇÃO */}
          <div className="histBloco">
            <h3>
              <Flag className="histSubIcon" />
              Fundação
            </h3>
            
            <p><span className="bolinha"> •</span>{dados.fundacao}</p>
          </div>

          {/* FATOS HISTÓRICOS */}
          <div className="histBloco">
            <h3>
              <Info className="histSubIcon" />
              Fatos históricos
            </h3>
            <ul className="histLista">
              {dados.fatos.map((item, i) => (
                <li key={i}>
                  <span className="bolinha"> •</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* PONTOS TURÍSTICOS */}
          <div className="histBloco">
            <h3>
              <MapPin className="histSubIcon" />
              Principais pontos turísticos
            </h3>
            <ul className="histLista">
              {dados.pontos.map((ponto, i) => (
                <li key={i}>
                  <span className="bolinha"> •</span>
                  {ponto}
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default CardHistoria;