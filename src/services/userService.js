import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  apiClient: apiClient,
  register (credential) {
    return apiClient.post('/register', credential)
  },
  login (credential) {
    return apiClient.post('/login', credential)
  }
}
