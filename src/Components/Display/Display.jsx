import React from 'react';
import "./index.css"

const Display = ({className, label}) => {
    return (
      <div className={`display ${className}`}>
        <div className="main-display">{label}</div>
      </div>
    );
}

export default Display
