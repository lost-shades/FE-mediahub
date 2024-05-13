import React, { useState } from 'react'; 
import "./Components.css";

export const Inputs = ({ type, placeholder, names }) => {
  const [inputs, setInputs] = useState({ [names]: '' }); 

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value }); 
  }

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={names}
        value={inputs[names] || ""} 
        onChange={handleChange}
        required
      />
    </div>
  );
}
