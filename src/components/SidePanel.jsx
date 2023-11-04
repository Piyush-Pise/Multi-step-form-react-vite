import bg from '/bg-sidebar-desktop.svg'
import Steps from "./Steps";

function SidePanel({ activeFormInd }) {
  return (
    <div className="side-panel">
      <img src={bg} alt="" className='bg' />
      <Steps number="1" text="YOUR INFO" isActive={activeFormInd === 0} />
      <Steps number="2" text="SELECT PLAN" isActive={activeFormInd === 1} />
      <Steps number="3" text="ADD-ONS" isActive={activeFormInd === 2} />
      <Steps number="4" text="SUMMARY" isActive={activeFormInd === 3 ||activeFormInd === 4} />
    </div>
  );
}

export default SidePanel;
