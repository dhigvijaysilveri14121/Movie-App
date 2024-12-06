const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addMovie':
      return {
        ...state,
        movies: [...state.movies, action.payload], 
      };
    default:
      return state;
  }
};

export default movieReducer;
