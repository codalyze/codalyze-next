import React from "react";

const SvgMobileIcon = props => (
  <svg viewBox="0 0 58 58" {...props}>
    <defs>
      <style>
        {
          ".mobileIcon_svg__b{fill:none;stroke:#4f9b96;stroke-linecap:round;stroke-width:2px}"
        }
      </style>
      <filter
        id="mobileIcon_svg__a"
        x={0}
        y={0}
        width={62}
        height={62}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="b" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#mobileIcon_svg__a)">
      <circle cx={22} cy={22} r={22} transform="translate(9 6)" fill="#fff" />
    </g>
    <path
      className="mobileIcon_svg__b"
      d="M22.2 23.281h18.342M22.2 28.281h18.342M22.2 33.281h18.342"
    />
  </svg>
);

export default SvgMobileIcon;
