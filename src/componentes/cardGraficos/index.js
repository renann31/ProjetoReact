import './cardGraficos.css'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { ThemeProvider, useTheme } from "../tema"


function CardGraficos( {forecast} ) {
    const { theme } = useTheme();

  if (!forecast || forecast.length === 0) {
    return <p>Carregando dados...</p>;
  }

  /* ===============================
     1. Datas base (horário local)
  =============================== */
const agora = new Date();
const daqui24h = new Date(agora.getTime() + 24 * 60 * 60 * 1000);

  /* ===============================
     2. Filtra dados de hoje
  =============================== */
  const dados24h = forecast.filter(item => {
  const dataItem = new Date(item.dt * 1000);
  return dataItem >= agora && dataItem <= daqui24h;
});

  const ehHoje = dados24h.length > 0;

  /* ===============================
     3. Mapeia dados
  =============================== */
const dadosTemperatura = dados24h.map(item => ({
  hora: new Date(item.dt * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }),
  temp: Math.round(item.main.temp),
}));

const dadosChuva = dados24h.map(item => ({
  hora: new Date(item.dt * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }),
  chuva: item.rain ? item.rain["3h"] : 0,
}));

  /* ===============================
     4. Render
  =============================== */

    const chartColors = theme === "dark"
  ? {
      axis: "#e5e7eb",
      grid: "#334155",
      tooltipBg: "#020617",
      tooltipText: "#f9fafb",
    }
  : {
      axis: "#374151",
      grid: "#e5e7eb",
      tooltipBg: "#ffffff",
      tooltipText: "#000000",
    };

  return (
    <div className="cardGraficos">
      <h2>Próximas 24 horas</h2>

      <div className="graficos">
        {/* ===== TEMPERATURA ===== */}
        <div className="grafico">
          <h3>Temperatura (°C)</h3>

          <LineChart width={500} height={250} data={dadosTemperatura}>
  <XAxis dataKey="hora" stroke={chartColors.axis} />
  <YAxis unit="°C" stroke={chartColors.axis} />
  <Tooltip
    contentStyle={{
      backgroundColor: chartColors.tooltipBg,
      border: "none",
      color: chartColors.tooltipText,
    }}
    labelStyle={{ color: chartColors.tooltipText }}
  />
  <Line type="monotone" dataKey="temp" stroke="#cf0909" />
</LineChart>
        </div>

        {/* ===== CHUVA ===== */}
        <div className="grafico">
          <h3>Volume de Chuva (mm)</h3>

<BarChart width={500} height={250} data={dadosChuva}>
  <XAxis
  dataKey="hora"
  interval="preserveStartEnd"
  stroke={chartColors.axis} />
  <YAxis unit="mm" stroke={chartColors.axis} />
  <Tooltip
    contentStyle={{
      backgroundColor: chartColors.tooltipBg,
      border: "none",
      color: chartColors.tooltipText,
    }}
    labelStyle={{ color: chartColors.tooltipText }}
  />
  <Bar dataKey="chuva" fill="#414fc6" />
</BarChart>
        </div>
      </div>
    </div>
  );
}

export default CardGraficos;