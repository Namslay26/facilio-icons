import * as React from "react";

const SvgSort = ({ title, titleId, ...props }) => (
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
      <style>{".sort_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="sort_svg__trim_area" data-name="trim area">
      <g id="sort_svg__Filter">
        <path
          className="sort_svg__cls-1"
          d="M108 62.34a6 6 0 0 1-8.49 0L72.05 34.87V168a6 6 0 0 1-12 0V34.87L32.58 62.34a6 6 0 0 1-8.49-8.48L59 19a10 10 0 0 1 14.14 0L108 53.86a6 6 0 0 1 0 8.48Z"
        />
        <path
          className="sort_svg__cls-1"
          d="M165.69 127.66a6 6 0 0 0-8.49 0l-27.47 27.47V22.05a6 6 0 1 0-12 0v133.08l-27.47-27.47a6 6 0 1 0-8.49 8.48L116.66 171a10 10 0 0 0 14.14 0l34.89-34.89a6 6 0 0 0 0-8.45Z"
        />
        <path
          style={{
            fill: "none",
          }}
          d="M0-.03h192v192H0z"
        />
      </g>
    </g>
  </svg>
);

export default SvgSort;
