import { useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import "./products.css";

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
  const { Cost, Name, Quantity, ShopName } = product;

  return (
    <>
      <div id="productName">
        <input
          className="input-field"
          onChange={(e) => setProduct({ ...product, Name: e.target.value })}
          placeholder="Product name"
          value={Name}
        />
      </div>
      <div>
        <input
          className="input-field"
          onChange={(event) =>
            setProduct({
              ...product,
              Quantity: Number(event.target.value),
            })
          }
          placeholder="Quantity"
          value={Quantity > 0 ? Quantity : ""}
        />
      </div>

      <div>
        <input
          className="input-field"
          onChange={(event) =>
            setProduct({
              ...product,
              Cost: Number(event.target.value),
            })
          }
          placeholder="Cost"
          value={Cost > 0 ? Cost : ""}
        />
      </div>

      <div>
        <input
          name="Shop name"
          className="input-field"
          onChange={(event) =>
            setProduct({
              ...product,
              ShopName: event.target.value,
            })
          }
          placeholder="Shop name"
          value={ShopName}
        />
      </div>
      <div>
        <button
          onClick={() => {
            props.onAddProduct(product);
            setProduct(initialProduct);
          }}
        >
          Add
        </button>
        <input type="file" />
      </div>
    </>
  );
};

export default AddProductDialogBox;
