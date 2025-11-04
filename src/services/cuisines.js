import api from './api'

// Get all active cuisines
export const getCuisines = async () => {
  return api.get('/cuisines')
}

// Get all cuisines (including inactive) - Admin only
export const getCuisinesAdmin = async () => {
  return api.get('/cuisines/admin')
}

// Get cuisine by ID
export const getCuisineById = async (id) => {
  return api.get(`/cuisines/${id}`)
}

// Get cuisine by slug
export const getCuisineBySlug = async (slug) => {
  return api.get(`/cuisines/slug/${slug}`)
}

// Create new cuisine
export const createCuisine = async (cuisineData) => {
  return api.post('/cuisines', cuisineData)
}

// Update cuisine
export const updateCuisine = async (id, cuisineData) => {
  return api.patch(`/cuisines/${id}`, cuisineData)
}

// Delete cuisine (permanent)
export const deleteCuisine = async (id) => {
  return api.delete(`/cuisines/${id}`)
}

// Deactivate cuisine (soft delete)
export const deactivateCuisine = async (id) => {
  return api.patch(`/cuisines/${id}/deactivate`)
}

export default {
  getCuisines,
  getCuisinesAdmin,
  getCuisineById,
  getCuisineBySlug,
  createCuisine,
  updateCuisine,
  deleteCuisine,
  deactivateCuisine,
}

