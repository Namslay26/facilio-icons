import * as React from "react";

const SvgDocuments = ({ title, titleId, ...props }) => (
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
      <style>{".Documents_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Documents_svg__trim_area" data-name="trim area">
      <path
        className="Documents_svg__cls-1"
        d="M140.37 112.07H80.52a4 4 0 1 1 0-8h59.85a4 4 0 0 1 0 8ZM140.47 132.12H80.62a4 4 0 0 1 0-8h59.85a4 4 0 1 1 0 8Z"
      />
      <path
        className="Documents_svg__cls-1"
        d="M184.16 65.76c-.35-8.34-7.11-11.68-12.22-12.61v-4.07a17 17 0 0 0-17-17h-10.89V25a17 17 0 0 0-17-17H37.22a17 17 0 0 0-17 17v117.65a17 17 0 0 0 17 17h10.89v7.12a17 17 0 0 0 17 17h89.83a17 17 0 0 0 17-17V80.71a17.15 17.15 0 0 0 8.51-4.59 13.8 13.8 0 0 0 3.71-10.36Zm-136-16.68v98.57H37.22a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5h89.83a5 5 0 0 1 5 5v7.12H65.11a17 17 0 0 0-17 16.96Zm111.83 115v2.69a5 5 0 0 1-5 5H65.11a5 5 0 0 1-5-5V49.08a5 5 0 0 1 5-5h89.83a5 5 0 0 1 5 5v24.29h-33.57a2.64 2.64 0 0 1-2.67-2.61 2.06 2.06 0 0 1 .5-1.59 2 2 0 0 1 1.36-.47h12.57a4 4 0 0 0 0-8h-12.57a9.89 9.89 0 0 0-7.09 2.89 10 10 0 0 0-2.77 7.17V71a10.66 10.66 0 0 0 10.67 10.4h33.57v82.71Zm14.74-93.5a7.93 7.93 0 0 1-2.74 1.76V61.4c.33.1.66.22 1 .36 2.75 1.18 3.16 2.93 3.22 4.33a5.82 5.82 0 0 1-1.53 4.49Z"
      />
    </g>
  </svg>
);

export default SvgDocuments;
