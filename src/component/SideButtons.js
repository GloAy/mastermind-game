import React from "react";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0 1rem 0;
`;

const NewGame = styled.div`
  padding: 2rem 0 1rem 0;
`;

const ClearBoard = styled.div`
  padding: 1rem 0 1rem 0;
`;

const Submit = styled.div`
  padding: 1rem 0 1rem 0;
`;

// const Rules = styled.div`
//   padding: 1rem 0 1rem 0;
// `;

const SideButtons = ({
  handleStartNewGame,
  handleSubmitClick,
  handleClearClick,
  Rules,
}) => {
  return (
    <LinkContainer>
      <NewGame>
        <button
          className="new-game"
          style={{
            background: "#fff",
            opacity: "0.4",
            borderRadius: "0.9rem",
            fontSize: "1rem",
          }}
          onClick={() => handleStartNewGame()}
        >
          Start New Game
        </button>{" "}
      </NewGame>
      <ClearBoard>
        <button
          variant="clear-the-board"
          style={{
            background: "#fff",
            opacity: "0.4",
            borderRadius: "0.9rem",
            fontSize: "1rem",
          }}
          onClick={() => handleClearClick()}
        >
          Clear The Board
        </button>{" "}
      </ClearBoard>
      <Submit>
        <button
          variant="submit"
          onClick={() => handleSubmitClick()}
          style={{
            background: "#fff",
            opacity: "0.4",
            borderRadius: "0.9rem",
            fontSize: "1rem",
          }}
        >
          {" "}
          Submit
        </button>{" "}
      </Submit>
      <Submit>
        <button
          variant="submit"
          Rules={Rules}
          style={{
            background: "#fff",
            opacity: "0.4",
            borderRadius: "0.9rem",
            fontSize: "1rem",
          }}
        >
          {" "}
          Rules
        </button>{" "}
      </Submit>
      {Rules}
    </LinkContainer>
  );
};

export default SideButtons;
