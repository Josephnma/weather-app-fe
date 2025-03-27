import { useState } from 'react'
import { fetchWeather } from "./api/weather";
import WeatherCard from "./components/WeatherCard";

import './App.css'

function App() {
    const [city, setCity] = useState("Lagos");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        setLoading(true);
        const data = await fetchWeather(city);
        setWeather(data);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-4">Weather App 🌦️</h1>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                    placeholder="Enter city"
                />
                <button
                    onClick={getWeather}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Get Weather
                </button>
            </div>

            {loading ? <p className="mt-4">Loading...</p> : <WeatherCard weather={weather} />}
        </div>
    );
}

export default App;