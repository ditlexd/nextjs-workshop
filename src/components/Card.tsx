import { Button, Card } from '@fabric-ds/react';
import { deleteProduct } from '../client/APIClient';
import React from 'react';

export default function ProductCard({
  product,
  index,
  setProductInModal,
  mutate,
}): JSX.Element {
  async function handleDeleteProduct() {
    await deleteProduct(product.id);
    mutate();
  }

  return (
    <li key={product.id}>
      <Card
        className="mr-8 my-8 flex flex-col justify-evenly"
        key={product.name}
      >
        <div
          data-cy={`card-${index}`}
          onClick={() => setProductInModal((prev) => (prev ? null : product))}
        >
          <img
            className="h-144 w-full object-cover"
            src={product.imgUrl}
            alt={`${product.name} product image`}
          />
        </div>
        <div className="p-12">
          <p className="font-bold mt-8">{product.name}</p>
          <p>{product.description}</p>
          <Button
            data-cy={'Delete'}
            negative
            small
            onClick={handleDeleteProduct}
          >
            Remove
          </Button>
        </div>
      </Card>
    </li>
  );
}
