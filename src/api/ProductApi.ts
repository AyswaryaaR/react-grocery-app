import { IIdentifierProduct, IProduct } from "../interfaces/IProduct";

export const getProducts = async () => {
  return await fetch(`${process.env.REACT_APP_PRODUCTS_API_URL}products`)
    .then((res) => res.json())
    .catch(console.log);
};

//POST accepts object
export const postProduct = async (product: IProduct) => {
  return await fetch(`${process.env.REACT_APP_PRODUCTS_API_URL}products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch(console.log);
};

//PUT accepts id, object
export const putProduct = async (id: string, updatedProduct: IProduct) => {
  return await fetch(
    `${process.env.REACT_APP_PRODUCTS_API_URL}products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    }
  )
    .then((res) => res.json())
    .catch(console.log);
};

//DELETE accepts id
export const deleteProduct = async (product: IIdentifierProduct) => {
  return await fetch(
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
