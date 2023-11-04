// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import arcadeSvg from "/icon-arcade.svg";
import advancedSvg from "/icon-advanced.svg";
import proSvg from "/icon-pro.svg";

import Card from "./Card";
import ToggleSwitch from "./ToggleSwitch";

// import "./personalInfo.css";

function SelectYourPlan({
  planType,
  setPlanType,
  PlanIndex,
  setPlanIndex,
  PlanPricing,
}) {
  return (
    <>
      <div className="select-plan-container">
        <div className="plan-cards">
          <Card
            svg={arcadeSvg}
            title="Arcade"
            price={
              "$" + PlanPricing[planType ? 1 : 0][0] + (planType ? "/yr" : "/mo")
            }
            planType={planType}
            isSelected={PlanIndex === 0}
            index={0}
            OnClick={setPlanIndex}
          />
          <Card
            svg={advancedSvg}
            title="Advanced"
            price={
              "$" + PlanPricing[planType ? 1 : 0][1] + (planType ? "/yr" : "/mo")
            }
            planType={planType}
            isSelected={PlanIndex === 1}
            index={1}
            OnClick={setPlanIndex}
          />
          <Card
            svg={proSvg}
            title="Pro"
            price={
              "$" + PlanPricing[planType ? 1 : 0][2] + (planType ? "/yr" : "/mo")
            }
            planType={planType}
            isSelected={PlanIndex === 2}
            index={2}
            OnClick={setPlanIndex}
          />
        </div>
        <div className="monthly-yearly-toggle-button-container">
          Monthly
          {/* <input type="checkbox" name="" id="" /> */}
          {/* <div className="monthly-yearly-toggle-button">
            <div className="knob"></div>
          </div> */}
          <ToggleSwitch isToggled={planType} HandleToggle={setPlanType} />
          Yearly
        </div>
      </div>
      {/* <Input label="Name" type="text" placeholder="e.g. Stephen King" />
      <Input
        label="Email Address"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input
        label="Phone Number"
        type="text"
        placeholder="e.g. +91 12345 6789"
      /> */}
    </>
  );
}

export default SelectYourPlan;
