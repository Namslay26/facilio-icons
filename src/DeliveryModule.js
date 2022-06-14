import * as React from "react";

const SvgDeliverymodule = ({ title, titleId, ...props }) => (
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
      <style>{".Delivery_module_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Delivery_module_svg__trim_area" data-name="trim area">
      <path
        className="Delivery_module_svg__cls-1"
        d="M36.15 28.21h20.08V40.4H36.15zM36.15 48.28h20.08v3.9H36.15zM36.15 56.33h20.08v3.9H36.15zM35.94 99.94h20.08v12.19H35.94zM35.94 120.01h20.08v3.9H35.94zM35.94 128.06h20.08v3.9H35.94zM128.1 88.13h20.08v12.19H128.1zM128.1 108.2h20.08v3.9H128.1zM128.1 116.25h20.08v3.9H128.1z"
      />
      <path
        className="Delivery_module_svg__cls-1"
        d="M179.94 171.86V75.07a7 7 0 0 0-7-7H120v-53a7 7 0 0 0-7-7H19a7 7 0 0 0-7 7V184h24.09v-12.13H84V184h24.1v-12.13h47.82V184H180v-12.14Zm-4-4H16V164h159.94Zm-55.85-87.8H168v68.06h-47.91ZM24 20.05h84v59.88H24Zm0 72h84v56H24Z"
      />
    </g>
  </svg>
);

export default SvgDeliverymodule;
