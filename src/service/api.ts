import axios, { AxiosInstance } from 'axios';

class Client {
  api: AxiosInstance

  constructor() {
    let baseURL = process.env.NEXT_PUBLIC_API_URL ?? '';

    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}

export default new Client().api;
