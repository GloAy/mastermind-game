import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from "./Button";
import Board from "./component/Board";

function App() {
  const [data, setData] = useState([]);
  const [guessInput, setGuessInput] = useState({
    playerInput: [],
    indexMatch: 0,
    valueMatch: 0,
  });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      );
      //console.log("this is the result variable", res);
      //the data we get is ['1', '\n', '2', '\n', '5', '\n', '7', '\n']
      const result = res.data.split("").filter((input) => input !== "\n");
      //console.log(result);
      //set data holds the secret code
      setData(result);
    };
    fetchData();
  }, []);

  const handleColorClick = (num) => {
    let newGuessInputs = Object.assign({}, guessInput);
    let newuserInputs = newGuessInputs.playerInput;
    let copyData = [...data];

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

  return (
    <div className="App">
      <Board
        data={data}
        playerInput={guessInput.playerInput}
        history={history}
        handleColorClick={handleColorClick}
      />
    </div>
  );
}

export default App;
