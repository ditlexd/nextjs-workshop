import { Database } from '../../totally-real-database/api';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new Database();

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
 * req.body should be an object { name: string, description: string, imgUr: string }
 * Should respond with a 201 status code or 400 if any of the arguments
 * are invalid (null/undefined)
 */
function post(req: NextApiRequest, res: NextApiResponse) {
  // TODO
}

/*
 * Get an existing product
 * Responds with 200 and the list of products or a single product
 * iff ID is provided.
 */
function get(req: NextApiRequest, res: NextApiResponse) {
  // TODO
}

/*
 * Delete a single product.
 * takes a query parameter 'id'. Returns 400 if the ID is null or undefined,
 * 404 if it does not exists. 201 if it exists and we successfully delete
 * the item.
 */
function del(req: NextApiRequest, res: NextApiResponse) {
  // TODO
}

/*
 * Update an existing item.
 * Should follow the same conventions as del, 400 if any of the parameters
 * 'name', 'description', 'imgUrl', 'id' are null or undefined.
 *
 */

function put(req: NextApiRequest, res: NextApiResponse) {
  // TODO
}

/*
 * This is a function we can use to reset our database to it's initial state.
 * We use this a lot in the tests, because we don't want the tests to interfere
 * with each other.
 */
function patch(req: NextApiRequest, res: NextApiResponse) {
  db.reset();
  res.status(204).end();
}
