import React from "react";
import styled from "styled-components";

const Text = styled.h5`
  fontsize: 1rem;
`;

const Rules = () => {
  return (
    <Text>
      You are asked to make 4 correct color guesses and you are given 10
      chances. If you get the correct 4 pairing, you have a chance to win a
      ticket to one of SpaceX's spaceship that's going to Mars. Get it right and
      be one of the first ones to go to Mars! Let's GO!
    </Text>
  );
};

export default Rules;
