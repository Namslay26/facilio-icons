import * as React from "react";

const SvgFloorMap = ({ title, titleId, ...props }) => (
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
      d="M177.85 80a6 6 0 0 0 6-6V28.15a20 20 0 0 0-20-20H28.13a20 20 0 0 0-20 20L8 164a20 20 0 0 0 20 20h135.85a20 20 0 0 0 20-20v-34a6 6 0 0 0-12 0v34a8 8 0 0 1-8 8H88v-52.25h26a6 6 0 0 0 0-12H88V60h54a6 6 0 0 0 0-12H82a6 6 0 0 0-6 6v118H28.3a8.4 8.4 0 0 1-5.57-2 7.94 7.94 0 0 1-2.73-6l.06-76H45.9a6 6 0 1 0 0-12H20.09V28.14a8 8 0 0 1 8-8h135.76a8 8 0 0 1 8 8V74a6 6 0 0 0 6 6Z"
      style={{
        fill: "#334056",
      }}
      data-name="trim area"
    />
  </svg>
);

export default SvgFloorMap;
