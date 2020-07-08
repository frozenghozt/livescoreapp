const initialState = [];

export const favMatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAV_MATCH":
      return state.some(({ id }) => id === action.payload.id)
        ? state
        : [...state, action.payload];
    case "DELETE_FAV_MATCH":
      return state.filter(({ id }) => {
        return id !== action.payload.id;
      });
    default:
      return state;
  }
};
