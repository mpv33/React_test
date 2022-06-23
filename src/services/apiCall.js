
const axios = require('axios')

export function getReq(url) {
  return axios.get(url)
}
