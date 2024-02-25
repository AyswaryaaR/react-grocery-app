import { useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import "./products.css";
import Input from "../../components/input/Input";
import FileUpload from "../../components/fileUpload/FileUpload";
import Button from "../../components/button/Button";

export interface IAddProductDialogBox {
  onAddProduct: (product: IProduct) => void;
}

export const AddProductDialogBox = (props: IAddProductDialogBox) => {
  const initialProduct: IProduct = {
    Description: "",
    Quantity: "",
    Unit: "",
    Price: "",
    CostPerUnit: "",
    Iva: "",
    Date: "",
    Location: "",
    Store: "",
  };
  const [product, setProduct] = useState(initialProduct);
  const {
    Description,
    Quantity,
    Unit,
    Price,
    CostPerUnit,
    Iva,
    Date,
    Location,
    Store,
  } = product;

  return (
    <>
      <div>
        <Input
          onChange={(e) =>
            setProduct({ ...product, Description: e.target.value })
          }
          placeholder="Description"
          value={Description}
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Quantity: event.target.value,
            })
          }
          placeholder="Quantity"
          type="number"
          value={Quantity}
        />
      </div>

      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Unit: event.target.value,
            })
          }
          placeholder="Unit"
          type="number"
          value={Unit}
        />
      </div>

      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Price: event.target.value,
            })
          }
          placeholder="Price"
          value={Price}
          type="number"
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              CostPerUnit: event.target.value,
            })
          }
          placeholder="Cost per unit"
          value={CostPerUnit}
          type="number"
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Iva: event.target.value,
            })
          }
          placeholder="IVA"
          value={Iva}
          type="number"
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Date: event.target.value,
            })
          }
          placeholder="Date"
          value={Date}
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Location: event.target.value,
            })
          }
          placeholder="Location"
          value={Location}
        />
      </div>
      <div>
        <Input
          onChange={(event) =>
            setProduct({
              ...product,
              Store: event.target.value,
            })
          }
          placeholder="Store"
          value={Store}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            props.onAddProduct(product);
            setProduct(initialProduct);
          }}
          buttonText="Add"
        />
        <FileUpload onChange={() => {}} />
      </div>
    </>
  );
};

export default AddProductDialogBox;
