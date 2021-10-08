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

function post(req: NextApiRequest, res: NextApiResponse) {
  const { name, description, imgUrl } = JSON.parse(req.body);
  insertProduct(name, description, imgUrl);
  res.status(201).end();
}

function get(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id === 'string') {
    getSingle(req, res, req.query.id);
  } else {
    res.status(200).json(getProducts());
  }
}

function getSingle(req: NextApiRequest, res: NextApiResponse, id: string) {
  const product = getProduct(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).end();
  }
}

function del(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.id === 'undefined' || req.query.id === 'null') {
    res.status(400).end();
    return;
  }

  deleteElement(req.query.id as string);
  res.status(201).end();
}

function put(req: NextApiRequest, res: NextApiResponse) {
  const { name, description, imgUrl, id } = JSON.parse(req.body);
  if (!name || !description || !imgUrl || !id) {
    res.status(400).end();
    return;
  }

  updateProduct({ name, description, imgUrl, id });
  res.status(201).end();
}

function patch(req: NextApiRequest, res: NextApiResponse) {
  resetDatabase();
  res.status(204).end();
}
