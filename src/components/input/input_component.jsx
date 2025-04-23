import React from "react";

const InputComponent = ({ label, placeholder, className }) => {
return (
    <>
    <div className={className}>

        <label className="block text-start">{label}</label>
        <input
            type="email"
            className={`border border-gray-300 rounded p-2 w-full `}
            placeholder={placeholder}
        ></input>
    </div>
    </>
);
};

export default InputComponent;
