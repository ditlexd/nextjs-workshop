
## This is a workshop plannned for students.

It is still a WIP, but all the parts are mostly there. 

The plan is to have a foundation laid down for students to learn Nextjs and the basics on how to use Fabric.

The workflow will be for all the test commented out, as well as a lot of code removed. Then the students can uncomment
one test after the other and implement the necessary features until the test passes, and then continue with the next test.


## Welcome to the FINN Nextjs workshop!

To get started you need to go the github repo and download the project.
This is easiest done by opening a terminal window, navigating to the folder you'd like to save the project in,
and running 
```bash
git clone https://github.com/ditlexd/nextjs-workshop.git
```

Once that is done you'll need to insall all the dependencies and start the development server.

## Installing dependencies and running the server

First, run the development server:

```bash
npm install

npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

We have written a bunch of tests for you, so that they will fail until you implement the correct feature,
and then they will pass!

To run the tests you need to look in the `cypress/integration/app.spec.js` file and uncomment the tests.
THen you need to run
```bash
npm run test
```

This will set up a seperate server on port `9000` and create a headless browser that will test that everything
works as it should. If this is confusing, don't worry. Hopefully it will make sense soon, and you should be able
to complete the workshop even if it doesn't! 

The workflow will be like this: Uncomment the next test, then work on implementing the feature it tests until it passes.
Then on to the next one.

## What we will build

We will make a simple CRUD app (Create, Read, Update, Delete) that is loosely inspired by Finn.no

We'll use FINNs design system called [Fabric](https://www.fabric-ds.io/) along with [Nextjs](https://nextjs.org/) to create this webapp.

Nextjs is a framework for React, and Fabric can be used with pure HTML, React, Vue etc. We will be using its React components along this
some of its CSS classes. 

We have made some components ready for you as well. The `<ProductCard>` and `<Modal>` components are 
made ready for you, but if you like a challenge, feel free to make these yourself! Or customize them.

## Render products

We will live demo this for you, so that you get a feel for how to approach these problems, along with learning a few ways
to fetch data with Nextjs. 

## Delete product

Here you need to first implement the backend (server) code for deleting a product. 

Go on into `src/pages/api/products.ts` and find the function call `del`. 

This function should parse the `id` of the item to be deleted from the `req` object, and then call the `totally-real-database` 
function `deleteElement`.

When this is done, send a `201` status code back to the client.

For the client code, you need to update the list of products somehow. You can do this any way you'd like, but what we
recommend for this app is that you use the `mutate()` function that is provided by [useSWR.](https://swr.vercel.app/docs/mutation)
This will fetch the new list of products automatically for you. 

Another option is to modify the `delete` API so that it returns the new list of products right away. 


## New product page

Ok so this one is a little different. Not only do we need to create the API endpoint for creating a new product, we also
need to build a new page for the input form we need. 

So here is what you need to do: 
- Implement the `post` function. It should update the product list in the database and return a `201` status code. 
- Create a new [page](https://nextjs.org/docs/basic-features/pages) by creating a file `src/pages/new-product`. This page should now be visible at `localhost:3000/new-product`.
- Set up a form with three [textfield](https://react.fabric-ds.io/textfield) and a button to submit the form.
- The form should do a POST request similar to the DELETE request you implemented in the previous assignment.
- The request needs to contain `name`, `description` and `imgUrl`.

## Update product page

Here you could use the provided `<Modal>` component. A `Modal` is a "pop up", or an overlay over the screen.

This modal takes two props: `productInModal` and `onDismiss`. The former is of the type `Product | null` while the latter
is a function that should trigger the removal of the modal. 
On dismiss is passed to the `Fabric` modal component, and is the function that is called when we exit the modal, either
by clicking out of it or hitting `ESC`.


An implementation of this could look like: 

```js
const [productInModal, setProductInModal] = useState<Product | null>(null);

...

{productInModal && (
  <EditProductModal
    product={productInModal}
    onDismiss={() => setProductInModal(null)}
  />
)}
```

We should probably add an `onClick` to the cards as well, one that calls `setProductInModal` with the card's Product as
argument. 

The API endpoint should be pretty similar to the new product one.

As for the client, you should probably do something like this:
- Have a state variable that decides if the modal is visibile or not. It should probably be activated if you click on
one of the products. We need a function 
- The modal should have a form, much like the new product page. The form should be pre-filled with values that 


