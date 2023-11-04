import "./checkbox.css";

function CheckBox(checked, index, HandleClick) {
    return(
        <label class="checkbox-container">
        {/* <input type="checkbox" /> */}
        {/* <input type="checkbox" checked={checked} /> */}
        <input type="checkbox" onChange={()=>HandleClick(index)} />

        <span class="checkmark"></span>
      </label>
    );
}

export default CheckBox;
