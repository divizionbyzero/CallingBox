import React, { Component } from "react";
import styled from "styled-components";

class TextLine extends Component {
  render() {
    return <Text>{this.props.data}</Text>;
  }
}

const Text = styled.span`
    display: block;
    line-height: 1.4;
    margin: 1em 0 1.5em;
    font-size: 50px;
    padding: 0 20px;
    @media (max-width: 900px) {
      font-size: 5vh;
      margin: 0;
    }
    @media (max-width: 560px) {
      font-size: 6vh;
    }
`;

export default TextLine;
