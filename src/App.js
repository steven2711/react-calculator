import styled from "styled-components";

import Calculator from "./components/Calculator";

function App() {
  return (
    <Container>
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
`;

export default App;
