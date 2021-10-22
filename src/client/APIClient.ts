import { Product } from '../totally-real-database/api';

export function postNewProduct(
  name: string,
  description: string,
  imgUrl: string
) {
  return fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify({ name, description, imgUrl }),
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
