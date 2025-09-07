import type { SVGProps } from "react";
import ClaraHi from "../../assets/ClaraHi.png";

interface ClaraHiIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const ClaraHiIcon = ({
  width = 300,
  height = 300,
  ...props
}: ClaraHiIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 432 432"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image x="0" y="0" width="432" height="432" href={ClaraHi} />
  </svg>
);

export default ClaraHiIcon;
