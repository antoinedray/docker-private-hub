import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    //'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  },
  withCredentials: true,
  crossDomain: true
})
