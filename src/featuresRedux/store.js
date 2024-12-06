import { createStore } from "redux";

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, ...action.payload], 
      };
    default:
      return state;
  }
};
const store=createStore(movieReducer)
export default store;
