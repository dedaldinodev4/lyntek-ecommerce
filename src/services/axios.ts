import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx: any) {

  const {'lyntek_access_token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333/api/v1/'
  });

  api.interceptors.request.use(config => {
    return config;
  });

  if ( token ) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
 
  return api;
}