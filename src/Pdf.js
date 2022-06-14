import * as React from "react";

const SvgPdf = ({ title, titleId, ...props }) => (
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
      <style>{".PDF_svg__cls-1{fill:#9e0000}"}</style>
    </defs>
    <g id="PDF_svg__trim_area" data-name="trim area">
      <path
        className="PDF_svg__cls-1"
        d="M147.47 8.15H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-10.93-20.85-24.46-20.85ZM75.92 123.36a9.7 9.7 0 0 1-2.35 3.94 11.16 11.16 0 0 1-4.47 2.63 21.68 21.68 0 0 1-7 1h-3v10.62H48.31v-35.46h13.74a22.14 22.14 0 0 1 7 1 11.63 11.63 0 0 1 4.49 2.63A9.35 9.35 0 0 1 76 113.6a16.51 16.51 0 0 1 .69 4.84 16.3 16.3 0 0 1-.77 4.92Zm33.43 13.54q-4.71 4.62-13.7 4.62H81.11v-35.43h14.54q9.28 0 13.87 4.51t4.59 13q-.04 8.69-4.76 13.3Zm34.34-21.9H129.6v5.8h13.3v8.89h-13.3v11.86h-11v-35.46h25.11Z"
      />
      <path
        className="PDF_svg__cls-1"
        d="M96.05 115.51h-3.92v16.58h3.92a5.93 5.93 0 0 0 5-2.13 10.32 10.32 0 0 0 1.61-6.26 9.88 9.88 0 0 0-1.49-6q-1.5-2.13-5.12-2.19ZM62.15 114.82h-3v7.34h3c1.69 0 2.84-.3 3.45-.91a3.77 3.77 0 0 0 .92-2.76 3.67 3.67 0 0 0-.94-2.75 4.93 4.93 0 0 0-3.43-.92Z"
      />
    </g>
  </svg>
);

export default SvgPdf;
