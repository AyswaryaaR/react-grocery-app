import { deleteProduct } from "../../api/ProductApi";
import { IIdentifierProduct } from "../../interfaces/IProduct";

interface IViewProductProps {
  product: IIdentifierProduct;
  setProductId: (id: string) => void;
}

const ViewProduct = ({ product, setProductId }: IViewProductProps) => {
  return (
    <>
      <td>{product.Name} </td>
      <td>{product.Quantity}</td>
      <td>{product.Cost}</td>
      <td>{product.ShopName}</td>
      <td>
        <button onClick={() => setProductId(product.id)}>Edit</button>
        <button onClick={() => deleteProduct(product)}>Delete</button>
      </td>
    </>
  );
};

export default ViewProduct;
