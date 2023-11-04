import "./cards.css";

function Card({ svg, title, price, planType,isSelected, OnClick, index }) {
  const active = {
    backgroundColor: "hsl(231, 100%, 99%)",
    border: "1px solid hsl(213, 96%, 18%)",
  };
  const inactive = {};

  return (
    <div
      className="card"
      style={isSelected ? active : inactive}
      onClick={() => OnClick(index)}
    >
      <img className="card-logo" src={svg} alt="" />
      <div>
        <div className="card-title">{title}</div>
        <div className="card-price">{price}</div>
        {planType && <div className="two-month-free">2 months free</div>}
      </div>
    </div>
  );
}

export default Card;
