import * as React from "react";

const SvgXls = ({ title, titleId, ...props }) => (
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
        d="M147.47 8.15H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
        style={{
          fill: "#479a5f",
        }}
      />
      <path
        style={{
          fill: "#fff",
        }}
        d="M152.09 55.94H92.02V27.93H71.94v28.01H35.92v15.99h36.02v96.08h20.08V71.93h60.07V55.94z"
      />
    </g>
  </svg>
);

export default SvgXls;
