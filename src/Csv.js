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
    <defs>
      <style>{".CSV_svg__cls-2{fill:#fff}"}</style>
    </defs>
    <g id="CSV_svg__trim_area" data-name="trim area">
      <path
        d="M147.47 8.15H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
        style={{
          fill: "#007934",
        }}
      />
      <path
        className="CSV_svg__cls-2"
        d="M68.55 82.07H57.43l-3.62-6-3.58 6H39.4l9-12.83-8.09-13H51.7l2.74 5.29 3.09-5.29h10.39l-8 12.3ZM88.01 55.99h60.04v12H88.01zM88.14 75.99h60.04v12H88.14zM87.94 95.99h60.04v12H87.94z"
      />
    </g>
  </svg>
);

export default SvgCsv;
