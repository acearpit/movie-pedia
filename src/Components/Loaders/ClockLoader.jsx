import { css } from "@emotion/core";

import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
  top: 35vh;
  margin: auto auto;
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = ({ size, color, loading }) => {
  return <ClockLoader size={size} color={color} loading={loading} />;
};

export default Loader;
