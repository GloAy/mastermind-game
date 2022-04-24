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
        className="button1"
        style={{ background: "#FF6347", width: "50px" }}
        onClick={() => handleColorClick("0")}
      >
        0
      </button>
      <button
        className="button2"
        style={{ background: "#DD7371", width: "50px" }}
        onClick={() => handleColorClick("1")}
      >
        1
      </button>
      <button
        className="button3"
        style={{ background: "#C17D7D", width: "50px" }}
        onClick={() => handleColorClick("2")}
      >
        2
      </button>
      <button
        className="button4"
        style={{ background: "#BAA0A1", width: "50px" }}
        onClick={() => handleColorClick("3")}
      >
        3
      </button>
      <button
        className="button5"
        style={{ background: "#DD7371", width: "50px" }}
        onClick={() => handleColorClick("4")}
      >
        4
      </button>
      <button
        className="button6"
        style={{ background: "#F5238E", width: "50px" }}
        onClick={() => handleColorClick("5")}
      >
        5
      </button>
      <button
        className="button7"
        style={{ background: "#F0BEBC", width: "50px" }}
        onClick={() => handleColorClick("6")}
      >
        6
      </button>
      <button
        className="button8"
        style={{ background: "#273558", width: "50px" }}
        onClick={() => handleColorClick("7")}
      >
        7
      </button>
      {/* </ButtonGroup> */}
    </ButtonContainer>
  );
};

export default Buttons;
