import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Icon extends Component {
  getAnimalImg = () => {
    return [
      "url(http://kernazhytskaya.com/images/animals/",
      Math.floor(Math.random() * 13),
      ".svg);"
    ].join("");
  };

  render() {
    return <Image customImg={this.getAnimalImg} />;
  }
}

const Image = styled.div`
    width: 100px;
    height: 100px;
    -webkit-background-size: cover;
    background-size: cover;
    background-image: ${props => props.customImg} ;
    `;

export default Icon;
