import type { SVGProps } from "react";

interface ArrowBackIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  circleColor?: string;
  direction?: "back" | "right" | "up" | "down";
}

const rotationMap: Record<NonNullable<ArrowBackIconProps["direction"]>, number> = {
  back: 0,
  right: 180,
  up: 90,
  down: -90,
};

const ArrowIcon = ({
  color = "#76BCD7",
  circleColor = "#FFFFFF",
  direction = "back",
  ...props
}: ArrowBackIconProps) => {
  const rotation = rotationMap[direction];

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >

      <circle cx="12" cy="12" r="10" fill={circleColor} />

      <path
        d="M14.5 16.5L9.5 12L14.5 7.5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`rotate(${rotation} 12 12)`}
      />
    </svg>
  );
};

export default ArrowIcon;
