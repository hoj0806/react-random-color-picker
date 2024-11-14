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
  const [colorName, setColorName] = useState("");
  const [mode, setMode] = useState(null);

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
    mode === "hex"
      ? setColorName(generateRandomHexColor())
      : setColorName(generateRandomNamedColor());
  }

  function handleClickMode(mode) {
    setMode(mode);
  }

  return (
    <div className='App'>
      <Navigation onMode={handleClickMode} mode={mode} />

      <Main colorName={colorName}>
        <ColorBox onRandomColor={handleClickRandomColor} colorName={colorName}>
          <ColorCodeBox colorName={colorName} />
        </ColorBox>
      </Main>

      <Footer />
    </div>
  );
}

function Navigation({ onMode, mode }) {
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons>
        <Button onMode={onMode} colorMode='hex' mode={mode} />
        <Button onMode={onMode} colorMode='named' mode={mode} />
      </Buttons>

      <p className='notification'>
        {mode === null ? "Please select mode" : "Click Color box!!"}
      </p>
    </header>
  );
}

function Buttons({ children }) {
  return <div className='button-mode-container'>{children}</div>;
}

function Button({ onMode, colorMode, mode }) {
  const selected = colorMode === mode;
  return (
    <button
      className={`button ${selected ? "selected" : ""}`}
      onClick={() => onMode(colorMode)}
    >
      {colorMode}
    </button>
  );
}

function Footer() {
  return (
    <div className='footer'>
      <p>
        Repository :
        <a href='https://github.com/hoj0806/react-random-color-picker'>
          https://github.com/hoj0806/react-random-color-picker
        </a>
      </p>
    </div>
  );
}

function Main({ colorName, children }) {
  return (
    <div className='main' style={{ background: colorName }}>
      {children}
    </div>
  );
}

function ColorBox({ children, onRandomColor, colorName }) {
  const colorNameLength = colorName.length;
  return (
    <div
      className='color-box'
      onClick={onRandomColor}
      style={{ width: `${colorNameLength * 7}rem` }}
    >
      Color
      {children}
    </div>
  );
}

function ColorCodeBox({ colorName }) {
  return (
    <div className='color-code-box'>{colorName ? colorName : "#fafafa"}</div>
  );
}
