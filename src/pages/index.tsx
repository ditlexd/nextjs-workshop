import React, { useEffect, useState } from 'react';
import useSwr, { useSWRConfig } from 'swr';
import { Product } from '../totally-real-database/database-api';
import EditProductModal from '../components/Modal';
import ProductCard from '../components/ProductCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { mutate } = useSWRConfig();
  const { data, error } = useSwr('/api/products', fetcher);
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
      <h2 className={'mt-128 ml-8'}>Here are some products!</h2>
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
