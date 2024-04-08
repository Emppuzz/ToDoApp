import axios from 'axios'

// Sovellusta voidaan käyttää nyt myös backendin osoitteesta http://localhost:3001
const baseUrl = '/api/todos'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
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
  update
}

export default exportObject