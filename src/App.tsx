import { Container } from "./styles/Container";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Currency Prime</h1>
        <p>Welcome to Currency Prime! Fetching exchange rates...</p>
      </Container>
    </>
  );
};

export default App;
