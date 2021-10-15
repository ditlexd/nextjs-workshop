import { Product } from '../totally-real-database/api';

export function postNewProduct(name: string, description: string, url: string) {
  return fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify({ name, description, imgUrl: url }),
  });
}

export function updateProduct(
  name: string,
  description: string,
  imgUrl: string,
  prev: Product
) {
  return fetch('/api/products', {
    method: 'PUT',
    body: JSON.stringify({
      name,
      description,
      imgUrl,
      id: prev.id,
    }),
  });
}

export function deleteProduct(id: string) {
  return fetch(`/api/products?id=${id}`, { method: 'DELETE' });
}
