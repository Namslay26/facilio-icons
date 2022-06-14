import * as React from "react";

const SvgStorage = ({ title, titleId, ...props }) => (
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
      <clipPath id="Storage_svg__clip-path">
        <path
          d="M-119.54-1633.15v-45c0-27.66-14.77-50.81-40.54-56.94v-6.13a13.49 13.49 0 0 0-13.52-13.51 13.49 13.49 0 0 0-13.51 13.51v6.13c-25.86 6.13-40.55 29.19-40.55 56.94v45l-18 18v9h144.16v-9Zm-54.06 54.07a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Storage_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Storage_svg__trim_area" data-name="trim area">
      <path
        className="Storage_svg__cls-3"
        d="M172 111.57H20a.09.09 0 0 0-.1.1h152.18a.1.1 0 0 0-.08-.1Z"
      />
      <path
        className="Storage_svg__cls-3"
        d="M184.08 75.74A12.12 12.12 0 0 0 172 63.64H20a12.11 12.11 0 0 0-12.1 12.1v23.84a12 12 0 0 0 1.62 6 12.05 12.05 0 0 0-1.62 6v23.92a12 12 0 0 0 1.62 6.05 12 12 0 0 0-1.62 6v23.83A12.1 12.1 0 0 0 20 183.52h152a12.11 12.11 0 0 0 12.1-12.1v-23.83a11.92 11.92 0 0 0-1.63-6 11.93 11.93 0 0 0 1.63-6.05v-23.87a12 12 0 0 0-1.63-6 11.89 11.89 0 0 0 1.63-6Zm-164.17 0a.1.1 0 0 1 .1-.1H172a.11.11 0 0 1 .1.1v23.84a.1.1 0 0 1-.1.1H20a.09.09 0 0 1-.1-.1Zm152.17 95.68a.1.1 0 0 1-.1.1H20a.09.09 0 0 1-.1-.1v-23.83a.09.09 0 0 1 .1-.1h152a.1.1 0 0 1 .1.1Zm0-35.92a.1.1 0 0 1-.1.1H20a.09.09 0 0 1-.1-.1v-23.83a.09.09 0 0 1 .1-.1h152a.1.1 0 0 1 .1.1Z"
      />
      <path
        className="Storage_svg__cls-3"
        d="M183.81 75.59H8.25l20.32-51.14a14 14 0 0 1 13.06-8.86H149a14 14 0 0 1 12.94 8.56Zm-157.88-12h139.74L150.9 28.84a2.07 2.07 0 0 0-1.9-1.25H41.63a2 2 0 0 0-1.91 1.29Z"
      />
      <circle className="Storage_svg__cls-3" cx={32.6} cy={87.62} r={5} />
      <rect
        className="Storage_svg__cls-3"
        x={45.7}
        y={82.71}
        width={118.19}
        height={10}
        rx={5}
      />
      <circle className="Storage_svg__cls-3" cx={32.6} cy={123.55} r={5} />
      <rect
        className="Storage_svg__cls-3"
        x={45.7}
        y={118.63}
        width={118.19}
        height={10}
        rx={5}
      />
      <circle className="Storage_svg__cls-3" cx={32.6} cy={159.47} r={5} />
      <rect
        className="Storage_svg__cls-3"
        x={45.7}
        y={154.55}
        width={118.19}
        height={10}
        rx={5}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M-.01-.41h192v192h-192z"
      />
    </g>
  </svg>
);

export default SvgStorage;
