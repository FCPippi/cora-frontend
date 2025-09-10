import type { SVGProps } from "react";

interface ArrowBackIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  circleColor?: string;
  direction?: "back" | "right" | "up" | "down";
  width?: string | number;
  height?: string | number;
}

const rotationMap: Record<
  NonNullable<ArrowBackIconProps["direction"]>,
  number
> = {
  back: 0,
  right: 180,
  up: 90,
  down: -90,
};

const ArrowIcon = ({
  color = "#FFFFFF",
  circleColor = "transparent",
  direction = "back",
  width = "2.4rem",
  height = "2.4rem",
  ...props
}: ArrowBackIconProps) => {
  const rotation = rotationMap[direction];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: width, maxHeight: height }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill={circleColor} />

      <path
        d="M14.5 16.5L9.5 12L14.5 7.5"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`rotate(${rotation} 12 12)`}
      />
    </svg>
  );
};

export default ArrowIcon;
