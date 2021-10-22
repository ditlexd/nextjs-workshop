import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import ProductCard from '../components/product-card';
import { Button } from '@fabric-ds/react';
import Link from 'next/link';

export default function App() {
  const { data, error, mutate } = useSwr('/api/products');

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
            <ProductCard key={product.id} product={product} index={index} />
          );
        })}
      </ul>
    </div>
  );
}
