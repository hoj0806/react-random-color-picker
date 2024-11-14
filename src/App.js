import { useState } from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Footer } from "./components/Footer";
import { Main } from "./Main";
import { ColorBox } from "./components/ColorBox";
import { ColorCodeBox } from "./components/ColorCodeBox";

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
    if (mode === "hex") {
      setColorName(generateRandomHexColor());
    } else if (mode === "named") {
      setColorName(generateRandomNamedColor());
    }
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
