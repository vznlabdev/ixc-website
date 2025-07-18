/**
 * Error handling utilities
 */

export class DataFetchError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message)
    this.name = 'DataFetchError'
  }
}

export async function withErrorHandling<T>(
  promise: Promise<T>,
  errorMessage = 'Failed to fetch data'
): Promise<T> {
  try {
    return await promise
  } catch (error) {
    console.error(errorMessage, error)
    throw new DataFetchError(
      errorMessage,
      undefined,
      error
    )
  }
}

export function isDataFetchError(error: unknown): error is DataFetchError {
  return error instanceof DataFetchError
}

// Retry utility for transient failures
export async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay))
      return withRetry(fn, retries - 1, delay * 2)
    }
    throw error
  }
} 