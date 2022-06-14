import * as React from "react";

const SvgLegends = ({ title, titleId, ...props }) => (
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
      <circle
        cx={62}
        cy={62}
        r={30}
        style={{
          fill: "#8d72d3",
        }}
      />
      <circle
        cx={130}
        cy={62}
        r={30}
        style={{
          fill: "#eb8359",
        }}
      />
      <circle
        cx={62}
        cy={130}
        r={30}
        style={{
          fill: "#549773",
        }}
      />
      <circle
        cx={130}
        cy={130}
        r={30}
        style={{
          fill: "#d494be",
        }}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgLegends;
