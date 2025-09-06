import type { SVGProps } from "react";

interface CircleGreenHeartIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  circleColor?: string;
  rotate?: number; // ângulo em graus
  direction?: "left" | "right"; // nova prop
  width?: number;
  height?: number;
}

const CircleGreenHeartIcon = ({
  width = 415,
  height = 415,
  color = "#76BCD7",
  circleColor = "#FFFFFF",
  direction = "left",
  ...props
}: CircleGreenHeartIconProps) => {
  const greenColor = "#61BC55";

  // Se direção for "left", inverte o sinal da rotação
  const angle = direction === "right" ? 90 : 0;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 415 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="207.499"
        cy="207.499"
        r="169.999"
        stroke={greenColor}
        strokeWidth="75"
      />

      <path
        d="M168.434 214.82C179.137 228.945 218.314 221.957 218.314 221.957C218.314 221.957 235.637 186.13 224.933 172.005"
        stroke="#61BC55"
        strokeWidth="70"
        strokeLinecap="round"
        transform={`rotate(${angle} 207.5 207.5)`} // aplica ângulo final
      />
    </svg>
  );
};

export default CircleGreenHeartIcon;
