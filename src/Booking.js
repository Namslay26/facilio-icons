import * as React from "react";

const SvgBooking = ({ title, titleId, ...props }) => (
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
      <style>{".Booking_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Booking_svg__trim_area" data-name="trim area">
      <path
        className="Booking_svg__cls-1"
        d="M161.83 20.11h-5.69V16a8 8 0 0 0-16.09 0v4.12H52.16V16a8 8 0 0 0-16.09 0v4.12h-5.9a22 22 0 0 0-22 22v120a22 22 0 0 0 22 22h131.66a22 22 0 0 0 22-22v-120a22 22 0 0 0-22-22.01Zm-131.66 12h5.9V36a8 8 0 0 0 16.09 0v-3.89h87.89V36a8 8 0 0 0 16.09 0v-3.89h5.69a10 10 0 0 1 10 10v10H20.17v-10a10 10 0 0 1 10-10Zm131.66 140H30.17a10 10 0 0 1-10-10v-98h151.66v98a10 10 0 0 1-10 9.99Z"
      />
      <path
        className="Booking_svg__cls-1"
        d="m87.92 135.45-19-18.26a7.43 7.43 0 0 1 10.29-10.73l8.75 8.39L112.83 90a7.43 7.43 0 1 1 10.29 10.72Z"
      />
    </g>
  </svg>
);

export default SvgBooking;
