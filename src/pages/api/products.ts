import {
  getProducts,
  deleteElement,
  insertProduct,
  updateProduct,
  resetDatabase,
  getProduct,
} from '../../totally-real-database/database-api';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      get(req, res);
      break;
    case 'DELETE':
      del(req, res);
      break;
    case 'POST':
      post(req, res);
      break;
    case 'PUT':
      put(req, res);
      break;
    case 'PATCH':
      patch(req, res);
      break;
  }
}

/*
 * Create a new product.
 * Should an object { name: string, description: string, imgUr: string }
 * Should respond with a 201 status code or 400 if any of the arguments
 * are invalid (null/undefined)
 */
function post(req: NextApiRequest, res: NextApiResponse) {
  const { name, description, imgUrl } = JSON.parse(req.body);
  if (!name || !description || !imgUrl) {
    res.status(400).end();
    return;
  }
  insertProduct(name, description, imgUrl);
  res.status(201).end();
}

/*
 * Get an existing product
 * Should take an optional product ID as a parameter
 * Responds with 200 and the list of products or a single product
 * iff ID is provided.
 */
function get(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id === 'string') {
    getSingle(req, res, req.query.id);
  } else {
    res.status(200).json(getProducts());
  }
}

/*
 * Helper function to get a single product.
 * Should return 404 if the product with the given ID does not exists
 * 200 along with the product otherwise
 */

function getSingle(req: NextApiRequest, res: NextApiResponse, id: string) {
  const product = getProduct(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).end();
  }
}

/*
 * Delete a single product.
 * takes a query parameter 'id'. Returns 400 if the ID is null or undefined,
 * 404 if it does not exists. 201 if it exists and we successfully delete
 * the item.
 */
function del(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.id === 'undefined' || req.query.id === 'null') {
    res.status(400).end();
    return;
  }

  deleteElement(req.query.id as string);
  res.status(201).end();
}

/*
 * Update an existing item.
 * Should follow the same conventions as del, 400 if any of the parameters
 * 'name', 'description', 'imgUrl', 'id' are null or undefined.
 *
 */

function put(req: NextApiRequest, res: NextApiResponse) {
  const { name, description, imgUrl, id } = JSON.parse(req.body);
  if (!name || !description || !imgUrl || !id) {
    res.status(400).end();
    return;
  }

  updateProduct({ name, description, imgUrl, id });
  res.status(201).end();
}

/*
 * This is a function we can use to reset our database to it's initial state.
 * We use this a lot in the tests, because we don't want the tests to interfere
 * with each other.
 */
function patch(req: NextApiRequest, res: NextApiResponse) {
  resetDatabase();
  res.status(204).end();
}
