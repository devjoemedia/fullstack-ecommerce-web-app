import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://easybuy.test/api'
});

export default instance