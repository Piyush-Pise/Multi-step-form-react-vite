import AddOn from "./Addon";

function PickAddOns({ planType, AddonsArray, SetAddonsArray, AddOnsPricing }) {
  return (
    <div className="add-on-container">
      <AddOn
        title="Online service"
        content="Access to multiplayer games"
        price={
          "+$" + AddOnsPricing[planType ? 1 : 0][0] + (planType ? "/yr" : "/mo")
        }
        AddonsArray={AddonsArray}
        index={0}
        SetAddonsArray={SetAddonsArray}
      />
      <AddOn
        title="Large storage"
        content="Extra 1TB of cloud save"
        price={
          "+$" + AddOnsPricing[planType ? 1 : 0][1] + (planType ? "/yr" : "/mo")
        }
        AddonsArray={AddonsArray}
        index={1}
        SetAddonsArray={SetAddonsArray}
      />
      <AddOn
        title="Customizable Profile"
        content="Custom theme on your profile"
        price={
          "+$" + AddOnsPricing[planType ? 1 : 0][2] + (planType ? "/yr" : "/mo")
        }
        AddonsArray={AddonsArray}
        index={2}
        SetAddonsArray={SetAddonsArray}
      />
    </div>
  );
}

export default PickAddOns;
