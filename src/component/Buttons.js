import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 10px;
`;

const Buttons = ({ handleColorClick }) => {
  return (
    <ButtonContainer>
      <button
        className="button"
        style={{ background: "red", width: "50px" }}
        onClick={() => handleColorClick("0")}
      ></button>
      <button
        className="button"
        style={{ background: "black", width: "50px" }}
        onClick={() => handleColorClick("1")}
      ></button>
      <button
        className="button"
        style={{ background: "blue", width: "50px" }}
        onClick={() => handleColorClick("2")}
      ></button>
      <button
        className="button"
        style={{ background: "yellow", width: "50px" }}
        onClick={() => handleColorClick("3")}
      ></button>
      <button
        className="button"
        style={{ background: "green", width: "50px" }}
        onClick={() => handleColorClick("4")}
      ></button>
      <button
        className="button"
        style={{ background: "purple", width: "50px" }}
        onClick={() => handleColorClick("5")}
      ></button>
      <button
        className="button"
        style={{ background: "orange", width: "50px" }}
        onClick={() => handleColorClick("6")}
      ></button>
      <button
        className="button"
        style={{ background: "brown", width: "50px" }}
        onClick={() => handleColorClick("7")}
      ></button>
    </ButtonContainer>
  );
};

export default Buttons;
