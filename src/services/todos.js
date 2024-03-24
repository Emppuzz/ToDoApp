import axios from 'axios'

// Sovellusta voidaan käyttää nyt myös backendin osoitteesta http://localhost:3001
const baseUrl = '/api/todos'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteTodo = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id) => {
  const request = axios.put(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const exportObject = {
  getAll, 
  create,
  deleteTodo,
  update
}

export default exportObject