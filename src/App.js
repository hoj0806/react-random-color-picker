import { useState } from "react";
import "./App.css";

const cssNamedColors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "cyan",
  "magenta",
  "gray",
  "silver",
  "maroon",
  "olive",
  "lime",
  "aqua",
  "fuchsia",
  "teal",
  "navy",
  "purple",
  "orange",
  "pink",
  "brown",
  "beige",
  "ivory",
  "lavender",
  "coral",
  "turquoise",
  "salmon",
  "gold",
  "silver",
  "plum",
  "indigo",
  "violet",
  "chocolate",
  "peru",
  "orchid",
  "tomato",
  "crimson",
  "firebrick",
  "sienna",
  "darkgreen",
  "darkblue",
  "darkred",
  "darkorange",
  "darkviolet",
  "darkslategray",
  "lightgray",
  "lightgreen",
  "lightblue",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightyellow",
  "lightcyan",
  "lightcoral",
  "lightsteelblue",
  "lightgoldenrodyellow",
  "darkslateblue",
  "mediumvioletred",
  "darkturquoise",
  "mediumorchid",
  "mediumseagreen",
  "midnightblue",
  "chartreuse",
  "darkkhaki",
  "darkgoldenrod",
  "darkmagenta",
];

export default function App() {
  const [colorName, setColorName] = useState(null);
  const [mode, setMode] = useState(null);

  function handleClickMode(mode) {
    setMode(mode);
  }

  return (
    <div className='App'>
      <Navigation onMode={handleClickMode} mode={mode} />
      <Main colorName={colorName} setColorName={setColorName} mode={mode} />
      <Footer />
    </div>
  );
}

function Navigation({ onMode, mode }) {
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons>
        <Button onMode={onMode} colorMode='hex' />
        <Button onMode={onMode} colorMode='named' />
      </Buttons>
      {mode ? null : <p className='notification'>Please select mode</p>}
    </header>
  );
}

function Buttons({ children }) {
  return <div className='button-mode-container'>{children}</div>;
}

function Button({ onMode, colorMode }) {
  return (
    <button className='button' onClick={() => onMode(colorMode)}>
      {colorMode}
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

  function generateRandomNamedColor() {
    const randomIndex = Math.floor(Math.random() * cssNamedColors.length);
    return cssNamedColors[randomIndex];
  }
  function handleClickRandomColor() {
    if (mode === "hex") {
      setColorName(generateRandomHexColor());
    } else if (mode === "named") {
      setColorName(generateRandomNamedColor());
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
