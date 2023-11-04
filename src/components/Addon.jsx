import CheckBox from "./CheckBox";
import "./Addon.css";

function Addon({ title, content, price, index, AddonsArray, SetAddonsArray }) {
  const selected = {
    backgroundColor: "hsl(231, 100%, 99%)",
    border: "1px solid hsl(213, 96%, 18%)",
  };
  const inactive = {};

  function HandleClick(index) {
    const temp = [...AddonsArray];
    temp[index] = !temp[index];
    SetAddonsArray(temp);
  }
  return (
    <div
      className="add-on-card"
      onClick={() => HandleClick(index)}
      style={AddonsArray[index] ? selected : inactive}
    >
      <div className="add-on-card-checkbox">
        <CheckBox
          checked={AddonsArray[index]}
          index={index}
          HandleClick={HandleClick}
        />
      </div>
      <div className="add-on-card-title-content">
        <div className="add-on-card-title">{title}</div>
        <div className="add-on-card-content">{content}</div>
      </div>
      <div className="add-on-card-price">{price}</div>
    </div>
  );
}

export default Addon;
