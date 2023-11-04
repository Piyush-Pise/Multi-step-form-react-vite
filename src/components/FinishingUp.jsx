import AddOnSummaryCard from "./AddOnSummaryCard";
import "./finishingUp.css";

function FinishingUp({
  planType,
  PlanIndex,
  planPricing,
  AddonsArray,
  AddOnsPricing,
}) {
  const plans = ["Arcade", "Advanced", "Pro"];
  const AddOns = ["Online service", "Large storage", "Customizable profile"];

  function calculateTotal() {
    let total = planPricing[planType ? 1 : 0][PlanIndex];
    total += AddonsArray[0] ? AddOnsPricing[planType ? 1 : 0][0] : 0;
    total += AddonsArray[1] ? AddOnsPricing[planType ? 1 : 0][1] : 0;
    total += AddonsArray[2] ? AddOnsPricing[planType ? 1 : 0][2] : 0;
    return total;
  }

  return (
    <>
      <div className="amount-break-up">
        <div className="plan-and-price">
          <div>
            <div className="plan-type">
              {plans[PlanIndex]} ({planType ? "Yearly" : "Monthly"})
            </div>
            <div className="change-link">Change</div>
          </div>
          <div className="plan-price">
            ${planPricing[planType ? 1 : 0][PlanIndex]}/{planType ? "yr" : "mo"}
          </div>
        </div>
        <div className="line"></div>
        {/* add-ons */}
        {AddonsArray[0] && (
          <AddOnSummaryCard
            type={AddOns[0]}
            price={
              "+$" +
              AddOnsPricing[planType ? 1 : 0][0] +
              (planType ? "/yr" : "/mo")
            }
          />
        )}
        {AddonsArray[1] && (
          <AddOnSummaryCard
            type={AddOns[1]}
            price={
              "+$" +
              AddOnsPricing[planType ? 1 : 0][1] +
              (planType ? "/yr" : "/mo")
            }
          />
        )}
        {AddonsArray[2] && (
          <AddOnSummaryCard
            type={AddOns[2]}
            price={
              "+$" +
              AddOnsPricing[planType ? 1 : 0][2] +
              (planType ? "/yr" : "/mo")
            }
          />
        )}
      </div>
      <div className="amount-total-sum">
        <span>Total (per {planType ? "year" : "month"})</span>
        <div>
          +${calculateTotal()}/{planType ? "yr" : "mo"}
        </div>
      </div>
    </>
  );
}

export default FinishingUp;
