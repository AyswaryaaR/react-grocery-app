import { deleteProduct } from "../../api/ProductApi";
import Button from "../../components/button/Button";
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
      <td>{product.Description} </td>
      <td>{product.Quantity}</td>
      <td>{product.Unit}</td>
      <td>{product.Price}</td>
      <td>{product.CostPerUnit}</td>
      <td>{product.Iva}</td>
      <td>{product.Date}</td>
      <td>{product.Location}</td>
      <td>{product.Store}</td>
      <td>
        <Button onClick={() => setProductId(product.id)} buttonText="Edit" />
        <Button onClick={onDelete} buttonText="Delete" />
      </td>
    </>
  );
};

export default ViewProduct;
