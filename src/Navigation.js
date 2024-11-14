import { Button } from "./components/Button";
import { Buttons } from "./components/Buttons";

export function Navigation({ onMode, mode }) {
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
