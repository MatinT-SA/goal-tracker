export function Button({ children, className, onClick, type = "button" }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
