import React from "react";
import "./Button1.css";

const Button1 = () => {
    return (
        <>
            <body>
            <a href="#" className="cta">
                <span>Click me</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
            </body>
        </>
    )
}

export default Button1