import axios from "axios";

const API_KEY = "your-omdb-api-here";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}&s=${searchTerm}`);
  return response.data;
};
