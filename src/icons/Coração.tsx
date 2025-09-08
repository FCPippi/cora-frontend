import type { SVGProps } from "react";

interface CircleHeartIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  circleColor?: string;
  heartColor?: string;
  rotate?: number; // ângulo em graus
  direction?: "left" | "right";
}

const CircleHeartIcon = ({
  width = 111,
  height = 107,
  circleColor = "white",
  heartColor = "#DF3841",
  direction = "left",
  rotate = 0,
  ...props
}: CircleHeartIconProps) => {
  // Se direção for "right", aplica rotação no sentido horário
  const angle = direction === "right" ? rotate : -rotate;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 111 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M110.168 52.9655C110.168 82.2175 85.5062 105.931 55.0841 105.931C24.662 105.931 0 82.2175 0 52.9655C0 23.7135 24.662 0 55.0841 0C85.5062 0 110.168 23.7135 110.168 52.9655Z"
        fill={circleColor}
        transform={`rotate(${angle} 55 54)`} // centro aproximado do círculo
      />
      <path
        d="M17.9049 91.9616C23.1115 96.7235 29.1436 100.412 36.0012 103.047C42.8588 105.682 50.1668 107 57.8969 107C65.627 107 72.5409 105.984 78.9014 103.951C85.2618 101.918 90.7404 98.8879 95.3466 94.8696C99.9528 90.8512 103.546 85.8823 106.126 79.9724C108.705 74.0624 110 67.1738 110 59.3252C110 53.2271 109.306 47.3642 107.927 41.7272C106.632 36.4572 104.446 31.3283 101.369 26.3406C98.2829 21.3529 94.5961 16.8923 90.3183 12.968C86.0311 9.04371 81.2654 5.90053 76.0213 3.53843C70.7679 1.18575 65.3362 0 59.7168 0C51.5177 0 43.8533 1.06341 36.7142 3.19024C29.5751 5.31706 23.3554 8.57317 18.0644 12.9586C12.764 17.344 8.59876 22.8493 5.55926 29.4556C2.51975 36.0619 1 43.8916 1 52.9448C1 60.8968 2.51975 68.1901 5.55926 74.8435C8.59876 81.4969 12.7171 87.1998 17.9237 91.9616H17.9049ZM25.1378 39.0169C30.4757 31.6389 40.7668 30.0108 48.1217 35.3655L54.0694 39.6945L59.0789 32.7776C64.4168 25.3996 74.708 23.7715 82.0628 29.1262C89.4177 34.4809 91.0406 44.8045 85.7027 52.1825L80.6932 59.0994L80.787 59.1653L61.4524 85.8729L28.7965 62.0732C21.4416 56.7185 19.8187 46.3949 25.1566 39.0263L25.1378 39.0169Z"
        fill={heartColor}
        transform={`rotate(${angle} 55 54)`} // aplica a mesma rotação no coração
      />
    </svg>
  );
};

export default CircleHeartIcon;
