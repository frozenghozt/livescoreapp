import React from "react";
import ContentLoader from "react-content-loader";

const ResultsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1080}
    height={172}
    // viewBox="0 0 100% 100%"
    // backgroundColor="#213743"
    // foregroundColor="#192C38"
    preserveAspectRatio="none"
    backgroundColor="#192C38"
    foregroundColor="#213743"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="93" />
    <rect x="0" y="104" rx="3" ry="3" width="100%" height="66" />
    <rect x="0" y="180" rx="3" ry="3" width="100%" height="66" />
    <rect x="0" y="256" rx="3" ry="3" width="100%" height="66" />
    <rect x="0" y="332" rx="3" ry="3" width="100%" height="93" />
  </ContentLoader>
);

export default ResultsLoader;
