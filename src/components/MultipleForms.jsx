import Button from "./Button";

function MultipleForms({
  formComponents,
  activeFormInd,
  GoBackOnClick,
  NextStepOnClick
}) {
  const state = [
    {
      title: "Personal info",
      content: "Please provide your name, email address, and phone number.",
    },
    {
      title: "Select your plan",
      content: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      content: "Add-ons help enhance your gaming experince.",
    },
    {
      title: "Finishing up",
      content: "Double-check everything looks OK before confirming.",
    },
  ];
  return (
    <div className="input-section">
      <div className="header-title-specific-form">
        <div className="header-title">
          <h1>{state[activeFormInd].title}</h1>
          <p>{state[activeFormInd].content}</p>
        </div>
        {formComponents[activeFormInd]}
      </div>
      <div className="back-next-buttons">
        <Button className="go-back" text="Go Back" OnClick={GoBackOnClick} />
        <Button
          className="next-step"
          text="Next Step"
          OnClick={NextStepOnClick}
        />
      </div>
    </div>
  );
}

export default MultipleForms;
