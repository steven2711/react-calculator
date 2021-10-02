import React, { useState } from "react";
import NumberPad from "./NumberPad";
import OperationPad from "./OperationPad";
import Display from "./Display";
import styled from "styled-components";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [display, setDisplay] = useState(0);

  const onClick = (e) => {
    const value = e.target.innerText;

    // Erase display
    if (value === "C") {
      setDisplay(0);
      return;
    }

    // No multiple zeros
    if (display === 0 && value === "0") {
      return;
    }

    // Remove initial zero

    if (display === 0) {
      setDisplay(value);
      return;
    }

    // Prevent multiple decimals

    if (display.includes(".") && value === ".") {
      return;
    }

    // Calculate display

    if (value === "=") {
      const result = calculate(display);
      setDisplay(result);
      return;
    }

    setDisplay(display + value);
  };

  const calculate = (values) => {
    const result = evaluate(values);

    if (JSON.stringify(result).includes(".")) {
      return result.toFixed(4);
    }

    return JSON.stringify(result);
  };

  return (
    <Calc>
      <Display value={display} />
      <Pads>
        <div>
          <NumberPad click={onClick} />
        </div>
        <div>
          <OperationPad click={onClick} />
        </div>
      </Pads>
    </Calc>
  );
};

const Calc = styled.div`
  border: 1px solid black;
  width: 40%;
`;

const Pads = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Calculator;
