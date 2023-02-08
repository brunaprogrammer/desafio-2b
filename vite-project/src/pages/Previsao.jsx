import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [searchedCity, setSearchedCity] = useState('')
    const [city, setCity] = useState('')
    const apiKey = "9a1c29c019c7d982a2ee1fb294d7e0ef"

    async function getCityWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${apiKey}&lang=pt_br`)
        const data = await response.json()
        setCity(searchedCity)
        console.log(data)
    }

    function handleSubmit(e) {
        e.preventDefault()
        getCityWeather()
        console.log(searchedCity)
    }

    useEffect(() => {
        async function getCityWeather() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${apiKey}&lang=pt_br`)
            const data = await response.json()
            console.log(data)
        }

        getCityWeather()
    }, [])

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


            {city &&
                <>
                    <h2>{city}</h2>
                </>}

            <p>
                {diasemana} , {date.getDate()} de {mes} de {date.getFullYear()}
            </p>



        </div>


    )
}

export default App
