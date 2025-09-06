import type { SVGProps } from "react";

interface CircleIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}

const CircleIcon = ({
  width = 409,
  height = 409,
  color = "#FDC647",
  ...props
}: CircleIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 409 409"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="204.5"
        cy="204.5"
        r="157.5"
        stroke={color}
        stroke-width="94"
      />
    </svg>
  );
};

export default CircleIcon;
