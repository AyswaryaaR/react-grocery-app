import "./App.css";
import Products from "./products/Products";
import { getProducts, postProduct } from "./api/ProductApi";
import { IProduct, IIdentifierProduct } from "./interfaces/IProduct";
import AddProduct from "./products/AddProduct";
import AddProductDialogBox from "./products/AddProductDialogBox";
import { useState, useEffect } from "react";
import Total from "./products/Total";

const App = () => {
  const [canShowDialog, setCanShowDialog] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [products, setProducts] = useState([] as IIdentifierProduct[]);

  const onAddProduct = (product: IProduct) => {
    postProduct(product).then(() =>
      getProducts().then((products) => setProducts(products))
    );
  };

  useEffect(() => {
    if (!isSort) {
      getProducts().then((products: IIdentifierProduct[]) => {
        setProducts(products);
      });
    }
  }, [isSort]);

  return (
    <>
      <div>
        <h3>Happy Shopping!</h3>
      </div>
      <AddProduct addProduct={() => setCanShowDialog(true)} />
      {canShowDialog && <AddProductDialogBox onAddProduct={onAddProduct} />}
      <Products
        products={products}
        setProducts={setProducts}
        isSort={isSort}
        setIsSort={setIsSort}
      />
      <Total totalProducts={products} />
    </>
  );
};

export default App;
