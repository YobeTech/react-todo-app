import React from 'react'
import './index.css'
/**
 * {
 * color
 * label
 * onClick
 * 
 * }
 */
const Button = (props) => {
    const {color, label, onClick} = props


    return (
        <div onClick={onClick} className="Button"style={{backgroundColor: color || '#4CAF50'}}>
            {label}
        </div>
    )

}

export default Button