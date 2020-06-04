export const showReducer = (state = { showmore: true }, action) => {
  switch (action.type) {
    case "SET_SHOW_MORE":
      return {
        showmore: !state.showmore,
      };
    default:
      return state;
  }
};

export const showFavReducer = (state = { showfavmore: true }, action) => {
  switch (action.type) {
    case "SET_SHOW_FAV_MORE":
      return {
        showfavmore: !state.showfavmore,
      };
    default:
      return state;
  }
};
