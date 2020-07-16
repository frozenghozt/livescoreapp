export const SET_TODAYS_LEAGUE_DATA = "SET_TODAYS_LEAGUE_DATA";

export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

export const apiStart = (label) => ({
  type: API_START,
  payload: label,
});

export const apiEnd = (label) => ({
  type: API_END,
  payload: label,
});

export const accessDenied = (url) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});

export const apiAction = ({
  url = "",
  onSuccess = () => {},
  onFailure = () => {},
  headers = {
    "X-Auth-Token": "f252ebb82e064258af98f1d258c4d5fa",
  },
  label = "",
}) => ({
  type: API,
  payload: {
    url,
    onSuccess,
    onFailure,
    headers,
    label,
  },
});

const setTodaysLeagueData = (data) => ({
  type: SET_TODAYS_LEAGUE_DATA,
  payload: data,
});

export const fetchTodaysLeagueData = () => {
  return apiAction({
    url: "https://api.football-data.org/v2/matches",
    onSuccess: setTodaysLeagueData,
    onFailure: () => {
      console.log("Error occured loading articles");
    },
  });
};
