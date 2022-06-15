import * as React from "react";

const SvgJobs = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="trim area">
      <path
        d="M164 74.68V22.16a14 14 0 0 0-14-14L42.13 8a14 14 0 0 0-14 14v52.6l-20 15v80.29a14 14 0 0 0 14 14h147.8a14 14 0 0 0 14-14V89.62Zm0 10 11.83 8.88L164 99.21ZM36.1 22a6 6 0 0 1 6-6l107.9.16a6 6 0 0 1 6 6V103l-59.47 28.4a1 1 0 0 1-.86 0L36.1 103.08V22Zm-8 62.61v14.66l-12-5.69Zm147.76 85.31a6 6 0 0 1-6 6H22.06a6 6 0 0 1-6-6v-66l12 5.74 64 30.86a9 9 0 0 0 8.2 0l51.32-25L175.86 104Z"
        style={{
          stroke: "#334056",
          strokeMiterlimit: 10,
          strokeWidth: 4,
          fill: "#334056",
        }}
      />
      <path
        d="m64.44 31.89 3.87 7.86 8.67 1.26-6.27 6.11 1.48 8.63-7.75-4.07-7.76 4.07 1.48-8.63-6.27-6.11 8.67-1.26 3.88-7.86zM140.06 48H92a4 4 0 0 1 0-8h48.07a4 4 0 1 1 0 8Zm0 16.06H92a4 4 0 0 1 0-8h48.07a4 4 0 0 1 0 8Zm0 16.03H92a4 4 0 1 1 0-8h48.07a4 4 0 0 1 0 8Z"
        style={{
          fill: "#334056",
        }}
      />
    </g>
  </svg>
);

export default SvgJobs;
