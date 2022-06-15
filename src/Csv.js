import * as React from "react";

const SvgCsv = ({ title, titleId, ...props }) => (
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
          fill: "#007934",
        }}
      />
      <path
        d="M68.55 82.07H57.43l-3.62-6-3.58 6H39.4l9-12.83-8.09-13H51.7l2.74 5.29 3.09-5.29h10.39l-8 12.3Zm19.46-26.08h60.04v12H88.01zm.13 20h60.04v12H88.14zm-.2 20h60.04v12H87.94z"
        style={{
          fill: "#fff",
        }}
      />
    </g>
  </svg>
);

export default SvgCsv;
