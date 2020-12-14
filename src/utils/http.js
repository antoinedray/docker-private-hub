import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://${process.env.VUE_APP_DOCKER_PRIVATE_HUB_HOST}/api/v2/`,
  headers: {
  }
})
