export const setFavMatch = (props) => ({
  type: "SET_FAV_MATCH",
  payload: {
    ...props,
  },
});

export const deleteFavMatch = (props) => ({
  type: "DELETE_FAV_MATCH",
  payload: {
    ...props,
  },
});
