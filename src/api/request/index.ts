import HttpRequest from './httpRequest'
// TODO baseUrl取值
let baseUrl
try {
  baseUrl = process.env.VUE_APP_BASE_URL
  console.log(process.env.VUE_APP_NODE_ENV)
} catch (error) {
  baseUrl = (import.meta as any).env.VITE_BASE_URL
  console.log((import.meta as any).env.VITE_NODE_ENV)
}
console.log(baseUrl)
const commonHeader = {
  accessToken: '',
  pagingInfo: {
    'pageSize': 10,
    'pageNo': 1
  }
}

export default new HttpRequest(baseUrl, commonHeader)
