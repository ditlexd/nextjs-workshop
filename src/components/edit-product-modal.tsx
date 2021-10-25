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
  // Call this function to update the product list mutate('/api/products')
  const { mutate } = useSWRConfig();

  function onSubmit() {
    // TODO: Implement what happens when we submit the form
  }

  // TODO: Create a form to update a product
  return (
    <Modal open={!!product} onDismiss={onDismiss}>
      <h4>Edit product</h4>
      <form onSubmit={onSubmit}>
        {/* TODO add some input fields and a submit button */}
      </form>
    </Modal>
  );
}
