import { IIdentifierProduct } from "../interfaces/IProduct";
import ProductNameSort from "./ProductNameSort";
import { getProducts } from "../api/ProductApi";
import { useEffect, useState } from "react";
import EditProduct from "./edit/EditProduct";
import Total from "./Total";
import ViewProduct from "./view/ViewProduct";
import ProductHeader from "./view/ProductHeader";

export interface IProductProps {
  products: IIdentifierProduct[];
  setProducts: (sortedProducts: IIdentifierProduct[]) => void;
}

export interface IHeader {
  name: string;
  includeSort?: boolean;
}

const Products = ({ products, setProducts }: IProductProps) => {
  const [isSort, setIsSort] = useState(false);
  const [productId, setProductId] = useState("");

  const fetchProducts = () => {
    getProducts().then((newProducts) => setProducts(newProducts));
  };

  const headers: IHeader[] = [
    { name: "S.NO" },
    { name: "Product", includeSort: true },
    { name: "Quantity" },
    { name: "Cost in Euros" },
    { name: "Shop Name" },
    { name: "Actions" },
  ];

  useEffect(() => {
    if (!isSort) {
      getProducts().then((newProducts: IIdentifierProduct[]) => {
        setProducts(newProducts);
      });
    }
  }, [isSort, setProducts]);

  return (
    <>
      <table border={1 | 1}>
        <ProductHeader headers={headers}>
          <ProductNameSort
            setProducts={setProducts}
            products={products}
            isSort={isSort}
            setIsSort={setIsSort}
          />
        </ProductHeader>
        {products?.map((product: IIdentifierProduct, i: number) => (
          <>
            <tr key={product.id}>
              <td>{i + 1}</td>
              {productId === product.id && (
                <>
                  <EditProduct
                    product={product}
                    setProductId={setProductId}
                    fetchProducts={fetchProducts}
                  />
                </>
              )}
              {productId !== product.id && (
                <ViewProduct setProductId={setProductId} product={product} />
              )}
            </tr>
          </>
        ))}
      </table>
      <Total totalProducts={products} />
    </>
  );
};

export default Products;
