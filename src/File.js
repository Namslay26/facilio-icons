import * as React from "react";

const SvgFile = ({ title, titleId, ...props }) => (
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
      <style>{".File_svg__cls-2{fill:#fff}"}</style>
    </defs>
    <g id="File_svg__trim_area" data-name="trim area">
      <path
        d="M172 68.22V55.87a9.2 9.2 0 0 0-2.75-6.36l-.35-.34c-.17-.19-.33-.38-.5-.55l-30.53-30.5-5.77-5.83a12 12 0 0 0-1.1-1.06 12 12 0 0 0-6-2.8 14.29 14.29 0 0 0-2.85-.3h-5l-.37-.1-72.24.12C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V94.56a5.44 5.44 0 0 0 0-.57V68.22Z"
        style={{
          fill: "#f9a825",
        }}
      />
      <path
        className="File_svg__cls-2"
        d="m124.19 22.54 1.61.45 2.8 2.8 11.51 11.65v.05l14.09 14 4.8 4.69h-23a11.83 11.83 0 0 1-11.81-11.78Z"
      />
      <path
        className="File_svg__cls-2"
        d="M159.93 163c0 4.8-5.71 8.85-12.46 8.85H44.53c-6.75 0-12.46-4-12.46-8.85V29c0-4.8 5.71-8.85 12.48-8.85l67.64-.15v24.4A23.81 23.81 0 0 0 136 68.22h24v23.45Z"
      />
    </g>
  </svg>
);

export default SvgFile;
