import { describe, it, expect } from 'vitest'
import { render, screen, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'
import { theme } from '../styles/theme'

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => 
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    ),
    ...options
  })

describe('Header', () => {
  it('renders the header component', () => {
    customRender(<Header />)
    
    const homeLink = screen.getByText('Home')
    const converterLink = screen.getByText('Converter/Rates')
    
    expect(homeLink).toBeDefined()
    expect(converterLink).toBeDefined()
  })

  it('contains logo', () => {
    customRender(<Header />)
    const currencySymbol = screen.getByText('₡')
    const currencyText = screen.getByText('Currency')
    const primeText = screen.getByText('Prime')
    
    expect(currencySymbol).toBeDefined()
    expect(currencyText).toBeDefined()
    expect(primeText).toBeDefined()
  })
})