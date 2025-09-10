import type { SVGProps } from "react";

interface PlusIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  circleColor?: string;
  width?: string | number;
  height?: string | number;
}

const PlusIcon = ({
  color = "#76BCD7",
  circleColor = "#FFFFFF",
  width = "3rem",
  height = "3rem",
  ...props
}: PlusIconProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ maxWidth: width, maxHeight: height }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <rect width="30" height="30" fill="url(#pattern0_1348_405)" />
      <defs>
        <pattern
          id="pattern0_1348_405"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1348_405" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_1348_405"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoklEQVR4nO2dy4tcRRTGC3xFFN0aFVTUfyDqygSDGLfqQgU1YjS6MTDGIYm7cacGBtJDS31fdUPDLHthoi4i8Q9QJBJjNm7UjQ/U0ZmsnIFMrhxTozLemUxy63X7ng8ODD39qPPr2/dWnXPqXGNUKpVKpVKpVCqVSrU1jcfja0g+ZK19heRRkidIfk3yW5J/AFgRk7/9Y/K/EwDek9cAeFDeY4sf1y055+4E8AaAj0meJ1k1tCWSH5GcstbeYbqs2dnZG0nuBfApydUAcGsNwAWSpwC8MBqNtpmuqN/v3yxHGoAfY8HdBPqvJN8meauZVJG8DsAhAL+nBlwDXMYwLWMykyTn3C6S53IDrrFvSD5m2i45JwJ4H8DFAqBudHTL2OZ6vd4Npo2y1t5N8vPcILl1+3IwGNxn2iT5OQaaplWJbck596hpg5xzTwH4swBo1dWYXxA9a0oWgNdizomZzladc6+aEkXySb84yA2pCgj7GVOS5LxGcrkAOFVI8zGVx00Jstbe39ILX3UFcZN7s0KWuadMiwqAUUU+sk9nnWfLYiTxbOAQye3eDvufdirgc1kgk3wk8YrvcM0XfSThFy2+7kwKeWZm5loAZxNCruQoXj+Ofr9/W+IxnEsaiPI/4ZQOVhuNJfU4SB5MGU9e6DDoBWEQHXTK8yLLBC02HT3sSfInBc2fJRUXDbS19sVMjlWFgRZ7Lhpon0hV0PzbTkaBLGn7nEEjUx7o1SilDFJ3kdGpqkDQYgdigJbiFgXNfw3AB0EhS4kVgEUFzfWgF4OWn0ktXE6HWChoscFg8EBI0PtzO2QKBQ1gX0jQUtWpoFlr7wQDDeDD3A6ZQkEHvSBmCIlWLQJ9Jhhokt+HyIyYwhQiUwPgu5ADWgiZGSlNDSOSv4UcSJPc3HZTuBpmapaLAD0cDm83hUtiFkWAbnLqkJ+lKVwk3yri1BHgYnikxCNbxiRjK+ZiqNM7ppne6YKFaRYsugRnmiW438WqoPl/c869FAy0hkm5me0IBloD/0wT+PcOyd5qBc2IqSzv0JSC5nrQr8ea3Gu5Af+BfEFiJMFBe6dOKWjGLaDxTu1V0IxfEub3didv/8CuFTnmKkJnYaABvGlia35+/iYJDXYY9EKSQnTv3HSHQU+ZlJuFSH6V0sFhTTy7YWak/M1Ca11lUm5/Q02mpmFm5Eo//6K19uGkkP/j6FxCR1fWMjUhMiNX8fnHTC7Jtl3ZvpvKWWYyAF+Mx+PrTU7JhnS/MX1SIS865+4xJchau7vNXWe4MeQVa+0eU5KstU9MWmMUkk+bEiXtcSah1Q8uHTD7TcnyLX/afBpZLq7Fz2Va/yy18cJnrd1t2qThcHgXgM9aBPl09pY+DVsBzZXeMlMWI9nnySFEcmcJZWU1kM9mW1ZHDkQdzBFirTEZw5SMyUyq5i/FsyWj/kMGwL9Io+5er3eL6YpGo9E259zzAD6JudDx731Scnydaj2/yaadAySP+7tRNAUs73Fc6i6ilQRMyO1BdpB8meS7Ug0kNchyKxBpGb92exDfPl4eOyPP8c/dJ6/V24OoVCqVSqVSqVQqldm6/gIxiG61lAjo8QAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default PlusIcon;
