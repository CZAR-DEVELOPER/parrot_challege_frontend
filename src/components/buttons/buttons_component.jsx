import React from 'react';



const ButtonComponent = ({onClick, className, children, size, style}) => {
    
    const sizeClasses = {
        sm: 'text-sm p-2',
        md: 'text-md p-3',
        lg: 'text-lg p-4',
    };

    const styleClasses = {
        primary: 'bg-black text-white',
        secondary: 'bg-gray-200 text-black ',
    };

    return (
        <button onClick={onClick} className={`  rounded hover:opacity-50 cursor-pointer ${className} ${sizeClasses[size]} ${  styleClasses[style]}`}>
          {children}
        </button>
    );
};



export default ButtonComponent;