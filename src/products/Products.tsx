import { IIdentifierProduct } from "../interfaces/IProduct";
export interface IProductProps {
  products: IIdentifierProduct[];
}
const Products = (props: IProductProps) => {
  return (
    <>
      <table border={1 | 1}>
        <thead>
          <tr key="sno">
            <td>
              <strong>S.NO</strong>
            </td>
            <td>
              <strong>Product</strong>{" "}
            </td>
            <td>
              <strong>Quantity</strong>
            </td>
            <td>
              <strong>Cost</strong>
            </td>
            <td>
              <strong>Shop Name</strong>
            </td>
          </tr>
        </thead>
        {props.products.map((product: IIdentifierProduct) => (
          <>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.Name} </td>
              <td>{product.Quantity}</td>
              <td>{product.Cost}</td>
              <td>{product.ShopName}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default Products;
