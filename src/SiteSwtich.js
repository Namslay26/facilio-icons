import * as React from "react";

const SvgSiteswtich = ({ title, titleId, ...props }) => (
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
      d="M155 52.08H67.9V29.53a9.11 9.11 0 0 0-5.41-8.37 8.76 8.76 0 0 0-9.57 1.6L17 55.82a9.22 9.22 0 0 0 .1 13.61l36 32.1a8.76 8.76 0 0 0 9.44 1.47 9.13 9.13 0 0 0 5.35-8.34V72.12H155a5 5 0 0 0 5-5v-10a5 5 0 0 0-5-5.04ZM55.89 88 27.36 62.55l28.55-26.22Zm119.16 35.62-36-33.06A8.78 8.78 0 0 0 129.5 89a9.11 9.11 0 0 0-5.41 8.37v22.55H37a5 5 0 0 0-5 5v10.05a5 5 0 0 0 5 5h87.1v22.55a9.12 9.12 0 0 0 5.35 8.34 8.76 8.76 0 0 0 9.53-1.49l36-32.1a9.22 9.22 0 0 0 .1-13.61Zm-38.94 32.2v-51.69l28.55 26.23Z"
      style={{
        fill: "#334056",
      }}
      data-name="trim area"
    />
  </svg>
);

export default SvgSiteswtich;
