import { describe, it, expect } from 'vitest';
import api from './api';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('API Client', () => {
  it('should have the correct base URL', () => {
    expect(api.defaults.baseURL).toBe(import.meta.env.VITE_PRODUCTS_API_URL);
  });

  it('should make a successful GET request', async () => {
    const mock = new MockAdapter(api);
    const mockData = { id: 1, name: 'Product 1' };
    mock.onGet('/products/1').reply(200, mockData);

    const response = await api.get('/products/1');
    expect(response.data).toEqual(mockData);
  });

  it('should handle an error response correctly', async () => {
    const mock = new MockAdapter(api);
    mock.onGet('/products/2').reply(404, { message: 'Not Found' });

    try {
      await api.get('/products/2');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(404);
        expect(error.response?.data.message).toBe('Not Found');
      } else {
        throw new Error('Unexpected error type');
      }
    }
  });
});
