import React from "react";

const SelectComponent = ({ label, id, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
