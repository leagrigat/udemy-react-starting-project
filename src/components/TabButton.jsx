export default function TabButton({ children, onSelect, isSelected }) {
  //could also be called onClick (on... always needs a function)
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
