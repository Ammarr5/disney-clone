import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: []
}

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		updateMovies: (state, action) => {
			state.movies = action.payload;
		}
	}
})

export const {updateMovies} = movieSlice.actions;
export const selectMovies = state => state.movieReducer.movies;
export default movieSlice.reducer;