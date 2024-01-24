import React from "react";

const SuccessMessage = ({ message, hide }) => {
    return (
        <h1
            onClick={() => hide("")}
            className="font-semibold text-center my-2 py-2 px-4 bg-white shadow-md rounded-md cursor-pointer hover:opacity-70 transition"
        >
            {message}
        </h1>
    );
};

export default SuccessMessage;
