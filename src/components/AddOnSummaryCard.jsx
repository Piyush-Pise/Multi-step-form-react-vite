import "./finishingUp.css";

function AddOnSummaryCard({ type, price })
{
    return (
        <div className="add-on-summary-card">
            <div className="add-on-type">{type}</div>
            <div className="add-on-price">{price}</div>
        </div>
    );
}

export default AddOnSummaryCard;
