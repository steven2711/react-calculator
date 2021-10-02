import React from "react";
import styled from "styled-components";

const Display = ({ value }) => {
  return <Dis id="display">{value}</Dis>;
};

const Dis = styled.div`
  height: 5rem;
  border: 1px solid black;
  font-size: 3rem;
  background: black;
  color: white;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
`;

export default Display;
