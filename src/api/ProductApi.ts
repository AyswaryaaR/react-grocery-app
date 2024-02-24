import { IIdentifierProduct, IProduct } from "../interfaces/IProduct";

export const getProducts = async (
  sort?: boolean,
  searchText?: string
): Promise<IIdentifierProduct[] | void> => {
  return await fetch(`${process.env.REACT_APP_PRODUCTS_API_URL}products`)
    .then(async (res) => {
      let products = (await res.json()) as IIdentifierProduct[];
      if (searchText && searchText.length > 0) {
        products = products.filter((product) =>
          product.Description.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      if (sort) {
        products.sort((a, b) => {
          // Convert names to lowercase for case-insensitive sorting
          const nameA = a.Description.toLowerCase();
          const nameB = b.Description.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      }
      return products;
    })
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
