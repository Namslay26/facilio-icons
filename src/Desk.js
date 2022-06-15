import * as React from "react";

const SvgDesk = ({ title, titleId, ...props }) => (
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
      <style>{".Desk_svg__cls-1{fill:#324056}"}</style>
    </defs>
    <g id="Desk_svg__trim_area" data-name="trim area">
      <g id="Desk_svg__Filter">
        <path
          className="Desk_svg__cls-1"
          d="M179 29.36H13a6 6 0 0 0 0 12h14v120a6 6 0 0 0 12 0v-120h51V108a10.61 10.61 0 0 0 10.6 10.6H153v42.77a6 6 0 0 0 12 0v-120h14a6 6 0 0 0 0-12Zm-26 77.23h-51V80h51ZM153 68h-51V41.36h51Z"
        />
        <path
          className="Desk_svg__cls-1"
          d="M132.42 59.17h-11.84a4.5 4.5 0 0 1 0-9h11.84a4.5 4.5 0 0 1 0 9Zm0 38.61h-11.84a4.5 4.5 0 0 1 0-9h11.84a4.5 4.5 0 0 1 0 9Z"
        />
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h192v192H0z"
        />
      </g>
    </g>
  </svg>
);

export default SvgDesk;
