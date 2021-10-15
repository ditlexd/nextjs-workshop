import { v4 as uuidv4 } from 'uuid';
import data from './data.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
};

export class Database {
  products: Product[];

  constructor() {
    this.products = data;
  }

  get(id: string) {
    return this.products.find((prod) => prod.id === id);
  }

  getAll() {
    return this.products;
  }

  insert(product: Omit<Product, 'id'>) {
    this.products = [...this.products, { id: uuidv4(), ...product }];
  }

  update(product: Product) {
    this.products = this.products.map((p) => {
      if (p.id === product.id) {
        return { ...product };
      }
      return p;
    });
  }

  delete(id: string) {
    this.products = this.products.filter((p) => p.id !== id);
  }

  reset() {
    this.products = data;
  }
}
