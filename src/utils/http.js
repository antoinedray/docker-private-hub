import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost/api/v2/',
  headers: {
    //'Accept': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    //'Access-Control-Allow-Headers': '*'
  },
  crossDomain: true
})
