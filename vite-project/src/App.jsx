import { useState, useEffect } from 'react'
import './App.css'
import Routes from "./Router";

function App() {
  const [searchedCity, setSearchedCity] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const apiKey = ""


  function handleSubmit(e) {
    e.preventDefault()
    setCity(searchedCity)
  }

  useEffect(() => {
    async function getCityWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${apiKey}&lang=pt_br`)
      const data = await response.json()
      setWeather(data)
    }
    getCityWeather()
  }, [city])


  const date = new Date();
  const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  const diasemana = semana[date.getDay() % 7];
  const mes = meses[date.getMonth()];


  return (

    <div className="App">
      <h1>{"Previsão do Tempo".toUpperCase()}</h1>
      <div className="wrapper">
        <form action="" className="wrapper--form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Buscar por cidade' value={searchedCity} onChange={e => setSearchedCity(e.target.value)} />
          <button type='submit'>Procurar</button>
        </form>
      </div>


      {city && (
        <>
          <h2>{city}</h2>

        </>)}

      {weather && weather.main && (
        <>
          <p className='data'>
            {diasemana} , {date.getDate()} de {mes} de {date.getFullYear()}
          </p>
          <div className="wrap">
            <p className='min'>Mínima</p>
            <div className="wrap--atual">
              <h2>{weather.main.temp.toFixed(0)}°C</h2>
              <p className='descricao'>{weather.weather[0].description}</p>
            </div>
            <p className='max'>Máxima</p>
          </div>
        </>)}
    </div>
  )

  /*return (
    <Routes />
  );*/
}

export default App
