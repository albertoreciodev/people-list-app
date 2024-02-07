/**
 * Initializes server data by making HEAD requests to specified API endpoints.
 * @returns {Promise<void>} A promise that resolves once the initialization is complete.
 */
export async function initializeServerData(): Promise<void> {
  // Define the API endpoints to be checked during initialization.
  const endpoints = ['/api/persons', '/api/persons/null']

  // Use Promise.all to perform parallel HEAD requests to the specified endpoints.
  await Promise.all(
    endpoints.map(async (endpoint) => {
      // Construct the complete URL by combining the base API URL and the endpoint.
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`

      // Make a HEAD request to the API endpoint.
      await fetch(url, {
        method: 'HEAD',
      })
    })
  )
}