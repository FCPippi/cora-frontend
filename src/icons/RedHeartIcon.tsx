import type { SVGProps } from "react";

interface RedHeartIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  circleColor?: string;
  width?: number;
  height?: number;
}

const RedHeartIcon = ({
  color = "#76BCD7",
  circleColor = "#FFFFFF",
  width = 296,
  height = 255,
  ...props
}: RedHeartIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 296 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M77.999 76C64.1439 111.584 121.167 175.619 121.167 175.619C121.167 175.619 206.478 167.004 220.334 131.42"
        stroke="#DF3841"
        strokeWidth="150"
        strokeLinecap="round"
        transform={`rotate(0 207.5 207.5)`} // centro do viewBox
      />
    </svg>
  );
};

export default RedHeartIcon;
