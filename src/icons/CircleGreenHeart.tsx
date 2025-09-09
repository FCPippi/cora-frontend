// components/decoration/CircleGreenHeartIcon.tsx
import type { SVGProps } from "react";
interface CircleGreenHeartIconProps extends SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
  width?: string | number;
  height?: string | number;
}
const CircleGreenHeartIcon = ({
  width = "41.5rem",
  height = "41.5rem",
  direction = "left",
  ...props
}: CircleGreenHeartIconProps) => {
  const green = "#61BC55";
  const angle = direction === "right" ? 90 : 0;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 415 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: width, maxHeight: height }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx="207.5" cy="207.5" r="170" stroke={green} strokeWidth={75} />
      <path
        d="M168.434 214.82C179.137 228.945 218.314 221.957 218.314 221.957C218.314 221.957 235.637 186.13 224.933 172.005"
        stroke={green}
        strokeWidth={70}
        strokeLinecap="round"
        transform={`rotate(${angle} 207.5 207.5)`}
      />
    </svg>
  );
};
export default CircleGreenHeartIcon;
