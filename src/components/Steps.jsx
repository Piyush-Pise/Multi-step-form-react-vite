// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./steps.css";

const active = {
  backgroundColor: "hsl(206, 94%, 87%)",
  color: "hsl(213, 96%, 18%)",
  border: "1px solid hsl(206, 94%, 87%)",
};
const inactive = { backgroundColor: "transparent" };

function Steps(info) {
  return (
    <>
      <div className="step-container">
        <div className="icon-number" style={info.isActive ? active : inactive}>
          {info.number}
        </div>
        <div className="right-container">
          <div className="step-no">STEP {info.number}</div>
          <div className="text">{info.text}</div>
        </div>
      </div>
    </>
  );
}

export default Steps;
