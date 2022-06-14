import * as React from "react";

const SvgProfile = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M183.51 164.9c-2.51-22.07-22.62-56.9-61.64-68.05a48.19 48.19 0 1 0-51.81 0c-38.62 11-58.18 45.71-61.13 67.83-1.37 10.24 7.91 19.22 19.87 19.22h134.81c11.83-.05 21.04-8.85 19.9-19ZM59.81 56.19A36.19 36.19 0 1 1 96 92.39a36.23 36.23 0 0 1-36.19-36.2Zm110.68 113a9.26 9.26 0 0 1-6.88 2.71H28.8a9.21 9.21 0 0 1-6.94-2.77 3.59 3.59 0 0 1-1-2.86c1.35-10.07 7.44-25.55 20.5-38.8 9.94-10.08 27.46-22.11 54.47-22.11 27.34 0 45.18 12.13 55.32 22.31 13.42 13.47 19.42 29.22 20.47 38.62a3.68 3.68 0 0 1-1.13 2.85Z"
      style={{
        fill: "#334056",
      }}
      data-name="trim area"
    />
  </svg>
);

export default SvgProfile;
