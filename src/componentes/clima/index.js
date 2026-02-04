import './clima.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardPrincipal from "../cardClima";
import CardPrevisao from '../cardPrevisao';
import CardGraficos from '../cardGraficos';
import { useNavigate } from "react-router-dom";
import CardGeografia from '../cardGeografia';
import CardHistoria from '../cardHistoria';

function Clima() {
  const { cidade } = useParams();
  const dadosGeograficos = {
  "Maceió": {
    area: "509,32 km²",
    populacao: "957.916 habitantes",
    altitude: "16 metros",
    coordenadas: "9°39′S 35°44′W",
    regiao: "Nordeste do Brasil",
    fuso: "GMT-3 (BRT)",
  },

  "Salvador": {
    area: "692,59 km²",
    populacao: "2.564.204 habitantes",
    altitude: "8 metros",
    coordenadas: "12°58′S 38°29′W",
    regiao: "Nordeste do Brasil",
    fuso: "GMT-3 (BRT)",
  },

  "Fernando de Noronha": {
    area: "18,61 km²",
    populacao: "3.167 habitantes",
    altitude: "≈ 20 metros",
    coordenadas: "3°51′S 32°25′W",
    regiao: "Distrito de Pernambuco",
    fuso: "UTC−2",
  },

  "Lençóis Maranhenses": {
    area: "1.565 km²",
    populacao: "Parque Nacional (sem população fixa)",
    altitude: "Variável",
    coordenadas: "≈ 2°50′S 43°10′W",
    regiao: "Maranhão — Nordeste",
    fuso: "GMT-3 (BRT)",
  },
};
  const cidadesComCoordenadas = {"lencois-maranhenses": { lat: -2.48, lon: -43.11 }, "fernando-de-noronha": { lat: -3.85, lon: -32.42 },};
  const cidadeNormalizada = cidade
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/\s+/g, "-");
  const cidadeDecodificada = decodeURIComponent(cidade).replace(/-/g, " ");

  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const [forecast, setForecast] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  async function fetchClima() {
    try {
      const local = cidadesComCoordenadas[cidadeNormalizada];
      const url = local
  ? `https://api.openweathermap.org/data/2.5/forecast?lat=${local.lat}&lon=${local.lon}&appid=335072466b4c64f8cbe49436c4446201&units=metric&lang=pt_br`
  : `https://api.openweathermap.org/data/2.5/forecast?q=${cidadeDecodificada}&appid=335072466b4c64f8cbe49436c4446201&units=metric&lang=pt_br`;

     const response = await fetch(url);

      const data = await response.json();

      const previsaoPorDia = {};

      data.list.forEach(item => {
        const dia = item.dt_txt.split(" ")[0];

        if (!previsaoPorDia[dia]) {
          previsaoPorDia[dia] = {
            data: dia,
            min: item.main.temp_min,
            max: item.main.temp_max,
            weather: item.weather[0]
          };
        } else {
          previsaoPorDia[dia].min = Math.min(
            previsaoPorDia[dia].min,
            item.main.temp_min
          );
          previsaoPorDia[dia].max = Math.max(
            previsaoPorDia[dia].max,
            item.main.temp_max
          );
        }
      });
      setClima(data.list[0]);
      setPrevisao(Object.values(previsaoPorDia));
      setForecast(data.list);
    } catch (error) {
      console.error(error);
    }
  }
  fetchClima();
}, [cidadeDecodificada]);
  if (!clima) return <p>Carregando...</p>;

  function getBackgroundClass(clima) {
  if (!clima || !clima.weather || !clima.weather[0]) {
    return "bg-sol";
  }

  const main = clima.weather[0].main;

  if (main === "Clear") return "bg-sol";
  if (main === "Clouds") return "bg-nublado";
  if (main === "Rain" || main === "Drizzle" || main === "Thunderstorm")
    return "bg-chuva";

  return "bg-sol";
}
return (
    <div className={`container ${getBackgroundClass(clima)}`} >
  <button className="btnVoltar" onClick={() => navigate("/home")}>
     ←
  </button>
  <div className='cardsCima'>
      <CardPrincipal 
      cidade={cidade}
      temperatura={clima.main.temp.toFixed(1)}
      icone={clima.weather[0].icon}
      tempo={clima.weather[0].description}
      sensaçao={clima.main.feels_like.toFixed(1)}
      pressao={clima.main.pressure}
      umidade={clima.main.humidity}
      visibilidade={clima.visibility / 1000}
      vento={clima.wind.speed}
      />
      <CardPrevisao dias={previsao}/>
      <CardGraficos forecast={forecast}/>
      </div>
      <div className='cardsBaixo'>
      <CardGeografia dados={dadosGeograficos[cidadeDecodificada]} />
      <CardHistoria cidade={cidadeDecodificada} />
      </div>
    </div>
  );
}

export default Clima;