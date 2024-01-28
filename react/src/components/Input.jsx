import React from "react";

const Input = ({ label, type, value, placeholder, onChangeValue }) => {
    return (
        <>
            <div className="my-3">
                <label>
                    <h1 className="font-semibold ">{label}</h1>
                </label>
                <input
                    min={0}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    className="rounded-md py-2 px-2 my-2 shadow-md"
                    onChange={(e) => onChangeValue(e.target.value)}
                />
            </div>
        </>
    );
};

export default Input;
