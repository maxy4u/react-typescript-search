import React, { FC } from "react";
import SvgProps, { svgDefaultProps } from "./SvgProps";

const SvgSearch: FC<SvgProps> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.763 6.572a10.501 10.501 0 1119.477 7.86A10.501 10.501 0 01.763 6.571zM7.21 2.757a8.414 8.414 0 106.582 15.488A8.414 8.414 0 007.21 2.757z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.189 15.712L26 24.524 24.524 26l-8.811-8.812 1.476-1.476z"
        fill={props.color}
      />
    </svg>
  );
};

SvgSearch.defaultProps = svgDefaultProps;

export default SvgSearch;
