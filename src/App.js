import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [selectMode, setSelectMode] = useState(null);

  function handleSelectMode(mode) {
    setSelectMode(mode);
  }
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons onSelectMode={handleSelectMode} />
      {selectMode ? null : <p className='notification'>Please select mode</p>}
    </header>
  );
}

function Buttons({ onSelectMode }) {
  return (
    <div className='button-mode-container'>
      <Button onSelectMode={onSelectMode}>hex</Button>
      <Button onSelectMode={onSelectMode}>named</Button>
    </div>
  );
}

function Button({ children, onSelectMode }) {
  return (
    <button className='button' onClick={() => onSelectMode(children)}>
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

function Main() {
  return (
    <div className='main'>
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
