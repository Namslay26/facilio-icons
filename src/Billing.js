import * as React from "react";

const SvgBilling = ({ title, titleId, ...props }) => (
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
      <style>{".Billing_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Billing_svg__trim_area" data-name="trim area">
      <path
        className="Billing_svg__cls-1"
        d="M159.91 55.59a9.18 9.18 0 0 0-2.75-6.36l-.35-.35c-.17-.18-.33-.37-.5-.54l-30.53-30.51L120 12a12 12 0 0 0-1.18-1 11.94 11.94 0 0 0-5.91-2.8 13.59 13.59 0 0 0-2.85-.3h-10V8h-57.4c-12.42 0-22.49 9.31-22.49 20.82v134c0 11.51 10.07 20.84 22.49 20.84h51.26a6 6 0 0 0 6-6 6 6 0 0 0-6-6H42.66c-5.78 0-10.49-4-10.49-8.84v-134c0-4.88 4.71-8.85 10.49-8.85h57.4v24.15a23.82 23.82 0 0 0 23.82 23.82h24V93.7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V67.94h.08Zm-36 .35a11.83 11.83 0 0 1-11.82-11.82v-23l5.21 5.2 11 11.11 18.55 18.47Z"
      />
      <path
        className="Billing_svg__cls-1"
        d="M148.91 125.71a23.15 23.15 0 1 1-23.14 23.15 23.18 23.18 0 0 1 23.14-23.15m0-12a35.15 35.15 0 1 0 35.15 35.15 35.15 35.15 0 0 0-35.15-35.15Z"
      />
      <path
        className="Billing_svg__cls-1"
        d="M143 161.65a9 9 0 0 1-2.94-2.1 8.21 8.21 0 0 1-1.7-3 14.62 14.62 0 0 1-.63-3.74h5.88a6.44 6.44 0 0 0 1 3.58 4.2 4.2 0 0 0 2.79 1.55v-8.07a14.31 14.31 0 0 1-6.91-2.92c-1.58-1.38-2.37-3.45-2.37-6.19a8.39 8.39 0 0 1 .57-3.09 7.26 7.26 0 0 1 1.72-2.58 8.92 8.92 0 0 1 2.9-1.85 13.13 13.13 0 0 1 4.09-.88v-3.83h2.73v3.87a12 12 0 0 1 4.33 1 7.93 7.93 0 0 1 2.71 2 7.73 7.73 0 0 1 1.49 2.66 15.19 15.19 0 0 1 .63 2.88l-5.63.71a7.89 7.89 0 0 0-1.13-3.42 3.43 3.43 0 0 0-2.4-1.36v7.73l1.27.25a12.14 12.14 0 0 1 6.3 3 8.35 8.35 0 0 1 2 6 9.24 9.24 0 0 1-.52 3.06 7.78 7.78 0 0 1-1.68 2.76 9.1 9.1 0 0 1-3 2.05 12 12 0 0 1-4.39.95V167h-2.71v-4.37a14.05 14.05 0 0 1-4.4-.98Zm2.67-24.28a3.52 3.52 0 0 0-1.07.82 2.47 2.47 0 0 0-.55 1 4.61 4.61 0 0 0-.14 1.1 3.32 3.32 0 0 0 .86 2.45 5.65 5.65 0 0 0 2.62 1.33v-7.19a5 5 0 0 0-1.71.49Zm7.33 19.34a4.42 4.42 0 0 0 .76-2.56A3.87 3.87 0 0 0 153 152a4.48 4.48 0 0 0-2.82-1.55V158a3.67 3.67 0 0 0 2.82-1.29ZM99.89 92H47.83a4 4 0 0 1 0-8h52.06a4 4 0 0 1 0 8ZM99.89 111.94H47.83a4 4 0 1 1 0-8h52.06a4 4 0 0 1 0 8ZM99.89 131.87H47.83a4 4 0 1 1 0-8h52.06a4 4 0 0 1 0 8Z"
      />
    </g>
  </svg>
);

export default SvgBilling;
