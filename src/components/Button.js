import React from "react";
import styled from "styled-components";

const Button = ({ info, click, background }) => {
  const { id, value } = info;

  return (
    <Btn id={id} onClick={click} background={background}>
      {value}
    </Btn>
  );
};

const Btn = styled.div`
  border: 1px solid black;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};

  &:hover {
    background: white;
  }
`;

export default Button;
