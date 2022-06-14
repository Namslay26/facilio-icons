import * as React from "react";

const SvgThemes = ({ title, titleId, ...props }) => (
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
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
      <path
        d="M175.89 17.58H46.15a11.07 11.07 0 0 0-11 11.05v6.85h-19a11 11 0 0 0-11 11v42a11 11 0 0 0 11 11h89.09v16H101a9.85 9.85 0 0 0-9.84 9.85v46.06a9.85 9.85 0 0 0 9.84 9.85h20.29a9.87 9.87 0 0 0 9.87-9.85v-46.11a9.87 9.87 0 0 0-9.87-9.85h-4.13v-17a11 11 0 0 0-11-11H17.05v-40H35.1v6.84a11.07 11.07 0 0 0 11 11.05h129.79a11.07 11.07 0 0 0 11.11-11V28.63a11.07 11.07 0 0 0-11.11-11.05Zm-56.75 109.85v41.76h-16v-41.76ZM175 53.37H47.1V29.58H175Z"
        style={{
          fill: "#334056",
        }}
      />
    </g>
  </svg>
);

export default SvgThemes;
