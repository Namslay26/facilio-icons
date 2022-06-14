import * as React from "react";

const SvgPrivacypolicy = ({ title, titleId, ...props }) => (
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
      <style>{".Privacy_policy_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Privacy_policy_svg__trim_area" data-name="trim area">
      <path
        className="Privacy_policy_svg__cls-1"
        d="M99.94 60H43.87a4 4 0 1 1 0-8h56.07a4 4 0 0 1 0 8ZM120 92H43.87a4 4 0 1 1 0-8H120a4 4 0 0 1 0 8ZM99.94 124H43.87a4 4 0 1 1 0-8h56.07a4 4 0 0 1 0 8Z"
      />
      <path
        d="M148 120a8.16 8.16 0 0 0-8.14 7.92h16.29A8.16 8.16 0 0 0 148 120Z"
        style={{
          fill: "none",
        }}
      />
      <circle
        className="Privacy_policy_svg__cls-1"
        cx={147.79}
        cy={156.02}
        r={8}
      />
      <path
        className="Privacy_policy_svg__cls-1"
        d="M168.18 128a20.15 20.15 0 0 0-40.29 0 17.35 17.35 0 0 0-16.12 17.28v21.45a17.36 17.36 0 0 0 17.34 17.34h37.37a17.36 17.36 0 0 0 17.34-17.34v-21.44A17.36 17.36 0 0 0 168.18 128ZM148 120a8.16 8.16 0 0 1 8.15 7.92h-16.26A8.16 8.16 0 0 1 148 120Zm23.79 46.71a5.35 5.35 0 0 1-5.34 5.34h-37.34a5.34 5.34 0 0 1-5.34-5.34v-21.42a5.35 5.35 0 0 1 5.34-5.34h37.37a5.35 5.35 0 0 1 5.34 5.34Z"
      />
      <path
        className="Privacy_policy_svg__cls-1"
        d="M87.92 177.75a6 6 0 0 0-6-6H27.35c-4 0-7.17-3.58-7.17-8V27.92c0-4.41 3.22-8 7.17-8h107c4 0 7.17 3.59 7.17 8v49.92a6 6 0 0 0 6 6 6 6 0 0 0 6-6V27.92c0-11-8.58-20-19.17-20h-107c-10.59 0-19.17 9-19.17 20v135.83c0 11.05 8.58 20 19.17 20h54.57a6 6 0 0 0 6-6Z"
      />
    </g>
  </svg>
);

export default SvgPrivacypolicy;
