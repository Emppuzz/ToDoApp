import axios from 'axios'

// Sovellusta voidaan käyttää nyt myös backendin osoitteesta http://localhost:3001
const baseUrl = '/api/todos'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(baseUrl, config)
  const response = await request
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(baseUrl, newObject, config)
  const response = await request
  return response.data
}

const deleteTodo = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = async (id) => {
  const request = axios.put(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

const exportObject = {
  getAll, 
  create,
  deleteTodo,
  update,
  setToken
}

export default exportObject