// Base API configuration
const API_BASE_URL = 'http://localhost:3000'

// Generic fetch wrapper with error handling
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// GET request helper
export const get = (endpoint) => apiRequest(endpoint, { method: 'GET' })

// POST request helper
export const post = (endpoint, data) => 
  apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })

// PATCH request helper
export const patch = (endpoint, data) => 
  apiRequest(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })

// DELETE request helper
export const del = (endpoint) => 
  apiRequest(endpoint, { method: 'DELETE' })

export default {
  get,
  post,
  patch,
  delete: del,
}

