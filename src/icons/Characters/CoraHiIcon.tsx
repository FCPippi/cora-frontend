import type { SVGProps } from "react";
import CoraHi from "../../assets/CoraHi.png";

interface CoraHiIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const CoraHiIcon = ({
  width = 300,
  height = 300,
  ...props
}: CoraHiIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1569 1569"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <image x="0" y="0" width="1569" height="1569" href={CoraHi} />
  </svg>
);

export default CoraHiIcon;
