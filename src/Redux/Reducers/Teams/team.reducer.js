const initialState = {};

export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOW_MORE":
      return {
        showmore: !state.showmore,
      };
    default:
      return state;
  }
};
