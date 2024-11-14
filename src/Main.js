export function Main({ colorName, children }) {
  return (
    <div className='main' style={{ background: colorName }}>
      {children}
    </div>
  );
}
