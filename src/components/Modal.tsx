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
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);

  function onSubmit(e) {
    e.preventDefault();
    updateProduct(name, description, imgUrl, product)
      .then(() => mutate('/api/products'))
      .then(onDismiss);
  }

  return (
    <Modal open={!!product} onDismiss={onDismiss}>
      <h4>Edit product</h4>
      <form onSubmit={onSubmit}>
        <TextField
          data-cy={'edit-name'}
          label={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          data-cy={'edit-description'}
          label={'Description'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          data-cy={'edit-image-url'}
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
