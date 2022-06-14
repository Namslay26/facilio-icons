import * as React from "react";

const SvgCatalogue = ({ title, titleId, ...props }) => (
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
      <style>{".Catalogue_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Catalogue_svg__trim_area" data-name="trim area">
      <path
        className="Catalogue_svg__cls-1"
        d="M173 16.11h-49.16a50.42 50.42 0 0 0-28 8.51 48.49 48.49 0 0 0-27.42-8.51H19a11 11 0 0 0-11 11V137a11 11 0 0 0 11 11h9.13v14.43c0 5.38 4.83 9.6 11 9.6h113.76c6.17 0 11-4.22 11-9.6V148H173a11 11 0 0 0 11-11V27.11a11 11 0 0 0-11-11Zm-153 12h48.45A36.49 36.49 0 0 1 92 36.7v105.37A48.62 48.62 0 0 0 68.43 136H20ZM151.89 160H40.16v-12h28.27A36.6 36.6 0 0 1 92 156.54l3.82 3.22 4.21-3.47a36.65 36.65 0 0 1 23.21-8.29h28.65ZM172 136h-48.76a48.56 48.56 0 0 0-23.24 5.89V36.7h-.31a38.37 38.37 0 0 1 24.15-8.59H172Z"
      />
      <path
        className="Catalogue_svg__cls-1"
        d="M72.18 64.09h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8ZM72.18 84.09h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8ZM72.18 104.09h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8ZM156.21 64h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8ZM156.21 84h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8ZM156.21 104h-36a4 4 0 0 1 0-8h36a4 4 0 0 1 0 8Z"
      />
    </g>
  </svg>
);

export default SvgCatalogue;
