import { useState, useEffect } from 'react'
import './App.css'
import Routes from "./Router";
import { Sun, Cloud, CloudSun, CloudRain, Snowflake } from "phosphor-react";

function App() {
  const [searchedCity, setSearchedCity] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const apiKey = "Sua API-Key"


  function handleSubmit(e) {
    e.preventDefault()
    setCity(searchedCity)
  }

  useEffect(() => {
    async function getCityWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${apiKey}&lang=pt_br`)
      const data = await response.json()
      if (data.cod === "404") {
        setCity("Não foi possível encontrar a sua cidade")
        data = null
        console.log(404)
      } else {
        data.sys.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString()

        data.sys.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString()
      }
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

          <div className="icon">
            {weather.weather[0].description === "céu limpo" && (
              <div>
                <Sun size={175} />
              </div>

            )}

            {weather.weather[0].description === "nublado" && (
              <div>
                <Cloud size={165} />
              </div>

            )}

            {weather.weather[0].description === "nuvens dispersas" && (
              <div>
                <CloudSun size={165} />
              </div>

            )}

            {weather.weather[0].description === "algumas nuvens" && (
              <div>
                <CloudSun size={165} />
              </div>

            )}

            {weather.weather[0].description === "chuva moderada" && (
              <div>
                <CloudRain size={165} />
              </div>

            )}

            {weather.weather[0].main === "Rain" && (
              <div>
                <CloudRain size={165} />
              </div>

            )}

            {weather.weather[0].main === "Snow" && (
              <div>
                <Snowflake size={165} />
              </div>

            )}

          </div>

          <div className="wrap top">
            <div className="wrap--min">
              <p className='min'>Mínima</p>
              <p className='min--temp'>{weather.main.temp_min.toFixed(0)}°C</p>
            </div>

            <div className="wrap--atual">
              <h2>{weather.main.temp.toFixed(0)}°C</h2>
              <p className='descricao'>{weather.weather[0].description}</p>
            </div>

            <div className="wrap--max">
              <p className='max'>Máxima</p>
              <p className='max--temp'>{weather.main.temp_max.toFixed(0)}°C</p>
            </div>
          </div>

          <div className="wrap--bottom">
            <div className="wrap--um">
              <p>Umidade</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="wrap--nas">
              <p>Nascer do Sol</p>
              <p>{weather.sys.sunrise}</p>
            </div>
            <div className="wrap--por">
              <p>Pôr do Sol</p>
              <p>{weather.sys.sunset}</p>
            </div>

          </div>
        </>
      )
      }
    </div>
  )

  /*return (
    <Routes />
  );*/
}

export default App
