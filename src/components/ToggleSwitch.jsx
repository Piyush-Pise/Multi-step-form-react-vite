import "./toggleSwitch.css";

function ToggleSwitch({ isToggled, HandleToggle }) {
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={() => HandleToggle(!isToggled)}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default ToggleSwitch;
