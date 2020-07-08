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
    case "SC Corinthians Paulista":
      return "Corinthians";
    case "West Bromwich Albion FC":
      return "Bromwich";
    case "Brighton & Hove Albion FC":
      return "Brighton";
    case "Sheffield Wednesday FC":
      return "Sheffield";
    case "RCD Espanyol de Barcelona":
      return "Espanyol";
    case "Wolverhampton Wanderers FC":
      return "Wolverhampton";
    case "Queens Park Rangers FC":
      return "QP Rangers";
    default:
      return name;
  }
};
