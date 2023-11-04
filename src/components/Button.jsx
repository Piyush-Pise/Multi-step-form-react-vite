function Button({ className , text, OnClick }) {
  return (
    <button className={className} onClick={OnClick}>
      {text}
    </button>
  );
}
export default Button;
