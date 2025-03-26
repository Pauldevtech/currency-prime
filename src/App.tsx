import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header/Header';
import { Hero, HeroContent, MainContent, Footer } from './styles/Layout';
import RatesTable from './components/RatesTable/RatesTable';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;