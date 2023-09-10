import { useState } from 'react';
import './App.css';
import Mycomponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 9

  const [name] = useState("Irving")

  const redTitle = false

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <Mycomponent />
      <p>Este parágrafo é do app.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "5px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* Inline CSS dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "blue"})}>Css dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "blue"})}>Css dinâmico</h2>
      <h2 style={name === "Irving" ? ({color: "blue"}) : ({color: "purple"})}>{name}</h2>
      <h2 style={name !== "Irving" ? ({color: "blue"}) : ({color: "purple"})}>{name}</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
