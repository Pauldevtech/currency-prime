import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Header from "./components/Header/Header";
import { Hero, HeroContent, MainContent } from "./styles/Layout";
import RatesTable from "./components/RatesTable/RatesTable";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import Footer from "./components/Footer";

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
            <h1>Currency Exchange Made Simple</h1>
            <p>Get real-time exchange rates and convert currencies with ease using Currency Prime's powerful tools.</p>
          </HeroContent>
        </Hero>
        <MainContent 
          as="main" 
          id="converter-rates"
          role="main"
          aria-label="Currency converter and rates section"
        >
          <RatesTable />
          <CurrencyConverter />
        </MainContent>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;