import { useState } from "react";

import MultipleForms from "./components/MultipleForms";
import SidePanel from "./components/SidePanel";
import PersonalInfo from "./components/PersonalInfo";
import SelectYourPlan from "./components/SelectYourPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYouPage from "./components/ThankYouPage";

import "./App.css";

function MultiStepReactForm() {
  const [activeFormInd, setActiveFormInd] = useState(0);

  // Personal Info states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");

  // Select you plan states
  const [planType, setPlanType] = useState(false);
  // (false = monthly), {true = yearly}
  const [PlanIndex, setPlanIndex] = useState(0);

  // Pick Add-ons state
  const [AddonsArray, setAddonsArray] = useState([false, false, false]);

  // Pricing and declaration
  const planPricing = [
    [9, 12, 15],
    [90, 120, 150],
  ];
  const AddOnsPricing = [
    [1, 2, 2],
    [10, 20, 20],
  ];

  function GoBackOnClick() {
    if (activeFormInd > 0) {
      setActiveFormInd(activeFormInd - 1);
    }
  }
  function NextStepOnClick() {
    if (activeFormInd < 4) {
      setActiveFormInd(activeFormInd + 1);
    }
  }

  function OnChange(e, index) {
    switch (index) {
      case 1:
        setName(e.target.value);
        break;
      case 2:
        setEmail(e.target.value);
        break;
      case 3:
        setPhNo(e.target.value);
        break;
      default:
        break;
    }
  }

  const formComponents = [
    <PersonalInfo
      key={0}
      name={name}
      email={email}
      phNo={phNo}
      OnChange={OnChange}
    />,
    <SelectYourPlan
      key={1}
      planType={planType}
      setPlanType={setPlanType}
      PlanIndex={PlanIndex}
      setPlanIndex={setPlanIndex}
      PlanPricing={planPricing}
    />,
    <PickAddOns
      key={2}
      planType={planType}
      AddonsArray={AddonsArray}
      SetAddonsArray={setAddonsArray}
      AddOnsPricing={AddOnsPricing}
    />,
    <FinishingUp
      key={3}
      planType={planType}
      PlanIndex={PlanIndex}
      planPricing={planPricing}
      AddonsArray={AddonsArray}
      AddOnsPricing={AddOnsPricing}
    />,
  ];

  return (
    <>
      <div className="container">
        <SidePanel activeFormInd={activeFormInd} />
        {activeFormInd != 4 ? (
          <MultipleForms
            formComponents={formComponents}
            activeFormInd={activeFormInd}
            GoBackOnClick={GoBackOnClick}
            NextStepOnClick={NextStepOnClick}
          />
        ) : (
          <ThankYouPage />
        )}
      </div>
    </>
  );
}

export default MultiStepReactForm;
