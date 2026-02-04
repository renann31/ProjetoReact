import './cardGraficos.css'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts"
import { useTheme } from "../tema"
import { useTemperature } from "../temperaturas"

function CardGraficos({ forecast }) {
  const { theme } = useTheme()
  const { unit } = useTemperature()

  if (!forecast || forecast.length === 0) {
    return <p>Carregando dados...</p>
  }

  /* ===============================
     1. Datas base
  =============================== */
  const agora = new Date()
  const daqui24h = new Date(agora.getTime() + 24 * 60 * 60 * 1000)

  /* ===============================
     2. Filtra 24h
  =============================== */
  const dados24h = forecast.filter(item => {
    const dataItem = new Date(item.dt * 1000)
    return dataItem >= agora && dataItem <= daqui24h
  })

  /* ===============================
     3. Conversão
  =============================== */
  const convertTemp = (temp) => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
  }

  /* ===============================
     4. Mapeia dados
  =============================== */
  const dadosTemperatura = dados24h.map(item => ({
    hora: new Date(item.dt * 1000).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: convertTemp(item.main.temp),
  }))

  const dadosChuva = dados24h.map(item => ({
    hora: new Date(item.dt * 1000).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    chuva: item.rain ? item.rain["3h"] : 0,
  }))

  /* ===============================
     5. Cores
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
      }

  /* ===============================
     6. Render
  =============================== */
  return (
    <div className="cardGraficos">
      <h2>Próximas 24 horas</h2>

      <div className="graficos">
        {/* ===== TEMPERATURA ===== */}
        <div className="grafico">
          <h3>Temperatura (°{unit})</h3>

          <LineChart width={500} height={250} data={dadosTemperatura}>
            <CartesianGrid stroke={chartColors.grid} />
            <XAxis dataKey="hora" stroke={chartColors.axis} />
            <YAxis unit={`°${unit}`} stroke={chartColors.axis} />
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
            <CartesianGrid stroke={chartColors.grid} />
            <XAxis dataKey="hora" stroke={chartColors.axis} />
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
  )
}

export default CardGraficos
