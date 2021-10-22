import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import ProductCard from '../components/product-card';
import EditProductModal from '../components/edit-product-modal';
import { Product } from '../totally-real-database/api';
import { Button } from '@fabric-ds/react';
import Link from 'next/link';
import { deleteProduct } from '../client/APIClient';

export default function App() {
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
      <ul className="grid f-grid grid-cols-1 md:grid-cols-3 md:gap-32"></ul>
    </div>
  );
}
