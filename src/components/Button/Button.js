import React from 'react';
import './Button.scss';
const CustomButton = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
}

export default CustomButton;
