import { css } from "@emotion/core";

import React from "react";

import HashLoader from "react-spinners/HashLoader";

const override = css`
  // position: absolute;
  top: 35vh;
  margin: auto auto;
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  render() {
    return (
      <HashLoader
        css={override}
        size={this.props.size}
        color={this.props.color}
        loading={this.props.loading}
      />
    );
  }
}

export default Loader;
