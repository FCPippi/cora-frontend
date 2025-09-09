// components/decoration/RedHeartIcon.tsx
import type { SVGProps } from "react";
interface RedHeartIconProps extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}
const RedHeartIcon = ({
  width = "29.6rem",
  height = "25.5rem",
  ...props
}: RedHeartIconProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 296 255"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: width, maxHeight: height }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M77.999 76C64.1439 111.584 121.167 175.619 121.167 175.619C121.167 175.619 206.478 167.004 220.334 131.42"
      stroke="#DF3841"
      strokeWidth={150}
      strokeLinecap="round"
    />
  </svg>
);
export default RedHeartIcon;
