import * as React from "react";

const SvgAutosize = ({ title, titleId, ...props }) => (
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
      <style>
        {".Auto_size_svg__cls-1{fill:#324056}.Auto_size_svg__cls-2{fill:#fff}"}
      </style>
    </defs>
    <g id="Auto_size_svg__trim_area" data-name="trim area">
      <path
        className="Auto_size_svg__cls-1"
        d="M16.36 15.08v161.74H168.5a5 5 0 0 1-1.65-3.74 5.1 5.1 0 0 1 10.2 0 5 5 0 0 1-1.65 3.74h2.7V15.08ZM172 16a5.1 5.1 0 1 1-5.1 5.1A5.11 5.11 0 0 1 172 16Zm-76 0a5.1 5.1 0 1 1-5.1 5.1A5.11 5.11 0 0 1 96 16ZM22.36 175.92a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Zm0-73.74a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Zm0-76a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1ZM96 175.92a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Zm70.15-11.1H28.36V27.08H166.1Zm5.85-62.64a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M102.8 15.08a9.12 9.12 0 1 0 2.25 6 9.1 9.1 0 0 0-2.25-6Zm-1.75 6A5.1 5.1 0 1 1 96 16a5.11 5.11 0 0 1 5.05 5.08Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M107.59 15.08a13.06 13.06 0 1 0 1.46 6 13.12 13.12 0 0 0-1.46-6ZM96 26.18a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M102.8 164.82a9.11 9.11 0 1 0 2.25 6 9.1 9.1 0 0 0-2.25-6Zm-1.75 6a5.1 5.1 0 1 1-5.1-5.1 5.11 5.11 0 0 1 5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M107.59 164.82a13.06 13.06 0 1 0 1.46 6 13.1 13.1 0 0 0-1.46-6ZM96 175.92a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M29.21 15.08a9.1 9.1 0 1 0-.85 12.85 11.36 11.36 0 0 0 .85-.85 9.12 9.12 0 0 0 0-12Zm-6.85 11.1a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M34 15.08a13.06 13.06 0 1 0 1.46 6 13.12 13.12 0 0 0-1.46-6Zm-11.64 11.1a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M28.36 90.23a9.12 9.12 0 1 0 3.1 6.85 9.08 9.08 0 0 0-3.1-6.85Zm-6 12a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.05Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M28.36 85.44a13.09 13.09 0 1 0 7.1 11.64 13 13 0 0 0-7.1-11.64Zm-6 16.74a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M29.21 164.82a11.36 11.36 0 0 0-.85-.85 9.09 9.09 0 1 0 .85.85Zm-6.85.9a5.1 5.1 0 1 1-5.1 5.1 5.1 5.1 0 0 1 5.1-5.1Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M34 164.82a13.06 13.06 0 1 0 1.46 6 13 13 0 0 0-1.46-6Zm-11.64.9a5.1 5.1 0 1 1-5.1 5.1 5.1 5.1 0 0 1 5.1-5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M172 12a9.11 9.11 0 0 0-6.85 15.1 10.29 10.29 0 0 0 1 1A9.1 9.1 0 1 0 172 12Zm0 14.2a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.08Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M172 8a13.1 13.1 0 1 0 13.1 13.1A13.12 13.12 0 0 0 172 8Zm0 18.2a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.08Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M178.1 90.37a9.11 9.11 0 1 0 3 6.71 9.08 9.08 0 0 0-3-6.71Zm-6.1 11.81a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M178.1 85.51a13.11 13.11 0 1 0 7 11.57 13.15 13.15 0 0 0-7-11.57Zm-6.1 16.67a5.1 5.1 0 1 1 5.1-5.1 5.11 5.11 0 0 1-5.1 5.1Z"
      />
      <path
        className="Auto_size_svg__cls-2"
        d="M178.1 166.37a9.1 9.1 0 1 0 3 6.71 9.08 9.08 0 0 0-3-6.71Zm-9.6 10.45a5 5 0 0 1-1.65-3.74 5.1 5.1 0 0 1 10.2 0 5 5 0 0 1-1.65 3.74Z"
      />
      <path
        className="Auto_size_svg__cls-1"
        d="M178.1 161.51a13.11 13.11 0 0 0-12-.15 13.32 13.32 0 0 0-4.31 3.46 13 13 0 0 0-2.94 8.26 12.87 12.87 0 0 0 .55 3.74 13.1 13.1 0 1 0 18.7-15.31Zm-11.25 11.57a5.1 5.1 0 0 1 10.2 0 5.1 5.1 0 0 1-10.2 0ZM155.4 72.59H37V39.31h118.4ZM49 60.59h94.4v-9.28H49ZM155.4 113.75H37V80.46h118.4Zm-106.4-12h94.4v-9.29H49ZM155.4 154.9H37v-33.28h118.4ZM49 142.9h94.4v-9.28H49Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgAutosize;
