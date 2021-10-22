import { Product } from '../totally-real-database/api';

export function postNewProduct(name: string, description: string, url: string) {
  return fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify({ name, description, imgUrl: url }),
  });
}

export function updateProduct({ name, description, imgUrl, id }: Product) {
  return fetch('/api/products', {
    method: 'PUT',
    body: JSON.stringify({
      name,
      description,
      imgUrl,
      id,
    }),
  });
}

export function deleteProduct(id: string) {
  return fetch(`/api/products?id=${id}`, { method: 'DELETE' });
}
