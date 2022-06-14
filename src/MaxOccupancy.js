import * as React from "react";

const SvgMaxOccupancy = ({ title, titleId, ...props }) => (
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
      <clipPath id="Max_Occupancy_svg__clip-path">
        <path
          d="M749.64-1411v-45c0-27.66-14.78-50.82-40.55-57v-6.12a13.5 13.5 0 0 0-13.51-13.52 13.5 13.5 0 0 0-13.52 13.52v6.12c-25.86 6.13-40.55 29.2-40.55 57v45l-18 18v9h144.15v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18.03Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Max_Occupancy_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Max_Occupancy_svg__trim_area" data-name="trim area">
      <path
        className="Max_Occupancy_svg__cls-3"
        d="M112.12 100.75a22.79 22.79 0 1 0-32.74 0 31.78 31.78 0 0 0-20.81 29.8v4.73a14.83 14.83 0 0 0 14.81 14.81h44.74a14.83 14.83 0 0 0 14.81-14.81v-4.73a31.78 31.78 0 0 0-20.81-29.8Zm-16.38-25.5a9.67 9.67 0 1 1-9.66 9.67 9.69 9.69 0 0 1 9.66-9.67Zm24.07 60a1.69 1.69 0 0 1-1.69 1.69H73.38a1.69 1.69 0 0 1-1.69-1.69v-4.73a18.65 18.65 0 0 1 18.62-18.62h10.87a18.65 18.65 0 0 1 18.63 18.62Z"
      />
      <path
        className="Max_Occupancy_svg__cls-3"
        d="M187.49 76.27 104.25 9.82l-.44-.24a16.47 16.47 0 0 0-16.12 0l-.43.24L4 76.27a6 6 0 0 0 7.48 9.38l15.3-12.21v94a16.32 16.32 0 0 0 16.5 16.09h104.93a16.32 16.32 0 0 0 16.5-16.09v-94L180 85.65a6 6 0 0 0 7.48-9.38Zm-34.78 91.14a4.32 4.32 0 0 1-4.5 4.09H43.29a4.32 4.32 0 0 1-4.5-4.09V63.86l55.1-44a4.5 4.5 0 0 1 3.73 0l55.09 44Z"
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

export default SvgMaxOccupancy;
