import React from "react";
import styled from "styled-components";

const Button = ({ info, click }) => {
  const { id, value } = info;

  return (
    <Btn id={id} onClick={click}>
      {value}
    </Btn>
  );
};

const Btn = styled.div`
  border: 1px solid black;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background || "lightgray"};

  &:hover {
    background: white;
  }
`;

export default Button;
