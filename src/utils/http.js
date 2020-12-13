import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost/api/v2/',
  headers: {
  }
})
