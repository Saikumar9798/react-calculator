import React from "react";
import Button from "../Button/Button";
import "./index.css";

const initialState = "0";

const Keypad = ({ className, displayExpression, setDisplayExpression }) => {
  const [realExpression, setRealExpression] = React.useState(initialState);
  const resetCalc = () => {
    setDisplayExpression(initialState);
  };

  const handleClick = (e) => {
    const { value } = e.target;
    if (!["AC"].includes(value)) {
      if (displayExpression == 0) {
        setDisplayExpression("");
        setDisplayExpression(`${value}`);
        setRealExpression("");
        setRealExpression(`${value}`);
      } else {
        setRealExpression(realExpression + `${value}`);
        if (displayExpression.length > 9)
          setDisplayExpression(
            (displayExpression + `${value}`).substr(
              displayExpression.length - 9
            )
          );
        else setDisplayExpression(displayExpression + `${value}`);
      }
    }
  };

  const handleBackSpace = () => {
    if (displayExpression.length > 1) {
      setRealExpression(realExpression.slice(0, -1));
      setDisplayExpression(displayExpression.slice(0, -1));
    } else {
      setRealExpression(initialState);
      setDisplayExpression(initialState);
    }
  };

  const Calculate = () => {
    try {
      const value = eval(realExpression);
      setDisplayExpression(value);
      setRealExpression(value);
    } catch {
      setDisplayExpression("Click AC!");
    }
  };

  return (
    <div className={`keypad ${className}`}>
      <div className="keypad-row">
        <Button label="AC" onClick={resetCalc} />
        <Button label="%" onClick={(e) => handleClick(e)} />
        <Button
          label={"\u2190"}
          onClick={handleBackSpace}
          style={{ fontSize: "2rem" }}
        />
        <Button
          label="="
          style={{
            color: "white",
            fontSize: "3rem",
            background: "#ff3c00",
          }}
          onClick={Calculate}
        />
      </div>
      <div className="keypad-row">
        <Button label="1" onClick={(e) => handleClick(e)} />
        <Button label="2" onClick={(e) => handleClick(e)} />
        <Button label="3" onClick={(e) => handleClick(e)} />
        <Button label="+" onClick={(e) => handleClick(e)} />
      </div>
      <div className="keypad-row">
        <Button label="4" onClick={(e) => handleClick(e)} />
        <Button label="5" onClick={(e) => handleClick(e)} />
        <Button label="6" onClick={(e) => handleClick(e)} />
        <Button label="-" onClick={(e) => handleClick(e)} />
      </div>
      <div className="keypad-row">
        <Button label="7" onClick={(e) => handleClick(e)} />
        <Button label="8" onClick={(e) => handleClick(e)} />
        <Button label="9" onClick={(e) => handleClick(e)} />
        <Button label="*" onClick={(e) => handleClick(e)} />
      </div>
      <div className="keypad-row">
        <Button label="(" onClick={(e) => handleClick(e)} />
        <Button label=")" onClick={(e) => handleClick(e)} />
        <Button label="0" onClick={(e) => handleClick(e)} />
        <Button label="/" onClick={(e) => handleClick(e)} />
      </div>
    </div>
  );
};

export default Keypad;
