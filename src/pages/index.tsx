import React, { useEffect, useState } from 'react';
import { Button, Card } from '@fabric-ds/react';
import useSwr, { useSWRConfig } from 'swr';
import { Product } from '../totally-real-database/database-api';
import EditProductModal from '../components/Modal';
import { deleteProduct } from '../client/APIClient';

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
      <div className="grid f-grid grid-cols-1 md:grid-cols-3 md:gap-32">
        {products &&
          products.map((product, index) => {
            return (
              <Card
                className="mx-8 my-8 flex flex-col justify-evenly"
                key={product.name}
              >
                <div
                  data-cy={`card-${index}`}
                  onClick={() =>
                    setProductInModal((prev) => (prev ? null : product))
                  }
                >
                  <img
                    className="h-144 w-full object-cover"
                    src={product.imgUrl}
                  />
                  <p className="font-bold mt-8">{product.name}</p>
                  <p>{product.description}</p>
                </div>
                <Button
                  negative
                  pill
                  small
                  data-cy={'Delete'}
                  onClick={() => {
                    deleteProduct(product.id).then(() =>
                      mutate('/api/products')
                    );
                  }}
                >
                  Remove
                </Button>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
