import React from "react";
import Buttons from "./Buttons";
import colors from "./Colors";
import styled from "styled-components";

//you have the color picker
//different components

const Board = ({ handleColorClick, playerInput, history }) => {
  const BoardContainer = styled.div``;

  const Title = styled.h1`
    color: #a53b11;
    font-size: 1.3rem;
    margin: 6rem 0 0.6rem 1rem;
  `;

  const GamePlayContainer = styled.h1``;

  const ColorPickerContainer = styled.div`
    border-radius: 2rem;
    border: none;
    width: 15rem;
    padding: 1.5rem 8rem;
    margin: 1rem 0 0 3rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(14px);
    font-size: 0.9rem;
    color: #bd063d;
    &::placeholder {
      color: #bd063d;
    }
    &:focus {
      outline: none;
      border: none;
    }
  `;
  return (
    <BoardContainer>
      <Title>Spaceship</Title>
      <GamePlayContainer>
        <div className="guessed-stars">
          {/*  */}
          {history.map((obj, i) => {
            return (
              <p key={i}>
                {obj.playerInput.map((num, idx) => {
                  return <span key={idx}>{colors[num]}</span>;
                })}
                <span className="scores" style={{ color: "black" }}>
                  {obj.valueMatch}
                </span>
                <span className="scores" style={{ color: "white" }}>
                  {obj.indexMatch}
                </span>
              </p>
            );
          })}
        </div>
        <div className="color-stars">
          <p>
            {playerInput.map((num, i) => {
              return <span key={i}>{colors[num]}</span>;
            })}
          </p>
        </div>
        <ColorPickerContainer>
          <div className="menu">
            <Buttons handleColorClick={handleColorClick} />
          </div>
        </ColorPickerContainer>
      </GamePlayContainer>
    </BoardContainer>
  );
};

export default Board;
