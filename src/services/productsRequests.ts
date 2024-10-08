import { Page } from '../types/page';
import { Product } from '../types/product';
import api from './api';

export const getProducts = async (page: number, searchTerm: string | null) => {
  return api.get<Page<Product>>(
    `/products?page=${page}&search=${searchTerm || ''}`,
  );
};

export const getProduct = async (id: string) => {
  return api.get<Product>(`/products/${id}`);
};
