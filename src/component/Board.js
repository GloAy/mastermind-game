import React from "react";
import Buttons from "./Buttons";
import colors from "./Colors";
import styled from "styled-components";
import Row from "./Row";

//you have the color picker
//different components

const Board = ({
  handleColorClick,
  playerInput,
  history,
  MAX_ALLOWED_GUESSES,
  attempt,
}) => {
  const BoardContainer = styled.div``;

  const Title = styled.h1`
    color: #turquise;
    font-size: 2rem;
    margin: 6rem 0 0.6rem 1rem;
  `;

  const AttemptText = styled.h2`
    color: #a53b11;
    font-size: 1.3rem;
    margin: 2rem 0 0.6rem 1rem;
  `;

  const ScoreContainer = styled.div`
    background: rgba(255, 252, 252, 0.475);
    backdrop-filter: blur(24px);
    display: absolute;
    -webkit-backdrop-filter: blur(14px);
    font-size: 1.5rem;
    border-radius: 3rem;
  `;

  const ColorPickerContainer = styled.div`
    border-radius: 2rem;
    border: none;
    width: 15rem;
    padding: 1.5rem 8rem;
    margin: 3rem 0 0 3rem;
    backdrop-filter: blur(0px);
    font-size: 0.9rem;
  `;

  return (
    <BoardContainer>
      <Title>Spaceship</Title>
      <AttemptText>
        <p>
          {" "}
          You have{" "}
          <span className="text-attempt">
            {MAX_ALLOWED_GUESSES - attempt}
          </span>{" "}
          attempts left. Choose Carefully!
        </p>
      </AttemptText>
      <Row history={history} playerInput={playerInput} />
      <div>
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
      <ColorPickerContainer>
        <div className="menu">
          <Buttons handleColorClick={handleColorClick} />
        </div>
      </ColorPickerContainer>
    </BoardContainer>
  );
};

export default Board;
