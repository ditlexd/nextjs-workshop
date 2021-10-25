import { Button, Modal, TextField } from '@fabric-ds/react';
import { useState } from 'react';
import { updateProduct } from '../client/APIClient';
import { useSWRConfig } from 'swr';
import { Product } from '../totally-real-database/api';

export default function EditProductModal({
  product,
  onDismiss,
}: {
  product: Product | null;
  onDismiss: () => void;
}) {
  const { mutate } = useSWRConfig();
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [imgUrl, setImgUrl] = useState(product?.imgUrl || '');

  function onSubmit(e) {
    e.preventDefault();
    updateProduct({ name, description, imgUrl, id: product.id })
      .then(() => mutate('/api/products'))
      .then(onDismiss);
  }

  return (
    <Modal title="Edit product" right open={!!product} onDismiss={onDismiss}>
      <form onSubmit={onSubmit}>
        <TextField
          data-cy={'edit-name'}
          className="mb-12"
          label={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          data-cy={'edit-description'}
          className="mb-12"
          label={'Description'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          data-cy={'edit-image-url'}
          className="mb-12"
          label={'Image url'}
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button data-cy={'submit-edit'} type={'submit'}>
          Submit
        </Button>
      </form>
    </Modal>
  );
}
