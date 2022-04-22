import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [guessInput, setGuessInput] = useState({
    playerInput: [],
    indexMatch: 0,
    valueMatch: 0,
  });

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

  return <div className="App">{data}</div>;
}

export default App;