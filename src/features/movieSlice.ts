import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "../services/movieService";

interface MovieState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (searchTerm: string) => {
    const response = await fetchMovies(searchTerm);
    return response.Search; // OMDb API returns results in a "Search" field
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export default movieSlice.reducer;
