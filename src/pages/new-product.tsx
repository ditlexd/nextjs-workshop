import { Button, TextField } from '@fabric-ds/react';
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
  }

  return (
    <div className={'page-container'}>
      <form onSubmit={onSubmit}>
        <TextField
          label={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label={'Description'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label={'Image url'}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button data-cy={'Submit'} type={'submit'}>
          Submit
        </Button>
      </form>
    </div>
  );
}
