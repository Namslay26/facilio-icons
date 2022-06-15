import * as React from "react";

const SvgTrigger = ({ title, titleId, ...props }) => (
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
      d="m139.42 111.83-6.5-7-8.92-9.69v-4.25c0-4.35-.92-12.18-8.62-33.93-4.06-11.48-8.08-21.37-8.25-21.79L96 7.77 84.89 35.2C80.94 45 68 77.88 68 90.82v4.52l-8.83 9.36-6.64 7a18.17 18.17 0 0 0-4.72 12.4v19.92H144v-19.88a18.24 18.24 0 0 0-4.58-12.31ZM96 39.7s16.14 39.66 16 51.12v41.28H80V90.82C80 79.21 96 39.7 96 39.7Zm-36.15 84.44a6.18 6.18 0 0 1 1.44-4.14l6.65-7 .1 18.75v.37h-8.19Zm72.15 7.92h-8v-.18l.1-18.94 6.51 7a6.22 6.22 0 0 1 1.42 4.16Zm52 45.88a6 6 0 0 0-6-6h-40.73a26.31 26.31 0 0 1-16.38-7.13 15.52 15.52 0 0 1-4.89-10.94 6 6 0 0 0-12 0 27.22 27.22 0 0 0 7.12 18.07H80.87A27.18 27.18 0 0 0 88 153.87a6 6 0 0 0-12 0 15.53 15.53 0 0 1-4.89 10.94 26.29 26.29 0 0 1-16.38 7.13H12.91a6 6 0 1 0 0 12h.99l38 .07h.1c1 0 2 0 3-.11h82c1 .07 2 .11 3 .11h.07L178 184a6 6 0 0 0 6-6Z"
      style={{
        fill: "#334056",
      }}
      data-name="trim area"
    />
  </svg>
);

export default SvgTrigger;
