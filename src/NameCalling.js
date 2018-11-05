import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "./Icon";
import TextLine from "./TextLine";

const words = {
  bodyParts: [
    "лицо",
    "руки",
    "шея",
    "нога",
    "задница",
    "спина",
    "ухо",
    "нос",
    "ягодица",
    "поясница",
    "челка",
    "рубаха",
    "прическа",
    "походка",
    "осанка",
    "копчик",
    "палец"
  ],
  objectives: [
    "горелая",
    "сильная",
    "милая",
    "страшная",
    "красивая",
    "ржавая",
    "умная",
    "талантливая",
    "боязливая",
    "странная",
    "жуткая",
    "длинная",
    "хитрая",
    "смелая",
    "кривая",
    "непокорная",
    "скользкая"
  ],
  words: [
    "чебурашка",
    "лопата",
    "горгулья",
    "тельняшка",
    "улитка",
    "канистра",
    "актриса",
    "бакенбарда",
    "таракаха",
    "мышь",
    "горилла",
    "ушанка",
    "кроссовка",
    "книжка",
    "свеча",
    "телега",
    "тапка"
  ]
};

class NameCalling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPhrase:
        "У тебя " +
        this.getRandomWord(words.bodyParts) +
        " словно " +
        this.getRandomWord(words.objectives) +
        " " +
        this.getRandomWord(words.words),
      randomColor: this.getRandomColor()
    };
  }

  getRandomColor = () => {
    var letters = "3456789ABC";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  getRandomWord = words => {
    return words[Math.floor(Math.random() * words.length)];
  };
  changeNameCalling = () => {
    console.log(this.state.randomColor);
    this.setState({
      randomPhrase:
        "У тебя " +
        this.getRandomWord(words.bodyParts) +
        " словно " +
        this.getRandomWord(words.objectives) +
        " " +
        this.getRandomWord(words.words),
      randomColor: this.getRandomColor()
    });
  };

  render() {
    return (
      <Container customColor={this.state.randomColor}>
        <Icon />
        <TextLine data={this.state.randomPhrase} />
        <Button onClick={this.changeNameCalling}>Обновить</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  text-align: center;
  color: white;
  text-shadow: 0 0 20px #29292838;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.customColor};
  @media (max-width: 900px) {
    justify-content: space-around;
  }
  @media (max-width: 560px) {
    padding: 50px 0;
    box-sizing:border-box;
  }
`;

const Button = styled.button`
cursor: pointer;
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 18px;
  color: #353535;
  transition: .15s;
  background-color: rgba(255,255,255,.95);
  font-family: sans-serif;
  font-weight: 100;
  letter-spacing: 1.5px;
`;

export default NameCalling;
