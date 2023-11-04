// import "./input.css"

function Input({label, value, OnChange, index, type, placeholder}) {
  
  
  return (
    <>
      <form className="input-container">
        <div className="label">{label}</div>
        <input
          value={value}
          onChange={(e) => OnChange(e, index)}
          className="personal-info-input"
          type={type}
          placeholder={placeholder}
        />
      </form>
    </>
  );
}

export default Input;
