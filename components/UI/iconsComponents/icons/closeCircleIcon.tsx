import React, { FunctionComponent } from "react";

const CloseCircleIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.36 9.70035L13.06 12.0004L15.36 14.3004C15.65 14.5904 15.65 15.0704 15.36 15.3604C15.21 15.5104 15.02 15.5804 14.83 15.5804C14.64 15.5804 14.45 15.5104 14.3 15.3604L12 13.0604L9.69998 15.3604C9.54998 15.5104 9.35998 15.5804 9.16998 15.5804C8.97999 15.5804 8.78999 15.5104 8.63999 15.3604C8.34999 15.0704 8.34999 14.5904 8.63999 14.3004L10.94 12.0004L8.63999 9.70035C8.34999 9.41035 8.34999 8.93035 8.63999 8.64035C8.92999 8.35035 9.40998 8.35035 9.69998 8.64035L12 10.9404L14.3 8.64035C14.59 8.35035 15.07 8.35035 15.36 8.64035C15.65 8.93035 15.65 9.41035 15.36 9.70035Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseCircleIcon;
