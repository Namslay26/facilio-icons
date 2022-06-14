import * as React from "react";

const SvgIndividuallytrack = ({ title, titleId, ...props }) => (
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
      <clipPath id="Individually_track_svg__clip-path">
        <path
          d="M973-1179.47v-45c0-27.66-14.78-50.82-40.54-57v-6.12a13.5 13.5 0 0 0-13.52-13.52 13.5 13.5 0 0 0-13.52 13.52v6.12c-25.86 6.13-40.54 29.2-40.54 57v45l-18 18v9H991v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 17.96 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Individually_track_svg__cls-3{fill:#324056}"}</style>
    </defs>
    <g id="Individually_track_svg__trim_area" data-name="trim area">
      <path
        className="Individually_track_svg__cls-3"
        d="M157.65 17.92H34.35a16.46 16.46 0 0 0-16.44 16.43v123.3a16.46 16.46 0 0 0 16.44 16.44h91.31a6 6 0 0 0 0-12H34.35a4.44 4.44 0 0 1-4.44-4.44V34.35a4.44 4.44 0 0 1 4.44-4.43h37.06v34.17a7.63 7.63 0 0 0 12.27 6L96 60.67l12.32 9.47a7.62 7.62 0 0 0 4.68 1.59 7.67 7.67 0 0 0 7.64-7.64V29.92h37.05a4.44 4.44 0 0 1 4.44 4.43v91.5a6 6 0 0 0 12 0v-91.5a16.45 16.45 0 0 0-16.48-16.43Zm-49.05 37.3-7.95-6.11a7.62 7.62 0 0 0-9.29 0l-8 6.11v-25.3h25.24Z"
      />
      <path
        className="Individually_track_svg__cls-3"
        d="m169.54 152.1-25.64-25.64a35.54 35.54 0 1 0-17.43 17.45l25.62 25.63a12.14 12.14 0 0 0 17.16 0l.28-.28a12.15 12.15 0 0 0 .01-17.16Zm-76.1-22.43a25.61 25.61 0 1 1 18.11 7.5 25.44 25.44 0 0 1-18.11-7.5Zm69 32.51-.29.29a2.14 2.14 0 0 1-3 0l-23.74-23.74 3.3-3.3 23.73 23.74a2.12 2.12 0 0 1 .03 3.01Z"
      />
      <path
        className="Individually_track_svg__cls-3"
        d="M111.66 132a20.22 20.22 0 0 1-16-7.66 20.68 20.68 0 0 1-3.82-15.63 3 3 0 0 1 5.92 1 14.57 14.57 0 0 0 2.64 11 14.42 14.42 0 0 0 13.56 5.17 3 3 0 1 1 .88 5.93 21.08 21.08 0 0 1-3.18.19Z"
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

export default SvgIndividuallytrack;
