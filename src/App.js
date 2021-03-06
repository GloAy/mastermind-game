import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./component/Board";
import styled from "styled-components";
import Sidebar from "./component/Sidebar";

export const MAX_ALLOWED_GUESSES = 10;
export const GUESS_SIZE = 4;

function App() {
  const [data, setData] = useState([]);
  const [guessInput, setGuessInput] = useState({
    playerInput: [],
    indexMatch: 0,
    valueMatch: 0,
  });
  const [history, setHistory] = useState([]);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      );
      const result = res.data.split("").filter((input) => input !== "\n");
      setData(result);
    };
    fetchData();
  }, []);

  const handleColorClick = (num) => {
    let newGuessInputs = Object.assign({}, guessInput); //{}
    let newuserInputs = newGuessInputs.playerInput; //[]
    let copyData = [...data]; //[copy the secret code]

    if (guessInput.playerInput.length < 4) {
      newuserInputs.push(num);
      setGuessInput(newGuessInputs);
    } else {
      return;
    }

    if (newuserInputs.length === 4) {
      newuserInputs.forEach((num, i) => {
        if (copyData.includes(num)) {
          newGuessInputs.valueMatch++;

          copyData[copyData.indexOf(num)] = null; //set the element
        }
      });
      setGuessInput({ guessInputs: newGuessInputs });

      for (let i = 0; i < newuserInputs.length; i++) {
        if (newuserInputs[i] === data[i]) {
          newGuessInputs.indexMatch++;
        }
        setGuessInput(newGuessInputs);
      }
    }
  };

  const handleSubmitClick = () => {
    let numberOfAttempts = attempt;
    numberOfAttempts++;

    if (
      numberOfAttempts === MAX_ALLOWED_GUESSES &&
      guessInput.valueMatch !== GUESS_SIZE
    ) {
      alert("Your Loss, Loser!");
    } else if (
      guessInput.valueMatch === GUESS_SIZE &&
      guessInput.indexMatch === GUESS_SIZE
    ) {
      alert("Mars, Here I Come!");
    }

    let newHistory = [...history, guessInput];
    console.log("new history", newHistory);

    console.log("this is in the click function", guessInput.playerInput);
    if (guessInput.playerInput.length === GUESS_SIZE) {
      setHistory(newHistory);
      setAttempt(numberOfAttempts);
      handleClearClick();
    }
  };

  const handleStartNewGame = () => {
    let newGameState = {
      guessInputs: {
        playerInput: [],
        indexMatch: 0,
        valueMatch: 0,
      },
      history: [],
      attempts: 0,
    };

    setGuessInput(newGameState.guessInputs);
    setHistory(newGameState.history);
    setAttempt(newGameState.attempts);
  };

  const handleClearClick = () => {
    let resetObj = {
      playerInput: [],
      indexMatch: 0,
      valueMatch: 0,
    };

    setGuessInput(resetObj);
  };

  return (
    <div className="App">
      <Container>
        <BoardContainer>
          <Sidebar
            handleSubmitClick={handleSubmitClick}
            handleClearClick={handleClearClick}
            handleStartNewGame={handleStartNewGame}
          />
          <Board
            data={data}
            playerInput={guessInput.playerInput}
            history={history}
            handleColorClick={handleColorClick}
            attempt={attempt}
            MAX_ALLOWED_GUESSES={MAX_ALLOWED_GUESSES}
          />
        </BoardContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;
  background: linear-gradient(to right, #00bfff, #b2ffff);
  background-image: url("https://media.giphy.com/media/3ohk2q1zyGMD6xaQPm/giphy.gif");
  background-size: cover;
`;

const BoardContainer = styled.div`
  height: 150vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

export default App;
