import * as React from "react";

const SvgParking = ({ title, titleId, ...props }) => (
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
      <clipPath id="Parking_svg__clip-path">
        <path
          d="M308.9-1179.47v-45c0-27.66-14.78-50.82-40.55-57v-6.12a13.49 13.49 0 0 0-13.51-13.52 13.5 13.5 0 0 0-13.52 13.52v6.12c-25.86 6.13-40.54 29.2-40.54 57v45l-18 18v9h144.14v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Parking_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Parking_svg__trim_area" data-name="trim area">
      <path
        className="Parking_svg__cls-3"
        d="M163.09 177.94H28.94A14.94 14.94 0 0 1 14 163V30.59a16.67 16.67 0 0 1 16.67-16.65h132.42A14.94 14.94 0 0 1 178 28.86V163a15 15 0 0 1-14.91 14.94Zm-132.42-152A4.65 4.65 0 0 0 26 30.59V163a2.92 2.92 0 0 0 2.92 2.92h134.17A2.93 2.93 0 0 0 166 163V28.86a2.93 2.93 0 0 0-2.93-2.92Z"
      />
      <path
        className="Parking_svg__cls-3"
        d="M62 137.4V53.71a8.45 8.45 0 0 1 8.45-8.45H105c20 0 30.87 13.51 30.87 29.63s-11 29.36-30.87 29.36H81.59v33.15a9.78 9.78 0 0 1-9.78 9.79A9.79 9.79 0 0 1 62 137.4Zm40.4-75.32H81.72a.13.13 0 0 0-.13.13v25.1a.13.13 0 0 0 .13.13h20.89c7.86 0 14.25-6.84 13.16-14.63-.9-6.49-6.33-10.73-13.37-10.73Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M-.11-.06h192v192h-192z"
      />
    </g>
  </svg>
);

export default SvgParking;
