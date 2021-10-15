import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import ProductCard from '../components/Card';
import EditProductModal from '../components/Modal';
import { Product } from '../totally-real-database/api';
import { Button } from '@fabric-ds/react';
import Link from 'next/link';

export default function App() {
  const { data, error, mutate } = useSwr('/api/products');
  const [products, setProducts] = useState<Product[]>([]);

  const [productInModal, setProductInModal] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(data);
  }, [data]);

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
        {products &&
          products.map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                mutate={mutate}
                setProductInModal={setProductInModal}
              />
            );
          })}
      </ul>
    </div>
  );
}
