import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getTasks = async (filters = {}) => {
  const params = new URLSearchParams()
  if (filters.status) params.append('status', filters.status)
  if (filters.priority) params.append('priority', filters.priority)
  
  const response = await api.get(`/api/tasks?${params.toString()}`)
  return response.data
}

export const getTask = async (id) => {
  const response = await api.get(`/api/tasks/${id}`)
  return response.data
}

export const createTask = async (task) => {
  const response = await api.post('/api/tasks', task)
  return response.data
}

export const updateTask = async (id, task) => {
  const response = await api.put(`/api/tasks/${id}`, task)
  return response.data
}

export const deleteTask = async (id) => {
  await api.delete(`/api/tasks/${id}`)
}

export default api



