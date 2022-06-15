import * as React from "react";

const SvgVisitscopy = ({ title, titleId, ...props }) => (
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
        d="M169.92 47.87h-6V38a14 14 0 0 0-14-14H22.08a14 14 0 0 0-14 14v91.95a14 14 0 0 0 14 14H28v13.91a14 14 0 0 0 14 14h127.9a14 14 0 0 0 14-14v-96a14 14 0 0 0-13.98-13.99ZM22.08 135.94a6 6 0 0 1-6-6V38a6 6 0 0 1 6-6H150a6 6 0 0 1 6 6v91.95a6 6 0 0 1-6 6H22.08Zm153.84 21.91a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6v-13.91h114a14 14 0 0 0 14-14V55.87h6a6 6 0 0 1 6 6Z"
        style={{
          stroke: "#334056",
          strokeMiterlimit: 10,
          strokeWidth: 4,
          fill: "#334056",
        }}
      />
      <path
        d="M90.88 64.09H37.13a9 9 0 0 1-9-9v-6a9 9 0 0 1 9-9h53.75a9 9 0 0 1 9 9v6a9 9 0 0 1-9 9Zm-53.75-16a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h53.75a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM96.4 79.92H31.92a4 4 0 0 1 0-8H96.4a4 4 0 0 1 0 8ZM132.09 108h-100a4 4 0 0 1 0-8h100a4 4 0 0 1 0 8ZM56 122H31.88a4 4 0 1 1 0-8H56a4 4 0 0 1 0 8Z"
        style={{
          fill: "#334056",
        }}
      />
    </g>
  </svg>
);

export default SvgVisitscopy;
