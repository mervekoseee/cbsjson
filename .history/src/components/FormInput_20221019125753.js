import React from "react";

export default function FormInput(props) {
  return (
    <div 
    
    style ={{
        backgroundColor:"#black",
        color:"white"
        }}>
      <label htmlFor={props.name} style ={{color:"black"}} className="form-label">
        {props.text}
      </label>

      <input
        disabled={props.disabled}
        type={props.type}
        className="form-control btn-secondary"
        style={{
          fontColor: "#dda15e",
          fontWeight: "bold",
          fontSize: 15,
          background: "white",
          color: "black"
        }}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onSelect={props.onSelect}
        checked={props.checked}
        required={props.required ? props.required : false}
        min={props.min}
      />
    </div>
  );
}
