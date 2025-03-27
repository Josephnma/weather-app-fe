import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
    if (!weather) return <p className="text-red-500">Weather data not available.</p>;

    const { city, temperature, description } = weather;

    // Map weather descriptions to icons
    const weatherIcons = {
        Clear: <WiDaySunny size={50} />,
        Clouds: <WiCloud size={50} />,
        Rain: <WiRain size={50} />,
        Snow: <WiSnow size={50} />,
        Fog: <WiFog size={50} />,
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">{city}</h2>
            <div className="flex justify-center items-center">
                {weatherIcons[description] || <WiDaySunny size={50} />}
                <p className="text-lg ml-2">{description}</p>
            </div>
            <p className="text-4xl font-bold">{temperature}°C</p>
        </div>
    );
};

export default WeatherCard;
