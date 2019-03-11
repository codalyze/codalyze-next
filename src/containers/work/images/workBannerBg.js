import React from "react";

const WorkBannerMobileBg = props => (
  <svg
    // preserveAspectRatio="none"
    width="674.125"
    height="484.329"
    viewBox="100 0 450 484.329"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#eeeff5" />
        <stop offset="1" stopColor="#f6eeed" />
      </linearGradient>
    </defs>
    <path
      d="M7973.555-5700.833s-5.118-32.092-105.649,3.391-92.785,105.961-197.1,122.83-186.267-104.536-249.245-32.375-2.67,321.018-2.67,321.018,153.533,26.684,268.878,1.248,241.574-96.1,321.241-140.186-33.87,20.719-7.924-56.32S7973.555-5700.833,7973.555-5700.833Z"
      transform="matrix(0.998, 0.07, -0.07, 0.998, -7742.731, 5184.522)"
      fill="url(#a)"
    />
  </svg>
);

const WorkBannerDesktopBg = props => (
  <svg
    preserveAspectRatio="none"
    width={2298.414}
    height={1477.886}
    viewBox="200 0 1950 1477.886"
    {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#eeeff5" />
        <stop offset={1} stopColor="#f6eeed" />
      </linearGradient>
    </defs>
    <path
      d="M9489-5672.9s-18.956-99.448-391.264 10.511-343.619 328.363-729.926 380.64-710.866-107.522-870.021-80.5-62.923 974.973-62.923 974.973l975.951-58.557s725.207-252.246 732.714-256.75 351.344-51.05 447.437-289.782S9489-5672.9 9489-5672.9z"
      transform="matrix(.998 .07 -.07 .998 -7694.035 5183.605)"
      fill="url(#prefix__a)"
    />
  </svg>
);

const WorkBannerBg = props =>
  props.mq === "desktop" ? (
    <WorkBannerDesktopBg {...props} />
  ) : (
    <WorkBannerMobileBg {...props} />
  );

export default WorkBannerBg;
