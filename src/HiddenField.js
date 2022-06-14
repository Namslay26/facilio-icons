import * as React from "react";

const SvgHiddenfield = ({ title, titleId, ...props }) => (
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
      <style>{".hidden_field_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="hidden_field_svg__trim_area" data-name="trim area">
      <g id="hidden_field_svg__Filter">
        <path
          className="hidden_field_svg__cls-1"
          d="M181.05 94.07a89 89 0 0 0-85.05-64h-.29a87.7 87.7 0 0 0-35.81 7.81l10.28 10.28a74.55 74.55 0 0 1 25.57-4.64H96a75.48 75.48 0 0 1 71.55 52.37 75.43 75.43 0 0 1-19.32 30.32l9.51 9.51A88.62 88.62 0 0 0 181 97.92l.59-1.92Z"
        />
        <path
          className="hidden_field_svg__cls-1"
          d="M96 63.29a31.89 31.89 0 0 0-9.32 1.38L99 77a18.75 18.75 0 0 1 15.5 15.49l12.31 12.31A32.2 32.2 0 0 0 96 63.29ZM31.46 21.62 22 31.12l18.59 18.64A88.27 88.27 0 0 0 11 94.07L10.39 96l.61 1.92a89.11 89.11 0 0 0 84.73 62.93H96a88.37 88.37 0 0 0 43.92-11.77l21.3 21.3 9.51-9.5ZM78.84 88l24.62 24.62a18.55 18.55 0 0 1-7.46 1.56 18.74 18.74 0 0 1-18.72-18.72A18.34 18.34 0 0 1 78.84 88ZM96 147.4h-.24a76.14 76.14 0 0 1-71.3-51.51 75 75 0 0 1 25.7-36.57l18.78 18.79a31.8 31.8 0 0 0-5.11 17.35A32.2 32.2 0 0 0 96 127.64a31.85 31.85 0 0 0 17.35-5.12L130 139.17a74.84 74.84 0 0 1-34 8.23Z"
        />
        <path
          style={{
            fill: "none",
          }}
          d="M.01.01h192v192H.01z"
        />
      </g>
    </g>
  </svg>
);

export default SvgHiddenfield;
