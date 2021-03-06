import { Button, Card } from '@fabric-ds/react';
import { deleteProduct } from '../client/APIClient';
import React from 'react';
import { Product } from '../totally-real-database/api';

type Props = {
  product: Product;
  index: number;
  onClick?: () => void;
  handleDeleteProduct?: (productId: string) => void;
};

export default function ProductCard({
  product,
  index,
  onClick,
  handleDeleteProduct,
}: Props): JSX.Element {
  return (
    <li key={product.id}>
      <Card
        className="mr-8 my-8 flex flex-col justify-evenly"
        key={product.name}
      >
        <div data-cy={`card-${index}`} onClick={onClick}>
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
            onClick={() => handleDeleteProduct(product.id)}
          >
            Remove
          </Button>
        </div>
      </Card>
    </li>
  );
}
