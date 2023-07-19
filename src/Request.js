import axios from 'axios'

const Request = axios.create({
  // baseURL: 'http://localhost:1337/api/',
  baseURL: 'https://raphix-design-app.onrender.com/api/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'bearer' + '385d4b51d2e475dc321d9fa0da9927e0e384e456b997e0065ee9d4ac178ee289b8b775d16818fabc75fe05ada75560b2d52e231560dbf2253922310e3b53f4ab3e27e4efd87532c15c0c802f4c0cbae2be66dd887fca07c2d7cb39247f6d02d5563fb71e59d9c6515d221a3e936fbf2eba214d24b81d8f4c49656895abfd5627'
  }
})

export default Request
