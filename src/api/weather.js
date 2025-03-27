import axios from "axios";

const API_BASE_URL = "http://localhost:8083/api/weather";

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get?city=${city}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
};
