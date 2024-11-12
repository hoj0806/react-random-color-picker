import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}

function Navigation() {
  return (
    <header className='nav'>
      <p className='title'>random color picker</p>
      <Buttons />
    </header>
  );
}

function Buttons() {
  return (
    <div className='button-mode-container'>
      <Button>hex</Button>
      <Button>keyword</Button>
    </div>
  );
}

function Button({ children }) {
  return <button className='button'>{children}</button>;
}
