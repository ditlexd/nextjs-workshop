import { Button, TextField } from '@fabric-ds/react';
// @ts-expect-error Module '"@fabric-ds/elements"' has no exported member 'toast'.ts
import { toast } from '@fabric-ds/elements';
import Link from 'next/link';
import { useState } from 'react';
import { postNewProduct } from '../client/APIClient';

export default function NewProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    await postNewProduct(name, description, url);
    setName('');
    setDescription('');
    setUrl('');

    toast('Successfully created product');
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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button data-cy="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
