import { useState } from "react";
import { IProduct } from "../interfaces/IProduct";
export interface IAddProductDialogBox {
  onAddProduct: (product: IProduct) => void;
}

export const AddProductDialogBox = (props: IAddProductDialogBox) => {
  const initialProduct: IProduct = {
    Name: "",
    Quantity: 0,
    Cost: 0,
    ShopName: "",
  };
  const [product, setProduct] = useState(initialProduct);

  return (
    <>
      <div>
        <input
          onChange={(e) =>
            setProduct({ ...product, Name: String(e.target.value) })
          }
          placeholder="Product name"
        />
      </div>
      <div>
        <input
          name="Quantity"
          onChange={(event) =>
            setProduct({
              ...product,
              Quantity: Number(event.target.value),
            })
          }
          placeholder="Quantity"
        />
      </div>

      <div>
        <input
          name="Cost"
          onChange={(event) =>
            setProduct({
              ...product,
              Cost: Number(event.target.value),
            })
          }
          placeholder="Cost"
        />
      </div>

      <div>
        <input
          name="Shop name"
          onChange={(event) =>
            setProduct({
              ...product,
              ShopName: String(event.target.value),
            })
          }
          placeholder="Shop name"
        />
      </div>
      <div>
        <button onClick={() => props.onAddProduct(product)}>Add</button>
      </div>
    </>
  );
};

export default AddProductDialogBox;
