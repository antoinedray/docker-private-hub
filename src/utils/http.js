import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://${location.host}/api/v2/`,
  headers: {
  }
})
