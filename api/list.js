import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // GET http://....:3000/list
  list: () => axios.get(`${baseUrl}/cardList`),
  // GET http://....:3000/list/:id
  get: (id) => axios.get(`${baseUrl}/cardList/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/cardList?q=${keyword}`), 
  
  cardList: ()=> axios.get(`${baseUrl}/cardback`)
}