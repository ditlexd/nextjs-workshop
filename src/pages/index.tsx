import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import ProductCard from '../components/product-card';
import { Button } from '@fabric-ds/react';
import Link from 'next/link';
import { deleteProduct } from '../client/APIClient';
import { Product } from '../totally-real-database/api';
import EditProductModal from '../components/edit-product-modal';

export default function App() {
  const { data, error, mutate } = useSwr('/api/products');
  const [productInModal, setProductInModal] = useState<Product | null>(null);

  async function handleDeleteProduct(id: string) {
    await deleteProduct(id);
    mutate();
  }

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={'page-container'}>
      {productInModal && (
        <EditProductModal
          product={productInModal}
          onDismiss={() => setProductInModal(null)}
        />
      )}
      <div className="flex items-center justify-between	mt-40 mb-12">
        <h2>Here are some products!</h2>
        <Link href="/new-product">
          <a>
            <Button utility small>
              Create new product
            </Button>
          </a>
        </Link>
      </div>
      <ul className="grid f-grid grid-cols-1 md:grid-cols-3 md:gap-32">
        {data.map((product, index) => {
          return (
            <li key={product.id} onClick={() => setProductInModal(product)}>
              <ProductCard
                product={product}
                index={index}
                handleDeleteProduct={handleDeleteProduct}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
