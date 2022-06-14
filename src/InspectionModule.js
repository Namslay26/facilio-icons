import * as React from "react";

const SvgInspectionmodule = ({ title, titleId, ...props }) => (
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
      <style>{".Inspection_module_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Inspection_module_svg__trim_area" data-name="trim area">
      <path
        className="Inspection_module_svg__cls-1"
        d="M99.94 60H43.87a4 4 0 1 1 0-8h56.07a4 4 0 0 1 0 8ZM120 84H43.87a4 4 0 1 1 0-8H120a4 4 0 0 1 0 8ZM80.49 108h-36.1a4 4 0 0 1 0-8h36.1a4 4 0 0 1 0 8Z"
      />
      <path
        className="Inspection_module_svg__cls-1"
        d="M87.92 177.75a6 6 0 0 0-6-6H27.35c-4 0-7.17-3.58-7.17-8V27.92c0-4.41 3.22-8 7.17-8h107c4 0 7.17 3.59 7.17 8v49.92a6 6 0 0 0 6 6 6 6 0 0 0 6-6V27.92c0-11-8.58-20-19.17-20h-107c-10.59 0-19.17 9-19.17 20v135.83c0 11.05 8.58 20 19.17 20h54.57a6 6 0 0 0 6-6ZM175.9 156.11V176h-19.81v-19.89h19.81m8-8h-35.81V184h35.81v-35.89Z"
      />
      <path
        className="Inspection_module_svg__cls-1"
        d="M135.9 156v20h-19.81v-20h19.81m8-8h-35.81v36h35.81v-36ZM175.9 116.08V136h-19.81v-19.92h19.81m8-8h-35.81V144h35.81v-35.92ZM135.9 116.08V136h-19.81v-19.92h19.81m8-8h-35.81V144h35.81v-35.92Z"
      />
    </g>
  </svg>
);

export default SvgInspectionmodule;
