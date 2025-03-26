import { describe, it, expect, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useExchangeRates } from '../hooks/useExchangeRates'
import { fetchExchangeRates, ExchangeRate } from '../services/api'
import React, { ReactNode } from 'react'

// Mock the API module
vi.mock('../services/api', () => ({
  fetchExchangeRates: vi.fn()
}))

// Create a wrapper with QueryClient
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  
  return function Wrapper({ children }: { children: ReactNode }) {
    return React.createElement(
      QueryClientProvider,
      { client: queryClient },
      children
    )
  }
}

describe('useExchangeRates', () => {
  const mockData: ExchangeRate[] = [
    { 
      code: 'USD', 
      currency: 'dollar', 
      country: 'United States',
      amount: 1, 
      rate: 23.45 
    },
    { 
      code: 'EUR', 
      currency: 'euro', 
      country: 'European Union',
      amount: 1, 
      rate: 25.67 
    }
  ]

  it('fetches exchange rates successfully', async () => {
    const mockedFetch = vi.mocked(fetchExchangeRates)
    mockedFetch.mockResolvedValue(mockData)

    const { result } = renderHook(() => useExchangeRates(), {
      wrapper: createWrapper()
    })

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.data).toEqual(mockData)
    expect(result.current.isError).toBe(false)
  })

  it('handles error state', async () => {
    const mockedFetch = vi.mocked(fetchExchangeRates)
    mockedFetch.mockRejectedValue(new Error('Failed to fetch'))

    const { result } = renderHook(() => useExchangeRates(), {
      wrapper: createWrapper()
    })

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isError).toBe(true)
    expect(result.current.error).toBeDefined()
    expect(result.current.data).toBeUndefined()
  })

  it('refreshes data', async () => {
    const mockedFetch = vi.mocked(fetchExchangeRates)
    
    // First response
    const initialData: ExchangeRate[] = [
      { 
        code: 'USD', 
        currency: 'dollar', 
        country: 'United States',
        amount: 1, 
        rate: 23.45 
      }
    ]
    
    // Updated response
    const updatedData: ExchangeRate[] = [
      { 
        code: 'USD', 
        currency: 'dollar', 
        country: 'United States',
        amount: 1, 
        rate: 24.00 // Different rate
      }
    ]

    mockedFetch.mockResolvedValueOnce(initialData)
    mockedFetch.mockResolvedValueOnce(updatedData)

    const { result } = renderHook(() => useExchangeRates(), {
      wrapper: createWrapper()
    })

    // Wait for initial data
    await waitFor(() => {
      expect(result.current.data).toEqual(initialData)
    })

    // Trigger a refresh
    result.current.refetch()

    // Wait for updated data
    await waitFor(() => {
      expect(result.current.data).toEqual(updatedData)
    })
  })

  it('handles empty data response', async () => {
    const mockedFetch = vi.mocked(fetchExchangeRates)
    mockedFetch.mockResolvedValue([])

    const { result } = renderHook(() => useExchangeRates(), {
      wrapper: createWrapper()
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.data).toEqual([])
    expect(result.current.isError).toBe(false)
  })
})