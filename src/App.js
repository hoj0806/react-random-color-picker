import { useState } from "react";
import "./App.css";

export default function App() {
  const [colorName, setColorName] = useState(null);
  return (
    <div className='App'>
      <Navigation setColorName={setColorName} colorName={colorName} />
      <Main colorName={colorName} setColorName={setColorName} />
      <Footer />
    </div>
  );
}

function Navigation({ colorName, setColorName }) {
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons setColorName={setColorName} />
      {colorName ? null : <p className='notification'>Please select mode</p>}
    </header>
  );
}

function Buttons({ setColorName }) {
  return (
    <div className='button-mode-container'>
      <button className='button'>hex</button>
      <button className='button'>named</button>
    </div>
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

function Main({ colorName, setColorName }) {
  function generateRandomHexColor() {
    const randomHexColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomHexColor;
  }

  function handleClickRandomColor() {
    if (colorName.includes("#")) {
      setColorName(generateRandomHexColor());
    }
  }
  return (
    <div
      className='main'
      style={{ background: colorName }}
      onClick={handleClickRandomColor}
    >
      <ColorBox />
    </div>
  );
}

function ColorBox() {
  return (
    <div className='color-box'>
      Color<div className='color-code-box'>#fafafa</div>
    </div>
  );
}
