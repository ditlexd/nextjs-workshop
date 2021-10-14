import { v4 as uuidv4 } from 'uuid';

export type Product = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
};

let products: Product[] = [
  {
    id: '6eee6ba7-2110-4216-9d3d-1b74621249ac',
    name: 'Pizza',
    description: 'Large Pizza. Very good. Much delicious. Try now!',
    imgUrl:
      'https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-600w-1060535249.jpg',
  },
  {
    id: '5548af50-be3d-4871-8b87-7f4c44869776',
    name: 'Car',
    description: 'Really good car for long trips with the whole family',
    imgUrl:
      'https://media.istockphoto.com/photos/boy-and-dog-in-toy-racing-car-picture-id1162019476?s=612x612',
  },
  {
    id: '81fc0c61-6e49-4886-aa93-bd3c3b099301',
    name: 'Socks',
    description: 'The most comfortable, most amazing socks ever',
    imgUrl:
      'https://images.pexels.com/photos/4495753/pexels-photo-4495753.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4495753.jpg&fm=jpg',
  },
  {
    id: '81fc0c61-6e49-4886-aa93-bd3c3b099301',
    name: 'Dress',
    description: 'Beautiful dress, perfect for a summer day in New York.',
    imgUrl:
      'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'd6207a88-c9f6-418e-a813-2a994f260806',
    name: 'Shoes',
    description: 'Best shoes around. Guaranteed!',
    imgUrl:
      'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '22247393-a58c-4b60-a38d-e5cba2f9a818',
    name: 'Books',
    description:
      'Probably the best, most fun books in the history of books. Maybe ever',
    imgUrl:
      'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 'dc9c70e5-cd85-4d9f-9584-c7ddc1b935fe',
    name: 'Coffee',
    description: 'Covfefe?',
    imgUrl:
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'ec49cd65-a4e8-44e5-a67c-da7cec46d175',
    name: 'Tea',
    description: 'Cozier than coffee. Impossible to misspell',
    imgUrl:
      'https://images.pexels.com/photos/1872902/pexels-photo-1872902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '25b1a909-a464-49d1-b024-a4cb90fbedb8',
    name: 'Dawg',
    description:
      'My dawg. Not the Dawg from the drug store. Almost never bites',
    imgUrl:
      'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export function deleteElement(idToDelete: string) {
  products = products.filter(({ id }) => id != idToDelete);
}

export function getProduct(id: string): Product? {
  return products.find((prod) => prod.id === id);
}

export function getProducts() {
  return products;
}

export function insertProduct(
  name: string,
  description: string,
  imgUrl: string
) {
  const newProduct = { name, description, imgUrl, id: uuidv4() };
  products = [newProduct, ...products];
}

export function updateProduct(newProduct: Product) {
  products = products.map((prod) => {
    if (prod.id === newProduct.id) {
      return { ...newProduct };
    }
    return prod;
  });
}

export function resetDatabase() {
  products = [
    {
      id: '6eee6ba7-2110-4216-9d3d-1b74621249ac',
      name: 'Pizza',
      description: 'Large Pizza. Very good. Much delicious. Try now!',
      imgUrl:
        'https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-600w-1060535249.jpg',
    },
    {
      id: '5548af50-be3d-4871-8b87-7f4c44869776',
      name: 'Car',
      description: 'Really good car for long trips with the whole family',
      imgUrl:
        'https://media.istockphoto.com/photos/boy-and-dog-in-toy-racing-car-picture-id1162019476?s=612x612',
    },
    {
      id: '81fc0c61-6e49-4886-aa93-bd3c3b099301',
      name: 'Socks',
      description: 'The most comfortable, most amazing socks ever',
      imgUrl:
        'https://images.pexels.com/photos/4495753/pexels-photo-4495753.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4495753.jpg&fm=jpg',
    },
    {
      id: '81fc0c61-6e49-4886-aa93-bd3c3b099301',
      name: 'Dress',
      description: 'Beautiful dress, perfect for a summer day in New York.',
      imgUrl:
        'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'd6207a88-c9f6-418e-a813-2a994f260806',
      name: 'Shoes',
      description: 'Best shoes around. Guaranteed!',
      imgUrl:
        'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '22247393-a58c-4b60-a38d-e5cba2f9a818',
      name: 'Books',
      description:
        'Probably the best, most fun books in the history of books. Maybe ever',
      imgUrl:
        'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'dc9c70e5-cd85-4d9f-9584-c7ddc1b935fe',
      name: 'Coffee',
      description: 'Covfefe?',
      imgUrl:
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'ec49cd65-a4e8-44e5-a67c-da7cec46d175',
      name: 'Tea',
      description: 'Cozier than coffee. Impossible to misspell',
      imgUrl:
        'https://images.pexels.com/photos/1872902/pexels-photo-1872902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '25b1a909-a464-49d1-b024-a4cb90fbedb8',
      name: 'Dawg',
      description:
        'My dawg. Not the Dawg from the drug store. Almost never bites',
      imgUrl:
        'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
}
