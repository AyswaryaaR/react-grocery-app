import { IIdentifierProduct } from "../interfaces/IProduct";
import ProductNameSort from "./ProductNameSort";
import { getProducts } from "../api/ProductApi";
import { useEffect, useState } from "react";
import EditProduct from "./edit/EditProduct";
import Total from "./Total";
import ViewProduct from "./view/ViewProduct";
import ProductHeader from "./view/ProductHeader";
import Search from "./search/Search";

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
  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    setSearchText(value);
    getProducts(isSort, value).then((newProducts) =>
      setProducts(newProducts as IIdentifierProduct[])
    );
  };

  const onSort = () => {
    setIsSort(!isSort);
    getProducts(!isSort, searchText).then((newProducts) =>
      setProducts(newProducts as IIdentifierProduct[])
    );
  };

  const headers: IHeader[] = [
    { name: "S.NO" },
    { name: "Product", includeSort: true },
    { name: "Quantity(g/kg/unit/litre)" },
    { name: "Cost(euros)" },
    { name: "Shop Name" },
    { name: "Actions" },
  ];

  useEffect(() => {
    getProducts(isSort, searchText).then((newProducts) =>
      setProducts(newProducts as IIdentifierProduct[])
    );
  }, [isSort, searchText, setProducts]);
  return (
    <>
      <div>
        <Search searchText={searchText} onSearch={onSearch} />
      </div>
      <table border={1 | 1}>
        <ProductHeader headers={headers}>
          <ProductNameSort onSort={onSort} />
        </ProductHeader>
        {products?.map((product: IIdentifierProduct, i: number) => (
          <>
            <tr key={product.id}>
              {productId === product.id && (
                <>
                  <EditProduct
                    index={i}
                    product={product}
                    setProductId={setProductId}
                    fetchProducts={() =>
                      getProducts(isSort, searchText).then((newProducts) =>
                        setProducts(newProducts as IIdentifierProduct[])
                      )
                    }
                  />
                </>
              )}
              {productId !== product.id && (
                <ViewProduct
                  index={i}
                  fetchProducts={() =>
                    getProducts(isSort, searchText).then((newProducts) =>
                      setProducts(newProducts as IIdentifierProduct[])
                    )
                  }
                  setProductId={setProductId}
                  product={product}
                />
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
