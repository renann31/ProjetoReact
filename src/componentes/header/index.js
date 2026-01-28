import './header.css'
import { useTemperature } from '../temperaturas'

function Cabecalho() {
  const { unit, toggleUnit } = useTemperature()

  return (
    <div className='cabecalho'>
      
      <button 
        className="temp-btn"
        onClick={toggleUnit}
        aria-label="Alterar unidade de temperatura"
      >
        °{unit}
      </button>

      <h1 className='titulo'>
        Confira o Clima e a Previsão das Cidades Brasileiras
      </h1>

      <p className='subtitulo'>
        Clique em cada destino para ver informações detalhadas sobre o tempo e temperatura.
      </p>

    </div>
  )
}

export default Cabecalho