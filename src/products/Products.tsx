import { IIdentifierProduct } from "../interfaces/IProduct";
import ProductNameSort from "./ProductNameSort";

export interface IProductProps {
  products: IIdentifierProduct[];
  setProducts: (sortedProducts: IIdentifierProduct[]) => void;
  isSort: boolean;
  setIsSort: (isSort: boolean) => void;
}

const Products = ({
  products,
  setProducts,
  isSort,
  setIsSort,
}: IProductProps) => {
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
              <ProductNameSort
                setProducts={setProducts}
                products={products}
                isSort={isSort}
                setIsSort={setIsSort}
              />
            </td>
            <td>
              <strong>Quantity</strong>
            </td>
            <td>
              <strong>Cost in Euros</strong>
            </td>
            <td>
              <strong>Shop Name</strong>
            </td>
          </tr>
        </thead>
        {products.map((product: IIdentifierProduct) => (
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
