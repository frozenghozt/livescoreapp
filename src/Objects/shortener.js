export const shortener = (name) => {
  switch (name) {
    case "Nottingham Forest FC":
      return "Nottingham";
    case "Fulham FC":
      return "Fulham";
    case "Reading FC":
      return "Reading";
    case "Huddersfield Town AFC":
      return "Huddersfield";
    default:
      return name;
  }
};
