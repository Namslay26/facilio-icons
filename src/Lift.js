import * as React from "react";

const SvgLift = ({ title, titleId, ...props }) => (
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
      <clipPath id="Lift_svg__clip-path">
        <path
          d="M525.15-1632.69v-45c0-27.66-14.78-50.82-40.54-57v-6.12a13.5 13.5 0 0 0-13.52-13.52 13.5 13.5 0 0 0-13.52 13.52v6.12c-25.86 6.13-40.54 29.2-40.54 57v45l-18 18v9h144.14v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Lift_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Lift_svg__trim_area" data-name="trim area">
      <path
        className="Lift_svg__cls-3"
        d="M160.75 13.75H30.47a16.74 16.74 0 0 0-16.72 16.72v130.27a16.75 16.75 0 0 0 16.72 16.73h130.28a16.75 16.75 0 0 0 16.72-16.73V30.47a16.74 16.74 0 0 0-16.72-16.72Zm-135 147V30.47a4.72 4.72 0 0 1 4.72-4.72h59.14v139.72H30.47a4.73 4.73 0 0 1-4.72-4.73Zm139.72 0a4.73 4.73 0 0 1-4.72 4.73h-59.14V25.75h59.14a4.72 4.72 0 0 1 4.72 4.72Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M-.25-.45h192v192h-192z"
      />
      <path
        className="Lift_svg__cls-3"
        d="M83.7 80.16a5 5 0 0 1-7.07 0L63 66.49v69a5 5 0 0 1-10 0v-69L39.29 80.16a5 5 0 1 1-7.07-7.07l20.15-20.16a7.92 7.92 0 0 1 11.18 0L83.7 73.09a5 5 0 0 1 0 7.07ZM159.7 110.93a5 5 0 0 0-7.07 0L139 124.6v-69a5 5 0 0 0-10 0v69l-13.67-13.67a5 5 0 1 0-7.07 7.07l20.15 20.16a7.92 7.92 0 0 0 11.18 0L159.7 118a5 5 0 0 0 0-7.07Z"
      />
    </g>
  </svg>
);

export default SvgLift;
