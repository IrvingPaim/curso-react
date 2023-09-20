// CSS

import './App.css';

// React

import { useCallback, useEffect, useState } from 'react'

// Data

import { wordsList } from './data/words'

// Components

import StartScreen from './components/StartScreen';
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedcategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return { word, category }
  }

  // Start de Secret Word Game
  const StartGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory()

    // create a array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((letter) => letter.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  // Process The Letter Input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Restart The Game

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={StartGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
