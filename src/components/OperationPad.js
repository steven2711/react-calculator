import React from "react";
import { operations } from "../statics/vaiables";
import styled from "styled-components";
import Button from "./Button";

const OperationPad = ({ click }) => {
  return (
    <Pad>
      {operations.map((operation, index) => (
        <Button key={index} info={operation} click={click} />
      ))}
    </Pad>
  );
};

const Pad = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export default OperationPad;
