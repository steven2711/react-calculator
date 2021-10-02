import React, { useState } from "react";
import NumberPad from "./NumberPad";
import OperationPad from "./OperationPad";
import Display from "./Display";
import styled from "styled-components";
import { evaluate } from "mathjs";
import { operations } from "../statics/vaiables";

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [decimal, setDecimal] = useState(false);

  const operators = ["+", "-", "*", "/"];
  const hardOperators = ["*", "/"];
  const withoutMinus = ["+", "*", "/"];

  const onClick = (e) => {
    const value = e.target.innerText;

    // Erase display
    if (value === "C") {
      setDisplay(0);
      setDecimal(false);
      return;
    }

    // Check multiple operations

    if (display === 0 && hardOperators.includes(value)) {
      return;
    }

    if (
      withoutMinus.includes(value) &&
      operators.includes(display[display.length - 1]) &&
      operators.includes(display[display.length - 2])
    ) {
      const swapOperator = display.slice(0, -2);
      console.log(swapOperator + value);

      setDisplay(swapOperator + value);
      return;
    }

    if (
      withoutMinus.includes(value) &&
      operators.includes(display[display.length - 1])
    ) {
      const swapOperator = display.slice(0, -1);
      console.log(swapOperator + value);

      setDisplay(swapOperator + value);
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

    if (value === ".") {
      setDecimal(true);
    }

    if (decimal === true && value === ".") {
      return;
    }

    if (operators.includes(value) && decimal === true) {
      setDecimal(false);
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
      return result;
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
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 540px) {
    width: 99%;
  }
`;

const Pads = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Calculator;
