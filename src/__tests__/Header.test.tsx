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
    const converterLink = screen.getByText('Rates/Converter')
    
    expect(homeLink).toBeDefined()
    expect(converterLink).toBeDefined()
  })

  it('contains logo', () => {
    customRender(<Header />)
    
    // Test the logo text
    const logoText = screen.getByText('Currency Prime')
    expect(logoText).toBeDefined()
    
    // Test if SVG is present
    const logoSVG = document.querySelector('svg')
    expect(logoSVG).toBeTruthy()
    
    // Test if SVG contains the necessary elements
    const circleBg = document.querySelector('.circle-bg')
    const symbolPrimary = document.querySelector('.symbol-primary')
    expect(circleBg).toBeTruthy()
    expect(symbolPrimary).toBeTruthy()
  })

  it('has correct navigation links', () => {
    customRender(<Header />)
    
    const homeLink = screen.getByText('Home')
    const converterLink = screen.getByText('Rates/Converter')
    
    expect(homeLink.getAttribute('href')).toBe('#home')
    expect(converterLink.getAttribute('href')).toBe('#converter-rates')
  })

  it('has accessible navigation', () => {
    customRender(<Header />)
    
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).toBeDefined()
    expect(nav.getAttribute('role')).toBe('navigation')
  })
})