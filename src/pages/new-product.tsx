import { Button, TextField } from '@fabric-ds/react';
import Link from 'next/link';
import { useState } from 'react';
import { postNewProduct } from '../client/APIClient';

export default function NewProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    await postNewProduct(name, description, imgUrl);
    setName('');
    setDescription('');
    setImgUrl('');
  }

  return (
    <div className="page-container mt-20">
      <div className="flex items-center justify-between	mt-40 mb-12">
        <h2>Create new product!</h2>
        <Link href="/">
          <a>
            <Button utility small>
              View all products
            </Button>
          </a>
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          className="mb-12"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Description"
          className="mb-12"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Image url"
          className="mb-12"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button data-cy="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
