import type { SVGProps } from "react";
import Lia from "../../assets/Lia.png";

interface LiaIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const LiaIcon = ({
  width = 300,
  height = 300,
  ...props
}: LiaIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 457 457"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image x="0" y="0" width="457" height="457" href={Lia} />
  </svg>
);

export default LiaIcon;
