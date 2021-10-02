import React from "react";
import { numbers } from "../statics/vaiables";
import styled from "styled-components";
import Button from "./Button";

const NumberPad = ({ click }) => {
  return (
    <Pad>
      {numbers.map((number, index) => (
        <Button key={index} info={number} click={click} />
      ))}
    </Pad>
  );
};

const Pad = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default NumberPad;
