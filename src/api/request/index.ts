import HttpRequest from './httpRequest'
const baseUrl = 'http://localhost:3000/'
const commonHeader = {
  accessToken: '',
  pagingInfo: {
    'pageSize': 10,
    'pageNo': 1
  }
}

export default new HttpRequest(baseUrl, commonHeader)
