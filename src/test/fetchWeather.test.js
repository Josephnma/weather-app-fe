import axios from "axios";
import { fetchWeather } from "../api/weather";

jest.mock("axios"); // Mock axios globally

test("fetchWeather should return data when API call is successful", async () => {
    const mockData = { city: "Lagos", temperature: 30 };
    axios.get.mockResolvedValue({ data: mockData });

    const data = await fetchWeather("Lagos");

    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8083/api/weather/get?city=Lagos");
});

test("fetchWeather should return null when API call fails", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    const data = await fetchWeather("Lagos");

    expect(data).toBeNull();
});
