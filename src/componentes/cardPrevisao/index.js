import './cardPrevisao.css'
import { useTemperature } from '../temperaturas'

function CardPrevisao({ dias }) {
   const iconMap = {
    "01d": "/icons/sun-2-svgrepo-com.svg",
    "01n": "/icons/sun-2-svgrepo-com.svg",
    "02d": "/icons/cloud-sun-2-svgrepo-com.svg",
    "02n": "/icons/cloud-sun-2-svgrepo-com.svg",
    "03d": "/icons/cloud-svgrepo-com.svg",
    "03n": "/icons/cloud-svgrepo-com.svg",
    "04d": "/icons/clouds2-svgrepo-com.svg",
    "04n": "/icons/clouds2-svgrepo-com.svg",
    "09d": "/icons/cloud-waterdrpos-svgrepo-com.svg",
    "09n": "/icons/cloud-waterdrpos-svgrepo-com.svg",
    "10d": "/icons/cloud-rain-svgrepo-com.svg",
    "10n": "/icons/cloud-rain-svgrepo-com.svg",
    "11d": "/icons/cloud-storm-svgrepo-com.svg",
    "11n": "/icons/cloud-storm-svgrepo-com.svg",
  }


  const { unit } = useTemperature()

  const convertTemp = (temp) => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
  }

  return (
    <div className="listaDias">
      <h2 className="titulo">Previsão de 5 dias</h2>

      {dias.map((dia, index) => {
        const max = convertTemp(dia.max)
        const min = convertTemp(dia.min)
        const iconCode = dia.weather.icon

        return (
          <div key={index} className="diaItem">
            <div className="infoDia">
              <img
                src={iconMap[iconCode]}
                alt={dia.weather.description}
              />

              <div className="textoDia">
                <span className="diaSemana">
                  {new Date(dia.data)
                    .toLocaleDateString("pt-BR", { weekday: "long" })
                    .replace("-feira", "")
                    .replace(/^./, l => l.toUpperCase())}
                </span>

                <span className="descriçao">
                  {dia.weather.description.replace(/^./, l => l.toUpperCase())}
                </span>
              </div>
            </div>

            <div className="temps">
              <span className="tempMax">{max}°{unit}</span>
              <span className="separador"> / </span>
              <span className="tempMin">{min}°{unit}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardPrevisao