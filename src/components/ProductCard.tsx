import { Button, Card } from '@fabric-ds/react';
import { deleteProduct } from '../client/APIClient';
import React from 'react';

export default function ProductCard({
  product,
  index,
  onClick,
  mutate,
}): JSX.Element {
  return (
    <li key={product.id}>
      <Card
        className="mx-8 my-8 flex flex-col justify-evenly"
        key={product.name}
      >
        <div data-cy={`card-${index}`} onClick={onClick}>
          <img className="h-144 w-full object-cover" src={product.imgUrl} />
          <p className="font-bold mt-8">{product.name}</p>
          <p>{product.description}</p>
        </div>
        <Button
          negative
          pill
          small
          data-cy={'Delete'}
          onClick={() => {
            deleteProduct(product.id).then(() => mutate('/api/products'));
          }}
        >
          Remove
        </Button>
      </Card>
    </li>
  );
}
