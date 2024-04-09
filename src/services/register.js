import axios from 'axios'
const baseUrl = '/api/users'

const register = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}


const exportObject = {register}
  
export default exportObject