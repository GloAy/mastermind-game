


## Clone the Repo: 

`npm init` to install all the dependencies

`npm start` to start the project that is running on [http://localhost:3000](http://localhost:3000) to view it in your browser. The site is also deployed on netlify - https://6266f509547fcf1f33c0a0d8--profound-pasca-27257c.netlify.app/

## Rules

You are asked to make 4 correct color guesses and you are given 10 chances. If you get the correct 4 pairing, you have a chance to win a ticket to one of SpaceX's spaceship that's going to Mars. Get it right and be one of the first ones to go to Mars! Let's GO!

## Instructions

You can start playing the game by clicking on the colored buttons at the bottom and the stars will appear. Once you have 4 different combination of stars, you can click on the 'Submit' button to submit your combination of answers.

Clear the Board Button clears the board if you change your mind on a combination of stars.

If the combination of answers you submitted are correct, an alert will pop up, "Mars, Here I Come!".

If the combination of answers you submitted are not correct, you will see two numbers - one white and the other black. The white indicating how many right stars you have guesses and the black indicating how many right color and their location(index) you have guessed.

If you use all 10 guesses which is displayed on top of the page, an alert will pop up saying, "Your Loss, Loser!" :)

If you want to play a new game, you can do so by clicking on the 'Start New Game'

## Development

React Hooks (npx create-react-app my-app), Axios and npm libraries were used to build this project. Axios was used to make HTTP request from randon number generator api to generate the four digit secret code. FontAwesome, and styled components were used to style the application in addition to using giphy(https://giphy.com/search/nasa) by NASA. I tried to make it fun by using giphys at the end.

The project was built with react modular components in mind. To do this I kept most of my algorithm logic in the app.js file and use this component as a parent component and pass down the functions I used as props to other components. The props passed down to Row.js, Sidebar.js, and SideButton.js were event handlers that triggered a state change. The only child component that has logic is Board.js where the each four number that is generated from the API is assigned a color in addition to the number scores being tracked.

It was definitely a fun learning experience but at times also frustrating trying to debug.

Thank you for reviewing my project!
