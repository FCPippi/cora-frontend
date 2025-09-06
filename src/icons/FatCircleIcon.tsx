import type { SVGProps } from "react";

interface FatCircleIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}

const FatCircleIcon = ({
  width = 606,
  height = 574,
  color = "#7ABBD7",
  ...props
}: FatCircleIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 606 574"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M303 125C407.783 125 481 203.833 481 287C481 370.167 407.783 449 303 449C198.217 449 125 370.167 125 287C125 203.833 198.217 125 303 125Z"
        stroke="#7ABBD7"
        stroke-width="250"
      />
    </svg>
  );
};

export default FatCircleIcon;
