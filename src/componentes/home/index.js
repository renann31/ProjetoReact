import './home.css';
import Cabecalho from '../header';
import Card from '../card'
import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "../tema"

const Infos = [
  {nome: 'Salvador',
  texto: 'Rica em cultura e história, com o famoso Pelourinho, festas tradicionais e culinária baiana. Praias urbanas lindas como Porto da Barra e Flamengo. Clima tropical, quente o ano todo, com temperaturas médias entre 25°C e 30°C. Chuva concentrada entre abril e julho, mas a maior parte do ano é ensolarada e ideal para praia.',
  imagem: '/salvador.png'
  },

  {nome: 'Maceió',
  texto: 'Praias paradisíacas como Pajuçara e Ponta Verde, piscinas naturais de águas cristalinas e excelente infraestrutura turística. Clima tropical úmido, quente e ensolarado a maior parte do ano. Chuvas leves entre abril e julho, tornando o clima perfeito para atividades ao ar livre e passeios de barco.',
  imagem: '/maceio.png'
  },

  {nome: 'Lençóis Maranhenses',
  texto: 'Dunas gigantes e lagoas de água doce que se formam na estação das chuvas, cenário único e impressionante para fotografia e ecoturismo. Clima tropical semiúmido. O período ideal para visitar é entre junho e setembro, quando as lagoas estão cheias e o sol predomina, perfeito para mergulho e trilhas.',
  imagem: '/lencoisMaranhenses.png'
  },

  {nome: 'Fernando de Noronha',
  texto: 'Ilha paradisíaca com praias de águas cristalinas, rica vida marinha (ótima para mergulho) e preservação ambiental. Tranquilidade e contato direto com a natureza. Clima equatorial, quente o ano todo. Melhor período de visita é de agosto a dezembro, com sol abundante e mar calmo para mergulho.',
  imagem: '/noronha.png'
  }
]


function Home () {
  function BotaoTema() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='theme-btn'>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

  return(
    <>
    <BotaoTema />
    <div className='container'>
        <Cabecalho />
        {Infos.map(({ nome, texto, imagem }, index) => (
        <Card 
          key={index}         
          nome={nome}
          texto={texto}
          imagem={imagem}
        />
      ))}    
    </div>
    </>
)};

export default Home 