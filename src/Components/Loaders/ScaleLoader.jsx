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

class SLoader extends React.Component {
  render() {
    return (
      <ScaleLoader
        css={override}
        color={this.props.color}
        loading={this.props.loading}
        height={this.props.height}
        width={this.props.width}
        radius={this.props.radius}
        margin={this.props.margin}
      />
    );
  }
}

export default SLoader;
