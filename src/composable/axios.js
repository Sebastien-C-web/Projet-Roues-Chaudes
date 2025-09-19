import axios from 'axios'

const options = {
  proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 80,
  },
  headers: {
    'Content-Type': 'application/json',
  },
}

export async function useAxios(url) {
  return axios.get(url)
}
