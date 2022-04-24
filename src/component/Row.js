import React from "react";
import colors from "./Colors";
import styled from "styled-components";

const RowContainer = styled.div`
  border-radius: 2rem;
  border: none;
  width: 2rem
  width: 15rem;
  padding: 0 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.9rem;
  color: #bd063d;
`;

const StarContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 5rem 5rem 0 5rem;
  color: #aa0537;
  position: relative;
`;

const Row = ({ playerInput }) => {
  //   console.log("history", history);
  return (
    <RowContainer>
      <StarContainer>
        {playerInput.map((num, i) => {
          return <span key={i}>{colors[num]}</span>;
        })}
      </StarContainer>
    </RowContainer>
  );
};

export default Row;
