import type { SVGProps } from "react";

interface UploadIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: number | string;
  height?: number | string;
}

const UploadIcon = ({
  color = "#777777",
  width = 29,
  height = 24,
  ...props
}: UploadIconProps) => (
    <svg width="30" 
    height="30" 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
    >
    <path d="M28.625 19.875V25.7083C28.625 26.4819 28.3177 27.2237 27.7707 27.7707C27.2237 28.3177 26.4819 28.625 25.7083 28.625H5.29167C4.51812 28.625 3.77625 28.3177 3.22927 27.7707C2.68229 27.2237 2.375 26.4819 2.375 25.7083V19.875M22.7917 9.66667L15.5 2.375M15.5 2.375L8.20833 9.66667M15.5 2.375V19.875" stroke="#777777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
);

export default UploadIcon;
