// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header/Header';
import RatesTable from './components/RatesTable/RatesTable';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { Hero, HeroContent, MainContent, Footer } from './styles/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      
      <Hero>
        <HeroContent>
          <h1>Exchange Currencies with Ease</h1>
          <p>Discover real-time exchange rates and convert currencies effortlessly.</p>
        </HeroContent>
      </Hero>

      <MainContent>
        <CurrencyConverter />
        <RatesTable />
      </MainContent>

      <Footer>
        <p>© 2024 Currency Prime | All rights reserved</p>
      </Footer>
    </ThemeProvider>
  );
};

export default App;