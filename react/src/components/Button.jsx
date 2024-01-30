import React from "react";

const Button = ({ name, onClick, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`font-semibold transition max-sm:text-sm max-sm:py-1 max:sm-px-2 bg-white py-2 px-4 my-2 shadow-md text-slate-800 rounded-md hover:text-white hover:bg-slate-600 text-center`}
        >
            {name}
        </button>
    );
};

export default Button;
