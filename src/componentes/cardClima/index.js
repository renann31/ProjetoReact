import './cardClima.css'
import { Droplets, Wind, Eye, Gauge } from "lucide-react";



function InfoClima({ icon, label, value }) {
  return (
    <div className="infoItem">
      <div className="infoIcon">{icon}</div>
      <div>
        <h5>{label}</h5>
        <p>{value}</p>
      </div>
    </div>
  );
}

function CardPrincipal(props) {
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

    return(
<div className='cardPrincipal'>
    <div className='titulo'>
        <h1 className='cidade'>{props.cidade}</h1>
        <h5 className='país'>Brasil</h5>
    </div>
    <div className='api'>
        <div className='fator1'></div>
            <h1 className='temperatura'>{props.temperatura}°</h1>
            <img src={iconMap[props.icone]} alt="Ícone do clima"/>
            <h3 className='tempo'>{props.tempo}</h3>
            <h5 className='sensaçao'>Sensação térmica: {props.sensaçao}°</h5>
        </div>
        <div className="fator2">
            <InfoClima
              icon= {<Droplets size={20} color='#1ca1de' />}
              label="Umidade"
              value={`${props.umidade}%`}
            />

            <InfoClima
              icon= {<Wind size={20} color='#1ca1de' />}
              label="Vento"
              value={`${props.vento} km/h`}
            />

            <InfoClima
              icon={<Eye size={20} color='#1ca1de' />}
              label="Visibilidade"
              value={`${props.visibilidade} km`}
            />

            <InfoClima
              icon={<Gauge size={20} color='#1ca1de' />}
              label="Pressão"
              value={`${props.pressao} mb`}
            />
        </div>
</div>
    )
}

export default CardPrincipal