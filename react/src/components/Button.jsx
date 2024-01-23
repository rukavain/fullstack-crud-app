import React from "react";

const Button = ({ name, bg, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`font-semibold transition bg-white py-2 px-4 my-2 shadow-md text-slate-800 rounded-md hover:text-white hover:bg-${bg}-600 text-center`}
        >
            {name}
        </button>
    );
};

export default Button;
