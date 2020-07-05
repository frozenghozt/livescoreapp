import { SET_TODAYS_LEAGUE_DATA } from "../Actions";

const initialState = {
  count: 0,
  filters: null,
  matches: [],
};

export const todaysLeagueData = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAYS_LEAGUE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
