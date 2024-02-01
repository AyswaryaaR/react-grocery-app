import { IProduct } from "../interfaces/IProduct";
export const products: IProduct[] = [
  { Name: "Meal maker", Quantity: 500, Cost: 1.4, ShopName: "Darshan nepal" },
  { Name: "Jaggery", Quantity: 200, Cost: 2.5, ShopName: "Desi food store" },
  { Name: "Milk", Quantity: 1, Cost: 0.99, ShopName: "Sher e punjab" },
  { Name: "Bread", Quantity: 750, Cost: 1.5, ShopName: "Darshan nepal" },
  { Name: "Cheese", Quantity: 500, Cost: 3.2, ShopName: "Popat store" },
];
export interface IProductProps {
  products: IProduct[];
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
              <strong>Product</strong>
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
        {props.products.map((product: IProduct, i: number) => (
          <>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{product.Name}</td>
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
