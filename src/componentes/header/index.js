import './header.css'
import { useTemperature } from '../temperaturas'

function Cabecalho() {

  return (
    <div className='cabecalho'>

      <h1 className='titulo'>
        Panorama das Cidades Brasileiras
      </h1>

      <p className='subtitulo'>
        Clique em cada destino para ver informações detalhadas sobre o clima e cultura.
      </p>

    </div>
  )
}

export default Cabecalho