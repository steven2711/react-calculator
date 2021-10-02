import React from "react";
import styled from "styled-components";

const Display = ({ value }) => {
  return <Dis>{value}</Dis>;
};

const Dis = styled.div`
  height: 5rem;
  border: 1px solid black;
  font-size: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
`;

export default Display;
