import { useState } from "react";
import { IIdentifierProduct } from "../../interfaces/IProduct";
import { putProduct } from "../../api/ProductApi";

interface IEditProductProps {
  product: IIdentifierProduct;
  fetchProducts: () => void;
  setProductId: (id: string) => void;
}

const EditProduct = ({
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
      <td>
        <input
          value={updatedProduct.Name}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, Name: e.target.value })
          }
        />
      </td>
      <td>
        <input
          value={updatedProduct.Quantity}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Quantity: Number(e.target.value),
            })
          }
        />
      </td>
      <td>
        <input
          value={updatedProduct.Cost}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              Cost: Number(e.target.value),
            })
          }
        />
      </td>
      <td>
        <input
          value={updatedProduct.ShopName}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, ShopName: e.target.value })
          }
        />
      </td>
      <td>
        <button onClick={() => handleSaveClick()}>Save</button>
        <button onClick={resetProductId}>Cancel</button>
      </td>
    </>
  );
};

export default EditProduct;
