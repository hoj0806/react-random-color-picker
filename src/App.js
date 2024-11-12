import { useState } from "react";
import "./App.css";

export default function App() {
  const [colorName, setColorName] = useState(null);
  const [mode, setMode] = useState(null);

  function handleClickMode(mode) {
    setMode(mode);
  }
  return (
    <div className='App'>
      <Navigation colorName={colorName} onMode={handleClickMode} />
      <Main colorName={colorName} setColorName={setColorName} mode={mode} />
      <Footer />
    </div>
  );
}

function Navigation({ colorName, onMode }) {
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons onMode={onMode} />
      {colorName ? null : <p className='notification'>Please select mode</p>}
    </header>
  );
}

function Buttons({ onMode }) {
  return (
    <div className='button-mode-container'>
      <Button onMode={onMode}>hex</Button>
      <Button onMode={onMode}>named</Button>
    </div>
  );
}

function Button({ children, onMode }) {
  return (
    <button className='button' onClick={() => onMode(children)}>
      {children}
    </button>
  );
}

function Footer() {
  return (
    <div className='footer'>
      <p>
        Repository :{" "}
        <a href='https://github.com/hoj0806/react-random-color-picker'>
          https://github.com/hoj0806/react-random-color-picker
        </a>
      </p>
    </div>
  );
}

function Main({ colorName, setColorName, mode }) {
  function generateRandomHexColor() {
    const randomHexColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomHexColor;
  }

  function handleClickRandomColor() {
    if (mode === "hex") {
      setColorName(generateRandomHexColor());
    }
  }

  return (
    <div
      className='main'
      style={{ background: colorName }}
      onClick={handleClickRandomColor}
    >
      <ColorBox colorName={colorName} />
    </div>
  );
}

function ColorBox({ colorName }) {
  return (
    <div className='color-box'>
      Color
      <div className='color-code-box'>{colorName ? colorName : "#fafafa"}</div>
    </div>
  );
}
