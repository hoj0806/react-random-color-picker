export function ColorBox({ children, onRandomColor, colorName }) {
  const colorNameLength = colorName.length;
  return (
    <div
      className='color-box'
      onClick={onRandomColor}
      style={{ width: `${colorName ? colorNameLength * 7 : 50}rem` }}
    >
      Color
      {children}
    </div>
  );
}
