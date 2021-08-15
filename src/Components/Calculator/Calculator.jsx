import React from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import "./index.css";

const initialState = "0";

const Calculator = () => {
  const [displayExpression, setDisplayExpression] =
    React.useState(initialState);

  return (
    <div className="calc-container">
      <Display className="calc-display" label={displayExpression} />
      <Keypad
        className="calc-keypad"
        displayExpression={displayExpression}
        setDisplayExpression={setDisplayExpression}
      />
    </div>
  );
};

export default Calculator;
