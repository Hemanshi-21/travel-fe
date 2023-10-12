import React from "react";
import "./button.css";

 const Button = ({className, label, title}) => {
    return (
        <button className="btn-1">
        {title}
        </button>
    )
}

export default Button
