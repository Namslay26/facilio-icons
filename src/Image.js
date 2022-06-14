import * as React from "react";

const SvgImage = ({ title, titleId, ...props }) => (
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
      <style>{".Image_svg__cls-1{fill:#7f8a90}"}</style>
    </defs>
    <g id="Image_svg__trim_area" data-name="trim area">
      <path
        className="Image_svg__cls-1"
        d="M146.51 7.59 43.57 8.72c-13.51.14-24.35 9.6-24.23 21.11l1.47 134c.12 11.51 11.18 20.73 24.68 20.58l58.81-.64 44.13-.49c13.51-.14 24.35-9.6 24.23-21.11l-.78-71.34-.69-62.66C171.07 16.66 160 7.44 146.51 7.59ZM43.7 20.71l102.94-1.12c6.75-.08 12.5 3.91 12.55 8.71l.69 62.7.44 40.56-19.78-19.35-23.92 24.45-40.87-40-43.19 44.14-1.22-111.1c-.05-4.8 5.66-8.91 12.36-8.99Z"
      />
      <circle className="Image_svg__cls-1" cx={113.85} cy={85.75} r={9.93} />
    </g>
  </svg>
);

export default SvgImage;
