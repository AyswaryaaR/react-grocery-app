import { useState } from "react";
import { IIdentifierProduct } from "../../../interfaces/IProduct";
import { putProduct } from "../../../api/ProductApi";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

interface IEditProductProps {
  index: number;
  product: IIdentifierProduct;
  fetchProducts: () => void;
  setProductId: (id: string) => void;
}

const EditProduct = ({
  index,
  product,
  setProductId,
  fetchProducts,
}: IEditProductProps) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const resetProductId = () => setProductId("");
  const handleSaveClick = async () => {
    const { id, ...productToUpdate } = updatedProduct;
    await putProduct(id, productToUpdate);
    resetProductId();
    fetchProducts();
  };

  return (
    <>
      <td>{index + 1}</td>
      <td>
        <Input
          value={updatedProduct.Description}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Description: e.target.value,
            })
          }
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Quantity}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Quantity: e.target.value,
            })
          }
          type="number"
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Unit}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Unit: e.target.value,
            })
          }
          type="number"
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Price}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Price: e.target.value,
            })
          }
          type="number"
        />
      </td>
      <td>
        <Input
          value={updatedProduct.CostPerUnit}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              CostPerUnit: e.target.value,
            })
          }
          type="number"
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Iva}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Iva: e.target.value,
            })
          }
          type="number"
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Date}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Date: e.target.value,
            })
          }
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Location}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Location: e.target.value,
            })
          }
        />
      </td>
      <td>
        <Input
          value={updatedProduct.Store}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Store: e.target.value,
            })
          }
        />
      </td>
      <td>
        <Button onClick={() => handleSaveClick()} buttonText="Save" />
        <Button onClick={resetProductId} buttonText="Cancel" />
      </td>
    </>
  );
};

export default EditProduct;
