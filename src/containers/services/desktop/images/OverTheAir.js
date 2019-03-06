import React from "react";

const SvgOverTheAir = props => (
  <svg viewBox="0 0 501.8 501.8" {...props}>
    <defs>
      <style>
        {
          ".over-the-air_svg__cls-3{fill:#fff;stroke:#77b6f5;stroke-width:6px;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>
    <g id="over-the-air_svg__Layer_6" data-name="Layer 6">
      <path
        d="M92 246.45c-12.27 6.47-10.85 5.7-12.55 6.8-29.8 19.21-50.77 59.93-45.85 99.22 4.71 37.66 31.69 61.68 44 72.64 58.94 52.48 156.93 64.33 234.08 31.87 73.32-30.85 109.43-91.11 121.63-121.66 21.08-52.8 35.17-106.06 33.71-163.58-1.15-44.92-4.1-98-39.75-131.68C380-4.64 321.11 64.4 321.11 64.4q-42.51 40.32-86.63 79c-23.81 20.93-46.94 42.69-72.09 62.1-22.39 17.22-46.2 28.19-70.39 40.95z"
        fill="#77b6f5"
        opacity={0.3}
      />
      <rect
        x={71.64}
        y={73.87}
        width={369.05}
        height={369.05}
        rx={15}
        ry={15}
        strokeMiterlimit={10}
        fill="#fff"
        stroke="#77b6f5"
        strokeWidth={6}
      />
      <path
        className="over-the-air_svg__cls-3 airplane"
        d="M94.87 217.54l318.7-68.41-130.44 218.53-79.67-64.61-21.27 51.31-28.5-95.97-58.82-40.85z"
      />
      <path
        className="over-the-air_svg__cls-3 airplane"
        d="M183.15 354.64l21.26-51.31 31.47 25.53-52.73 25.78zM203.46 303.05l210.11-153.92-259.88 109.26"
      />
    </g>
  </svg>
);

export default SvgOverTheAir;
