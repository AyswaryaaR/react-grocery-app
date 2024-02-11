import { IIdentifierProduct, IProduct } from "../interfaces/IProduct";

export const getProducts = () => {
  return fetch(`${process.env.REACT_APP_PRODUCTS_API_URL}products`)
    .then((res) => res.json())
    .catch(console.log);
};

export const postProduct = (product: IProduct) => {
  return fetch(`${process.env.REACT_APP_PRODUCTS_API_URL}products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch(console.log);
};

export const deleteProduct = (product: IIdentifierProduct) => {
  return fetch(
    `${process.env.REACT_APP_PRODUCTS_API_URL}products/${product.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  )
    .then((res) => res.json())
    .catch(console.log);
};
