import * as React from "react";

const SvgAreasqft = ({ title, titleId, ...props }) => (
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
      <clipPath id="Areasqft_svg__clip-path">
        <path
          d="M-119.54-1411v-45c0-27.66-14.77-50.82-40.54-57v-6.12a13.5 13.5 0 0 0-13.52-13.52 13.49 13.49 0 0 0-13.51 13.52v6.12c-25.86 6.13-40.55 29.2-40.55 57v45l-18 18v9h144.16v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18.03Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Areasqft_svg__cls-4{fill:#334056}"}</style>
    </defs>
    <g id="Areasqft_svg__trim_area" data-name="trim area">
      <path
        style={{
          fill: "none",
        }}
        d="M.79-.27H192.5v191.71H.79z"
      />
      <path
        className="Areasqft_svg__cls-4"
        d="M158.91 177.37H34.39a19.62 19.62 0 0 1-19.6-19.6V33.25a19.62 19.62 0 0 1 19.6-19.6h124.52a19.62 19.62 0 0 1 19.6 19.6v124.52a19.62 19.62 0 0 1-19.6 19.6ZM34.39 25.65a7.61 7.61 0 0 0-7.6 7.6v124.52a7.61 7.61 0 0 0 7.6 7.6h124.52a7.61 7.61 0 0 0 7.6-7.6V33.25a7.61 7.61 0 0 0-7.6-7.6Z"
      />
      <path
        className="Areasqft_svg__cls-4"
        d="M140.14 90.61a6 6 0 0 1 6 6v38.05a9.92 9.92 0 0 1-9.91 9.89h-38a6 6 0 1 1 0-12h27.46L59.93 66.83v27.46a6 6 0 1 1-12 0V56.24a9.9 9.9 0 0 1 9.9-9.9h38.05a6 6 0 1 1 0 12H68.42l65.72 65.73V96.6a6 6 0 0 1 6-5.99Z"
      />
    </g>
  </svg>
);

export default SvgAreasqft;
