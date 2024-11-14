export function ColorCodeBox({ colorName }) {
  return (
    <div className='color-code-box'>{colorName ? colorName : "#fafafa"}</div>
  );
}
