import axios from 'axios';

export interface HttpResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_API_URL,
});

export default api;
