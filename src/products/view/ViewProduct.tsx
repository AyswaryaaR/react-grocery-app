import { deleteProduct } from "../../api/ProductApi";
import { IIdentifierProduct } from "../../interfaces/IProduct";

interface IViewProductProps {
  index: number;
  product: IIdentifierProduct;
  setProductId: (id: string) => void;
  fetchProducts: () => void;
}

const ViewProduct = ({
  index,
  product,
  setProductId,
  fetchProducts,
}: IViewProductProps) => {
  const onDelete = async () => {
    deleteProduct(product);
    fetchProducts();
  };
  return (
    <>
      <td>{index + 1}</td>
      <td>{product.Name} </td>
      <td>{product.Quantity}</td>
      <td>{product.Cost}</td>
      <td>{product.ShopName}</td>
      <td>
        <button onClick={() => setProductId(product.id)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </>
  );
};

export default ViewProduct;
