import * as React from "react";

const SvgDoc = ({ title, titleId, ...props }) => (
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
      <style>{".DOC_svg__cls-2{fill:#fff}"}</style>
    </defs>
    <g id="DOC_svg__trim_area" data-name="trim area">
      <path
        d="M147.47 8.15H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
        style={{
          fill: "#3980fb",
        }}
      />
      <path
        className="DOC_svg__cls-2"
        d="M54 70h83.99v12H54zM54 90h83.99v12H54zM54 110h83.99v12H54z"
      />
    </g>
  </svg>
);

export default SvgDoc;
