import React from "react";

const Input = ({ type, value, placeholder, onChangeValue }) => {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            className="rounded-md py-2 px-2 my-2 shadow-md"
            onChange={(e) => onChangeValue(e.target.value)}
        />
    );
};

export default Input;
