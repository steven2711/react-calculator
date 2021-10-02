import styled from "styled-components";

import Calculator from "./components/Calculator";

function App() {
  return (
    <Container>
      <h1>React Calculator</h1>
      <Calculator />
    </Container>
  );
}

const Container = styled.main`
  background: beige;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 1rem 0;
  }
`;

export default App;
