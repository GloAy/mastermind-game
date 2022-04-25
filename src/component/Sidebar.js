import React from "react";
import styled from "styled-components";
import SideButtons from "./SideButtons";

const SidebarContainer = styled.div`
  width: 30%;
  height: 120%;
  background: linear-gradient(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RocketIcon = styled.img`
  margin: 15rem 0 0.6rem 0;
  height: 7rem;
  border-radius: 5rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 3rem 0 1rem 0;
`;

const Sidebar = ({
  handleSubmitClick,
  handleClearClick,
  handleStartNewGame,
}) => {
  return (
    <SidebarContainer>
      <NavContainer>
        <RocketIcon
          src={"https://media.giphy.com/media/J1WyRIJrTeKs6R6VHL/giphy.gif"}
        ></RocketIcon>
        <SideButtons
          handleSubmitClick={handleSubmitClick}
          handleClearClick={handleClearClick}
          handleStartNewGame={handleStartNewGame}
        />
      </NavContainer>{" "}
    </SidebarContainer>
  );
};

export default Sidebar;
