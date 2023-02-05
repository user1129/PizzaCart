import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={310}
    height={440}
    viewBox="0 0 310 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="36" y="411" rx="10" ry="10" width="93" height="28" />
    <rect x="31" y="284" rx="10" ry="10" width="279" height="20" />
    <rect x="33" y="318" rx="10" ry="10" width="278" height="80" />
    <rect x="157" y="412" rx="10" ry="10" width="152" height="27" />
    <circle cx="165" cy="142" r="130" />
  </ContentLoader>
);

export default Skeleton;
