import { css } from "@emotion/core";

import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  position: absolute;
  top: 35vh;
  left: 45vw;
  margin: auto auto;
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SLoader = ({ color, loading, height, width, radius, margin }) => {
  return <ScaleLoader css={override} color={color} loading={loading} height={height} width={width} radius={radius} margin={margin} />;
};

export default SLoader;
