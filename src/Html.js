import * as React from "react";

const SvgHtml = ({ title, titleId, ...props }) => (
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
      <style>{".HTML_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="HTML_svg__trim_area" data-name="trim area">
      <path
        className="HTML_svg__cls-1"
        d="M147.47 20.15c6.75 0 12.46 4.05 12.46 8.85v134c0 4.8-5.71 8.85-12.46 8.85H44.53c-6.75 0-12.46-4-12.46-8.85V29c0-4.8 5.71-8.85 12.46-8.85h102.94m0-12H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
      />
      <path
        className="HTML_svg__cls-1"
        d="M78.42 102.42V114l-28.2-11V92.28l28.2-11v11.3l-14.1 4.92ZM82.68 118 96.6 74h12.72l-14 44ZM127.68 97.8l-14.1-4.92V81.3l28.2 11V103l-28.2 11v-11.28Z"
      />
    </g>
  </svg>
);

export default SvgHtml;
