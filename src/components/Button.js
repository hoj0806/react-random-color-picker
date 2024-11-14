export function Button({ onMode, colorMode, mode }) {
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
