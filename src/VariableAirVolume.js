import * as React from "react";

const SvgVariableairvolume = ({ title, titleId, ...props }) => (
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
      <style>{".Variable_air_volume_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Variable_air_volume_svg__trim_area" data-name="trim area">
      <path
        className="Variable_air_volume_svg__cls-1"
        d="M10.87 82a12.75 12.75 0 0 1 2.85 0 49.56 49.56 0 0 1 7.66 1.18 2.9 2.9 0 0 0 .66.07A3 3 0 0 0 25 80.88a3.23 3.23 0 0 0 .08-.68 3 3 0 0 0-2.33-2.89h-.09A55.42 55.42 0 0 0 14.15 76a14.49 14.49 0 0 0-4.86.27L11 82ZM29.07 84.51h.17a3.1 3.1 0 1 0-.17 0ZM37.35 83.32a3 3 0 0 0 1-.16 20.44 20.44 0 0 0 4.13-1.88 3 3 0 0 0-3.22-5.07 14.7 14.7 0 0 1-2.85 1.28 3 3 0 0 0 1 5.83ZM22.74 109.14h-.09a55.76 55.76 0 0 0-8.44-1.28h-.05a14.19 14.19 0 0 0-4.86.27l1.7 5.7h-.11a11.89 11.89 0 0 1 2.82-.06h.17a50.77 50.77 0 0 1 7.53 1.23 3.6 3.6 0 0 0 .66.07A3 3 0 0 0 25 112.7a3.07 3.07 0 0 0 .08-.67 3 3 0 0 0-2.34-2.89ZM29.37 110.35a3 3 0 0 0-.3 6h.17a3 3 0 0 0 .13-6ZM39.23 108a15.93 15.93 0 0 1-2.85 1.27 3 3 0 0 0 1.94 5.73 20.15 20.15 0 0 0 4.13-1.89 3 3 0 0 0-3.22-5.11ZM22.87 93.21a59.64 59.64 0 0 0-8.71-1.31 15.08 15.08 0 0 0-4.85.27L11 97.92h-.11a12.41 12.41 0 0 1 2.88-.06h.07a53.53 53.53 0 0 1 7.77 1.18 2.7 2.7 0 0 0 .63.07 3 3 0 0 0 2.94-2.36 3.23 3.23 0 0 0 .06-.61 3 3 0 0 0-2.37-2.93ZM29.72 94.44a3 3 0 0 0-3.12 2.88 3.05 3.05 0 0 0 .81 2.15 2.92 2.92 0 0 0 2.09 1h.1a3 3 0 0 0 3-2.88 3 3 0 0 0-2.83-3.11ZM39.73 92.11a15.36 15.36 0 0 1-2.87 1.27 3 3 0 0 0 1 5.84 2.93 2.93 0 0 0 1-.16 21.42 21.42 0 0 0 4.13-1.86 3 3 0 0 0-3.19-5.09ZM125.51 17.68a10.65 10.65 0 0 1 10.63 10.64v135.36a10.65 10.65 0 0 1-10.63 10.64H66.08a10.65 10.65 0 0 1-10.64-10.64V28.32a10.65 10.65 0 0 1 10.64-10.64h59.43m0-9.36H66.08a20 20 0 0 0-20 20v135.36a20 20 0 0 0 20 20h59.43a20 20 0 0 0 20-20V28.32a20 20 0 0 0-20-20ZM161.85 77a2.51 2.51 0 0 0 1.86.83 2.46 2.46 0 0 0 1.67-.64 2.5 2.5 0 0 0 .19-3.53l-1.84-2.05a38.62 38.62 0 0 1 5.38 1.47 15 15 0 0 0 4.88.83 16 16 0 0 0 9.85-3.54 3 3 0 0 0 .31-4.2 3 3 0 0 0-4.22-.34 9.62 9.62 0 0 1-8.87 1.58 39.52 39.52 0 0 0-7.62-1.93l2.41-2.69a2.5 2.5 0 1 0-3.72-3.34l-6 6.71a3.35 3.35 0 0 0 0 4.44ZM158.25 107.81a2.51 2.51 0 0 0 1.88-4.15l-3.75-4.27a60.85 60.85 0 0 1 8.54 1.67 23.86 23.86 0 0 0 18-2.53 3 3 0 0 0-3.28-5 17.62 17.62 0 0 1-13.22 1.75 63.3 63.3 0 0 0-10.57-1.94l4.64-5.34a2.5 2.5 0 1 0-3.75-3.3l-7.86 8.93a3.62 3.62 0 0 0 0 4.76l7.49 8.53a2.52 2.52 0 0 0 1.88.89ZM179.79 122.07a9.57 9.57 0 0 1-8.86 1.57 39 39 0 0 0-8.28-2l2.47-2.75a2.5 2.5 0 1 0-3.72-3.34l-6 6.7a3.37 3.37 0 0 0 0 4.45l5.74 6.39a2.5 2.5 0 0 0 3.73-3.34l-1.79-2a37.19 37.19 0 0 1 5.92 1.57 15 15 0 0 0 4.87.83 16.12 16.12 0 0 0 9.86-3.54 3 3 0 0 0-3.92-4.54Z"
      />
      <path
        className="Variable_air_volume_svg__cls-1"
        d="M64 106.32a7.86 7.86 0 0 1 3.36-6.73c.4-.28.82-.53 1.24-.78 3-1.77 3.05-3.79.08-5.53-.42-.24-.84-.49-1.24-.77a7.54 7.54 0 0 1-2.66-9.69 70.17 70.17 0 0 1 4-7A7.47 7.47 0 0 1 78 73a12.49 12.49 0 0 1 1.64.81c3.28 1.84 4.93.9 5-2.85 0-5.36 3.2-8.48 8.6-8.5h5.69a7.79 7.79 0 0 1 8 7.94v1.47c.1 2.47 1.92 3.52 4.16 2.38.54-.28 1.06-.61 1.6-.89A7.62 7.62 0 0 1 123 76.14c1.26 2 2.45 4.08 3.56 6.18a7.62 7.62 0 0 1-2.72 10.39c-.36.23-.74.43-1.11.65-2.73 1.61-2.7 3.73.09 5.37 5 2.93 6.08 7.06 3.18 12-.95 1.64-1.86 3.3-2.85 4.91a7.68 7.68 0 0 1-10.65 2.86c-.32-.17-.63-.37-.95-.55-2.7-1.51-4.53-.46-4.57 2.62-.08 6-3 9-9.06 9a44.53 44.53 0 0 1-6.94-.24 7.4 7.4 0 0 1-6.33-7.42v-1.83c-.11-2.35-1.95-3.39-4.09-2.35a20.54 20.54 0 0 1-3.83 1.66 6.54 6.54 0 0 1-7.22-2.4 74.62 74.62 0 0 1-5-8.68 6.18 6.18 0 0 1-.51-1.99Zm11-29.07a12.59 12.59 0 0 0-2.12 1.82c-.8 1.07-1.33 2.33-2.06 3.46-2.7 4.2-1.76 5.07 1.6 7.06a7.58 7.58 0 0 1 .11 12.88c-.56.37-1.16.68-1.73 1-1.69 1.07-2 2.28-1.1 4 .63 1.18 1.39 2.3 2 3.49 1.9 3.71 2.94 4.32 6.77 2.1 5-2.88 10.93.65 11.32 6.4v2a2.62 2.62 0 0 0 2.82 2.88q3.19.09 6.41 0a2.63 2.63 0 0 0 2.82-2.9v-2a7.48 7.48 0 0 1 8.2-7.24 16.6 16.6 0 0 1 4.76 1.8c1.84.85 3 .65 4-1.08s2.12-3.57 3.12-5.38.58-3-1.12-4c-.57-.36-1.18-.65-1.73-1a7.47 7.47 0 0 1-3.39-7.4c.34-3 2.16-4.91 4.73-6.3 2.23-1.21 2.52-2.47 1.28-4.65-1-1.69-1.92-3.4-3-5.06s-2.2-1.91-3.88-1c-.65.34-1.27.74-1.93 1.06a7.7 7.7 0 0 1-11-5.57 20.2 20.2 0 0 1-.12-2.92c-.07-2-1-2.94-2.92-3s-3.55 0-5.32 0c-3.07 0-3.81.72-3.83 3.72 0 7.11-6.09 10.64-12.26 7.17-.65-.5-1.43-.83-2.43-1.34Z"
      />
      <path
        className="Variable_air_volume_svg__cls-1"
        d="M95.84 84.86A11.17 11.17 0 1 1 84.64 96a11.21 11.21 0 0 1 11.2-11.14Zm0 5.14a6 6 0 1 0 6 6 6 6 0 0 0-6.04-6Z"
      />
    </g>
  </svg>
);

export default SvgVariableairvolume;